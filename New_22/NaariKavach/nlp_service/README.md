# README for NLP Service

# NaariKavach NLP Service

The NLP Service is a crucial component of the NaariKavach project, responsible for processing natural language inputs and providing intelligent responses. This service utilizes various NLP techniques to enhance user interaction and support the chatbot functionality.

## Directory Structure

- **app.py**: The main entry point for the NLP service, initializing the application and defining routes.
- **requirements.txt**: Lists the Python dependencies required for the NLP service.
- **models/**: Contains trained machine learning models used for intent classification and unsafe zone detection.
- **chatbot/**: 
  - **\_\_init\_\_.py**: Initializes the chatbot package.
  - **nlp_engine.py**: Contains the core NLP engine logic.
  - **multilingual.py**: Manages multilingual support for the chatbot.
  - **intent_classifier.py**: Classifies user intents based on input.
  - **response_generator.py**: Generates appropriate responses based on classified intents.
- **tests/**: Contains unit tests for the NLP service functionalities.
  - **test_chatbot.py**: Tests for the chatbot's functionality and performance.

## Installation

To install the required dependencies, run:

```
pip install -r requirements.txt
```

## Usage

To start the NLP service, run:

```
python app.py
```

Ensure that the necessary environment variables are set up before running the service.

## Testing

To run the tests for the NLP service, use:

```
pytest tests/
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.