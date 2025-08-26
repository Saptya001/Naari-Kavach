def some_utility_function(param1, param2):
    # This is a placeholder for a utility function that performs a specific task.
    return param1 + param2

def another_utility_function(data):
    # This function could process data in a specific way.
    processed_data = [d * 2 for d in data]
    return processed_data

# Add more utility functions as needed for the AI service.
# utils.py

def process_input(user_input):
    """
    Preprocess user input (e.g., clean text, lowercase, remove noise, etc.)
    """
    return user_input.strip().lower()

def generate_response(processed_input):
    """
    Generate a meaningful response.
    For now, return a dummy reply. Later you can connect ML/NLP models.
    """
    if "help" in processed_input:
        return "We are here to help you. Please share your location or call emergency services."
    elif "hello" in processed_input:
        return "Hello! How can I assist you today?"
    else:
        return "I didn't quite understand. Could you please explain?"
