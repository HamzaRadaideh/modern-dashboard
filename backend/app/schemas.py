# app/schemas.py
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str

# app/schemas.py (continued)
class UserLogin(BaseModel):
    email: EmailStr
    password: str
