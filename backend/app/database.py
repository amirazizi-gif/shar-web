from postgrest import PostgrestClient
from app.config import settings

def get_supabase():
    return PostgrestClient(
        f"{settings.supabase_url}/rest/v1",
        headers={
            "apikey": settings.supabase_key,
            "Authorization": f"Bearer {settings.supabase_key}"
        }
    )