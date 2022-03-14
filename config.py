import os

class Config:
    # Either set environment variables, or change this.
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'The most super secret ever, but not really'
