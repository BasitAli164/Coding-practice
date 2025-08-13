from fastapi import FastAPI,HTTPException;
from pydantic import BaseModel;
from typing import Optional;
import uvicorn;


app=FastAPI(
    title="Simple Text API"
)