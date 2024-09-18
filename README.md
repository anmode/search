![Kalvium Logo](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Search Box with Keyboard Interaction

## Learning Goals:
The objective of this lab is to explore how to use keyboard keys to trigger specific functionalities, such as hiding and showing elements on the web page. You will also learn how to dynamically filter and display data based on user input. For this lab, you will use data from the `resources/countryData.json` file.

## Tasks:

### Task 1: Implement a Search Box with Suggestions
- **Goal**: Create a dynamic search box that displays all possible suggestions when the user enters some initial text in the search box.
- **Details**:
  - The search box should dynamically update and display relevant suggestions from the `countryData.json` file as the user types.
  - Use React hooks to manage the state of the input value and the suggestions dropdown.
  - The suggestions should appear in a dropdown below the input box, and clicking on a suggestion should automatically fill the input box with that suggestion.
  - Display a maximum of 10 suggestions at a time for performance and usability.

#### Sub-tasks:
1. **Implement the input field and display suggestions**:
   - Create a text input field and add an `onChange` event handler to capture user input.
   - As the user types, filter the `countryData.json` file and display suggestions based on the input.
   - Ensure that the suggestions are filtered case-insensitively.

2. **Handle suggestion clicks**:
   - When the user clicks on one of the suggestions, it should populate the search box with the selected country name.
   - Clicking on a suggestion should also hide the suggestions dropdown.

### Task 2: Hide Suggestions When the Escape Key is Pressed
- **Goal**: Implement functionality to hide the suggestions dropdown when the Escape (`Esc`) key is pressed.
- **Details**:
  - When the user presses the Escape key while typing in the search box, the suggestions dropdown should disappear.
  - Ensure that when the user resumes typing after pressing Escape, the suggestions reappear.
  - Use the `onKeyDown` event handler to detect when the Escape key is pressed.

#### Sub-tasks:
1. **Implement the Escape key functionality**:
   - Use the `onKeyDown` event to detect when the user presses the Escape key.
   - Hide the suggestions dropdown when Escape is pressed by setting its display style to `none`.

2. **Re-display suggestions when typing resumes**:
   - After hiding the dropdown with Escape, ensure that typing any other key resumes the suggestion display.
   - Make sure the dropdown becomes visible again as soon as the user types another letter in the search box.

---

## Expected Behavior:

- When the user starts typing in the search box, a list of country names (up to 10) that match the input should appear in the dropdown.
- The suggestions should update dynamically as the user continues to type.
- When the user clicks on a suggestion, the search box should be populated with the selected country name, and the dropdown should hide.
- If the user presses the Escape key, the suggestions dropdown should disappear, but it should reappear once they resume typing.
