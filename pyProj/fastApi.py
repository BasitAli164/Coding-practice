from fastapi import FastAPI # import fastAPI  to create api's
import uvicorn # import uvicorn for server


# Create a fastApi app instance
app = FastAPI(
    title="My First API",
    description="A simple Api using fastApi",
    version="1.0.0"
)

# define the root route(Homepage)
@app.get("/")
def read_root():
    return {"message":"hello basit ! How about the fast api "}

@app.get('/hello')
def hellow():
        return "basit"


# This block runs the server if this file is executed directly

if __name__=="__main__":
    # Start the server using uvicorn
    uvicorn.run("fastApi:app",host="127.0.0.1",port=8000,reload=True)


    # "main" is the filename (without .py), "app" is the FastApi instance
    # reload=True allows auto_reloading on code changes