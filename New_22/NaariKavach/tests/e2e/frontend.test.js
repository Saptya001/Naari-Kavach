// This file contains end-to-end tests for the frontend of the NaariKavach project using Jest and React Testing Library.

import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Frontend End-to-End Tests', () => {
    test('renders the homepage', () => {
        render(<App />);
        const linkElement = screen.getByText(/welcome to naarikavach/i);
        expect(linkElement).toBeInTheDocument();
    });

    test('navigates to the about page', () => {
        render(<App />);
        const aboutLink = screen.getByText(/about/i);
        aboutLink.click();
        const aboutElement = screen.getByText(/about naarikavach/i);
        expect(aboutElement).toBeInTheDocument();
    });

    test('displays the chatbot component', () => {
        render(<App />);
        const chatbotElement = screen.getByTestId('chatbot');
        expect(chatbotElement).toBeInTheDocument();
    });

    // Add more tests as needed for other components and functionalities
});