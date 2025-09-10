# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Install system dependencies (optional but useful for AI/ML libs)
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency file first (for caching layers)
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY src/ ./src

# Expose service port (FastAPI/Flask usually run on 8000)
EXPOSE 8000

# Command to run the service
# If using FastAPI (with uvicorn)
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]

# If using Flask instead, comment the above CMD and use:
# CMD ["python", "src/main.py"]
