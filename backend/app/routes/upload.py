from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
from supabase import create_client
from app.config import settings
import uuid

router = APIRouter(prefix="/api/upload", tags=["upload"])

@router.post("/images")
async def upload_images(files: List[UploadFile] = File(...)):
    """Upload multiple images to Supabase Storage"""
    if len(files) > 4:
        raise HTTPException(status_code=400, detail="Maximum 4 images allowed")
    
    # Use service role key for uploads (bypasses RLS)
    supabase = create_client(settings.supabase_url, settings.supabase_service_key)
    uploaded_urls = []
    
    try:
        for file in files:
            # Validate file type
            if not file.content_type.startswith('image/'):
                raise HTTPException(status_code=400, detail=f"File {file.filename} is not an image")
            
            # Generate unique filename
            file_ext = file.filename.split('.')[-1]
            unique_filename = f"{uuid.uuid4()}.{file_ext}"
            file_path = f"projects/{unique_filename}"
            
            # Read file content
            content = await file.read()
            
            # Upload to Supabase Storage
            response = supabase.storage.from_("project-images").upload(
                file_path,
                content,
                {"content-type": file.content_type}
            )
            
            # Get public URL
            public_url = supabase.storage.from_("project-images").get_public_url(file_path)
            uploaded_urls.append(public_url)
        
        return {"urls": uploaded_urls}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Upload failed: {str(e)}")

@router.delete("/images")
async def delete_image(image_url: str):
    """Delete an image from Supabase Storage"""
    try:
        # Use service role key for deletes (bypasses RLS)
        supabase = create_client(settings.supabase_url, settings.supabase_service_key)
        
        # Extract file path from URL
        file_path = image_url.split("/project-images/")[-1]
        
        supabase.storage.from_("project-images").remove([file_path])
        
        return {"message": "Image deleted successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Delete failed: {str(e)}")