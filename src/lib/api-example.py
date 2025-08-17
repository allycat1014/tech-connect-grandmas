# Example Python FastAPI backend implementation
# Install: pip install fastapi uvicorn sqlite3

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import sqlite3
import json
from datetime import datetime

app = FastAPI()

# Enable CORS for your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
def init_db():
    conn = sqlite3.connect('techconnect.db')
    cursor = conn.cursor()
    
    # Create help_requests table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS help_requests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            help_type TEXT NOT NULL,
            description TEXT NOT NULL,
            preferred_date TEXT NOT NULL,
            preferred_time TEXT NOT NULL,
            meeting_type TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create volunteer_applications table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS volunteer_applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            age TEXT NOT NULL,
            skills TEXT NOT NULL,  -- JSON array stored as text
            experience TEXT NOT NULL,
            availability TEXT NOT NULL,  -- JSON array stored as text
            meeting_types TEXT NOT NULL,  -- JSON array stored as text
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

# Initialize database on startup
init_db()

# Pydantic models
class HelpRequest(BaseModel):
    name: str
    email: str
    phone: str
    help_type: str
    description: str
    preferred_date: str
    preferred_time: str
    meeting_type: str

class VolunteerApplication(BaseModel):
    name: str
    email: str
    age: str
    skills: List[str]
    experience: str
    availability: List[str]
    meeting_types: List[str]

# API endpoints
@app.post("/api/help-requests")
async def submit_help_request(request: HelpRequest):
    try:
        conn = sqlite3.connect('techconnect.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO help_requests 
            (name, email, phone, help_type, description, preferred_date, preferred_time, meeting_type)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            request.name, request.email, request.phone, request.help_type,
            request.description, request.preferred_date, request.preferred_time, request.meeting_type
        ))
        
        conn.commit()
        request_id = cursor.lastrowid
        conn.close()
        
        return {"success": True, "id": request_id, "message": "Help request submitted successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/volunteer-applications")
async def submit_volunteer_application(application: VolunteerApplication):
    try:
        conn = sqlite3.connect('techconnect.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO volunteer_applications 
            (name, email, age, skills, experience, availability, meeting_types)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            application.name, application.email, application.age,
            json.dumps(application.skills), application.experience,
            json.dumps(application.availability), json.dumps(application.meeting_types)
        ))
        
        conn.commit()
        application_id = cursor.lastrowid
        conn.close()
        
        return {"success": True, "id": application_id, "message": "Volunteer application submitted successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/help-requests")
async def get_help_requests():
    """Get all help requests - useful for admin/volunteer dashboard"""
    try:
        conn = sqlite3.connect('techconnect.db')
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM help_requests ORDER BY created_at DESC')
        requests = cursor.fetchall()
        conn.close()
        
        return {"success": True, "data": requests}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/volunteer-applications")
async def get_volunteer_applications():
    """Get all volunteer applications - useful for admin dashboard"""
    try:
        conn = sqlite3.connect('techconnect.db')
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM volunteer_applications ORDER BY created_at DESC')
        applications = cursor.fetchall()
        conn.close()
        
        return {"success": True, "data": applications}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

# To run this server:
# 1. Save this file as api_server.py
# 2. Install dependencies: pip install fastapi uvicorn
# 3. Run: python api_server.py
# 4. Your API will be available at http://localhost:8000