# from typing import List, Optional
# from pydantic_settings import BaseSettings, SettingsConfigDict


# class Settings(BaseSettings):
#     supabase_url: str
#     supabase_key: str
#     supabase_service_key: str
#     cors_origins: Optional[str] = "http://localhost:3000"

#     model_config = SettingsConfigDict(env_file=".env", case_sensitive=False)

#     @property
#     def cors_origins_list(self) -> List[str]:
#         return [origin.strip() for origin in self.cors_origins.split(",")]


# settings = Settings()

from typing import List, Optional
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()


class Settings(BaseModel):
    supabase_url: str
    supabase_key: str
    supabase_service_key: str
    cors_origins: Optional[str] = "http://localhost:3000"

    @property
    def cors_origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.cors_origins.split(",")]


settings = Settings(
    supabase_url=os.getenv("SUPABASE_URL"),
    supabase_key=os.getenv("SUPABASE_KEY"),
    supabase_service_key=os.getenv("SUPABASE_SERVICE_KEY"),
    cors_origins=os.getenv("CORS_ORIGINS", "http://localhost:3000"),
)