from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routes import projects, upload

app = FastAPI(
    title="SHAR Associates API",
    description="Backend API for SHAR Associates Company Website",
    version="1.0.0"
)

# Allow all origins (development only) or specific patterns
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

# Add Vercel URLs
vercel_patterns = [
    "https://shar-web.vercel.app",
    "https://*.vercel.app",  # Note: This won't work directly
]

# For production, list all possible origins
# Or use allow_origin_regex
app.add_middleware(
    CORSMiddleware,
    allow_origin_regex=r"https://.*\.vercel\.app",  # Allow all Vercel deployments
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects.router)
app.include_router(upload.router)

@app.get("/")
async def root():
    return {
        "message": "SHAR Associates API",
        "version": "1.0.0",
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}


