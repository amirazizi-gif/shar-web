from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.schemas.project import ProjectCreate, ProjectUpdate, ProjectResponse
from app.database import get_supabase
from supabase import Client

router = APIRouter(prefix="/api/projects", tags=["projects"])

@router.get("/", response_model=List[ProjectResponse])
async def get_all_projects(
    category: str = None,
    supabase: Client = Depends(get_supabase)
):
    """Get all projects, optionally filtered by category"""
    try:
        query = supabase.table("projects").select("*").order("created_at", desc=True)
        
        if category:
            query = query.eq("category", category)
        
        response = query.execute()
        return response.data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching projects: {str(e)}")

@router.get("/{project_id}", response_model=ProjectResponse)
async def get_project(
    project_id: int,
    supabase: Client = Depends(get_supabase)
):
    """Get a single project by ID"""
    try:
        response = supabase.table("projects").select("*").eq("id", project_id).execute()
        
        if not response.data:
            raise HTTPException(status_code=404, detail="Project not found")
        
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching project: {str(e)}")

@router.post("/", response_model=ProjectResponse, status_code=201)
async def create_project(
    project: ProjectCreate,
    supabase: Client = Depends(get_supabase)
):
    """Create a new project"""
    try:
        # Validate category
        valid_categories = ["mne", "civil", "event", "support"]
        if project.category not in valid_categories:
            raise HTTPException(
                status_code=400, 
                detail=f"Invalid category. Must be one of: {', '.join(valid_categories)}"
            )
        
        # Insert project
        response = supabase.table("projects").insert(project.model_dump()).execute()
        
        if not response.data:
            raise HTTPException(status_code=500, detail="Failed to create project")
        
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating project: {str(e)}")

@router.put("/{project_id}", response_model=ProjectResponse)
async def update_project(
    project_id: int,
    project: ProjectUpdate,
    supabase: Client = Depends(get_supabase)
):
    """Update an existing project"""
    try:
        # Check if project exists
        existing = supabase.table("projects").select("id").eq("id", project_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Project not found")
        
        # Validate category
        valid_categories = ["mne", "civil", "event", "support"]
        if project.category not in valid_categories:
            raise HTTPException(
                status_code=400, 
                detail=f"Invalid category. Must be one of: {', '.join(valid_categories)}"
            )
        
        # Update project
        response = supabase.table("projects").update(project.model_dump()).eq("id", project_id).execute()
        
        if not response.data:
            raise HTTPException(status_code=500, detail="Failed to update project")
        
        return response.data[0]
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error updating project: {str(e)}")

@router.delete("/{project_id}", status_code=204)
async def delete_project(
    project_id: int,
    supabase: Client = Depends(get_supabase)
):
    """Delete a project"""
    try:
        # Check if project exists
        existing = supabase.table("projects").select("id").eq("id", project_id).execute()
        if not existing.data:
            raise HTTPException(status_code=404, detail="Project not found")
        
        # Delete project
        supabase.table("projects").delete().eq("id", project_id).execute()
        return None
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting project: {str(e)}")

@router.get("/category/{category}", response_model=List[ProjectResponse])
async def get_projects_by_category(
    category: str,
    supabase: Client = Depends(get_supabase)
):
    """Get all projects in a specific category"""
    valid_categories = ["mne", "civil", "event", "support"]
    if category not in valid_categories:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid category. Must be one of: {', '.join(valid_categories)}"
        )
    
    return await get_all_projects(category=category, supabase=supabase)