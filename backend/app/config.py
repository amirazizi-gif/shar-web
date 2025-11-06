from pydantic import BaseSettings
from typing import List, Optional

class Settings(BaseSettings):
    supabase_url: str
    supabase_key: str
    supabase_service_key: str
    cors_origins: Optional[str] = "http://localhost:3000"
    
    @property
    def cors_origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins.split(",")]
    
    class Config:
        env_file = ".env"
        case_sensitive = False

settings = Settings()