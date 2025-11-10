# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from app.config import settings
# from app.routes import projects
# import os

# app = FastAPI(
#     title="SHAR Associates API",
#     description="Backend API for SHAR Associates Company Website",
#     version="1.0.0"
# )

# # CORS middleware - Update with your production URLs
# origins = [
#     "http://localhost:3000",
#     "http://localhost:3001",
#     "https://shar-web.vercel.app/",  # Add your Vercel URL here
# ]

# # Get CORS origins from environment variable
# if settings.cors_origins:
#     origins.extend(settings.cors_origins.split(","))

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Include routers
# app.include_router(projects.router)

# @app.get("/")
# async def root():
#     return {
#         "message": "SHAR Associates API",
#         "version": "1.0.0",
#         "docs": "/docs",
#         "status": "running"
#     }

# @app.get("/health")
# async def health_check():
#     return {"status": "healthy"}

# # For local development
# if __name__ == "__main__":
#     import uvicorn
#     port = int(os.environ.get("PORT", 8000))
#     uvicorn.run(app, host="0.0.0.0", port=port)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routes import projects, upload  # Add upload
import os

app = FastAPI(
    title="SHAR Associates API",
    description="Backend API for SHAR Associates Company Website",
    version="1.0.0"
)

# CORS
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://shar-web.vercel.app/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(projects.router)
app.include_router(upload.router)  # Add this line

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