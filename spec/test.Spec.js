import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App component tests', () => {
  // Test 1: Check if the input field renders and updates when typing (Task 1.1 and Task 1.2 combined)
  it('should render the search input and update its value when typing', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');

    // Check if input field is rendered
    expect(inputElement).toBeTruthy();  // Use toBeTruthy instead of toBeInTheDocument

    // Simulate typing in the input field and check the updated value
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    expect(inputElement.value).toBe('Fr');
  });

  // Test 2: Check if suggestions dropdown renders and displays filtered data (Task 1.3)
  it('should show filtered suggestions based on the input value', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing 'Fr' in the input field
    fireEvent.change(inputElement, { target: { value: 'Fr' } });

    // Check if the filtered suggestions are displayed
    const suggestionItems = screen.getAllByText(/Fr/i);
    expect(suggestionItems.length).toBeGreaterThan(0); // Ensure at least one suggestion is shown
  });

  // Test 3: Check if clicking on a suggestion populates the input (Task 1.4)
  it('should populate the input with the clicked suggestion', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: 'Fr' } });

    // Simulate clicking on a suggestion
    const suggestionItem = screen.getByText('France');
    fireEvent.click(suggestionItem);

    // Check if the input is updated with the clicked suggestion
    expect(inputElement.value).toBe('France');
  });

  // Test 4: Hide suggestions on Escape key press (Task 2.1)
  it('should hide suggestions when the Escape key is pressed', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing to show suggestions
    fireEvent.change(inputElement, { target: { value: 'Fr' } });

    // Simulate pressing the Escape key
    fireEvent.keyDown(inputElement, { key: 'Escape', code: 'Escape' });

    // Check if suggestions are hidden (use toBeNull instead of not.toBeInTheDocument)
    const dropdown = screen.queryByRole('list');
    expect(dropdown).toBeNull();  // Dropdown should not exist after pressing Escape
  });

  // Test 5: Ensure suggestions reappear when user resumes typing after pressing Escape (Task 2.2)
  it('should show suggestions again when typing after pressing Escape', () => {
    render(<App />);
    const inputElement = screen.getByRole('textbox');

    // Simulate typing and pressing Escape
    fireEvent.change(inputElement, { target: { value: 'Fr' } });
    fireEvent.keyDown(inputElement, { key: 'Escape', code: 'Escape' });

    // Simulate typing again
    fireEvent.change(inputElement, { target: { value: 'Fra' } });

    // Check if suggestions reappear
    const suggestionItems = screen.getAllByText(/Fra/i);
    expect(suggestionItems.length).toBeGreaterThan(0);
  });
});
