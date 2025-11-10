from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime

class ProjectBase(BaseModel):
    category: str = Field(..., description="Project category: mne, civil, event, support")
    title: str = Field(..., min_length=1, max_length=200)
    client: str = Field(..., min_length=1, max_length=200)
    year: str = Field(..., pattern=r'^\d{4}$')
    description: str = Field(..., min_length=1)
    images: List[str] = Field(..., min_length=1, max_length=4)

class ProjectCreate(ProjectBase):
    pass

class ProjectUpdate(ProjectBase):
    pass

class ProjectInDB(ProjectBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

class ProjectResponse(ProjectInDB):
    pass