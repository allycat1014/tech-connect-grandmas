# Backend Decoupling Guide

This project has been decoupled to easily swap between different backend implementations. Here's how to set up your own Python/SQLite backend.

## Quick Setup

### 1. Environment Configuration

Create a `.env.local` file in your project root:

```env
# Use 'rest' for your Python backend, 'supabase' for Supabase
VITE_API_TYPE=rest

# Your Python backend URL (default: http://localhost:8000/api)
VITE_API_BASE_URL=http://localhost:8000/api
```

### 2. Python Backend Setup

1. **Install dependencies:**
   ```bash
   pip install fastapi uvicorn
   ```

2. **Use the example API:**
   - Copy `src/lib/api-example.py` to your backend directory
   - Rename it to `server.py` or similar
   - Run: `python server.py`

3. **Your API endpoints should be:**
   - `POST /api/help-requests` - Submit help requests
   - `POST /api/volunteer-applications` - Submit volunteer applications
   - `GET /api/help-requests` - Get all help requests (optional, for admin)
   - `GET /api/volunteer-applications` - Get all applications (optional, for admin)

### 3. Data Models

Your API should accept these JSON structures:

**Help Request:**
```json
{
  "name": "string",
  "email": "string", 
  "phone": "string",
  "help_type": "string",
  "description": "string",
  "preferred_date": "string",
  "preferred_time": "string",
  "meeting_type": "string"
}
```

**Volunteer Application:**
```json
{
  "name": "string",
  "email": "string",
  "age": "string", 
  "skills": ["array", "of", "strings"],
  "experience": "string",
  "availability": ["array", "of", "time slots"],
  "meeting_types": ["array", "of", "meeting types"]
}
```

### 4. API Response Format

Your API should return responses in this format:

**Success:**
```json
{
  "success": true,
  "data": {}, // optional
  "message": "Success message" // optional
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message"
}
```

## Architecture

The frontend uses an abstraction layer (`src/lib/api.ts`) that provides:

- **Interface-based design:** Easy to swap implementations
- **Type safety:** Full TypeScript support
- **Error handling:** Consistent error responses
- **Environment-based switching:** Toggle between backends via env vars

## Switching Backends

To switch between your Python backend and Supabase:

1. **Use Python backend:**
   ```env
   VITE_API_TYPE=rest
   VITE_API_BASE_URL=http://localhost:8000/api
   ```

2. **Use Supabase:**
   ```env
   VITE_API_TYPE=supabase
   ```

## Adding New API Methods

To add new functionality:

1. **Add method to interface in `src/lib/api.ts`:**
   ```typescript
   export interface TechConnectAPI {
     // existing methods...
     newMethod(data: NewDataType): Promise<ApiResponse>;
   }
   ```

2. **Implement in both RestAPI and SupabaseAPI classes**

3. **Use in your components:**
   ```typescript
   import { api } from "@/lib/api";
   
   const result = await api.newMethod(data);
   ```

This architecture ensures your beautiful UI can work with any backend implementation!
