"""
AI Service Package
------------------
This package contains the core logic for the AI service,
including the main entrypoint and utility functions.
"""

from .main import app  # If your main.py defines a FastAPI/Flask app
from . import utils    # Import all helper functions

__all__ = ["app", "utils"]
