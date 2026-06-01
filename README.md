# Registration Form Validation

A responsive React.js registration form that validates Name, Email, and Password fields in real time. The submit button stays disabled until all fields are valid, then shows a success message and clears the form after submission.

## Project Objective

Create a professional registration form using React functional components, `useState`, controlled components, JavaScript validation, and CSS styling.

## Features

- Name, Email, and Password inputs
- Real-time validation while typing
- Regex-based email validation
- Disabled submit button until the form is valid
- Red border for invalid fields
- Green border for valid fields
- Success message after valid submission
- Form reset after successful submission
- Password show/hide toggle
- Password character counter
- Labels, `aria-invalid`, `aria-describedby`, and live feedback for accessibility
- Responsive centered card layout for desktop and mobile

## Project Structure

```text
src/
├── App.js
├── App.css
├── index.js
```

Additional Create React App files are kept for normal development and testing.

## Source Code Files

- `src/App.js`: Main React component, form state, validation functions, event handlers, and JSX.
- `src/App.css`: Complete responsive styling for the form, card, inputs, errors, success state, and buttons.
- `src/index.js`: React app entry point.

## Validation Logic

The form uses controlled components, so every input value is stored in React state through `useState`.

Validation rules are handled by `validateField(fieldName, value)`:

- Name is valid only when it is not empty after trimming spaces.
- Email is valid only when it matches the regex pattern:

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

- Password is valid only when it has at least 6 characters.

`validateForm(formValues)` runs all field validations together. The submit button uses this derived value:

```js
const isFormValid = Object.values(formErrors).every((error) => error === '');
```

If any error message exists, the button remains disabled.

## Step-by-Step Setup Instructions

1. Open the project folder:

```bash
cd /Users/thamizhvaanand/Desktop/registration-form
```

2. Install dependencies if needed:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open the app in the browser:

```text
http://localhost:3000
```

5. Create a production build:

```bash
npm run build
```

6. Run tests:

```bash
npm test -- --watchAll=false
```

## College Submission Documentation

### Title

Registration Form Validation using React.js

### Aim

To create a responsive registration form that validates user input in real time using React.js functional components, hooks, and JavaScript validation.

### Technologies Used

- React.js
- JavaScript
- HTML JSX
- CSS
- Create React App

### Modules

- Form UI module
- State management module using `useState`
- Validation module using JavaScript functions
- Accessibility and feedback module
- Responsive CSS styling module

### Algorithm

1. Initialize form state for name, email, and password.
2. Initialize error state for each field.
3. Update form state whenever the user types.
4. Validate the changed field immediately.
5. Display the related error message below the field.
6. Apply red border for invalid input and green border for valid input.
7. Check whether all fields are valid.
8. Keep the submit button disabled until all validations pass.
9. On successful submit, show a success message.
10. Clear the form and reset validation state.

### Expected Output

The user can submit the registration form only after entering a non-empty name, a valid email address, and a password with at least 6 characters. Invalid fields show clear error messages and styling.

### Conclusion

This project demonstrates how React controlled components, `useState`, event handling, regex validation, conditional rendering, and responsive CSS can be combined to build a clean and accessible registration form.

## Viva Questions and Answers

### 1. What is React?

React is a JavaScript library used to build user interfaces using reusable components.

### 2. What is a functional component?

A functional component is a JavaScript function that returns JSX to render UI.

### 3. What is `useState`?

`useState` is a React Hook used to add and update state inside functional components.

### 4. What is a controlled component?

A controlled component is a form element whose value is controlled by React state.

### 5. Why are controlled components useful?

They make form data easier to validate, reset, submit, and synchronize with UI state.

### 6. What is real-time validation?

Real-time validation checks input immediately as the user types, instead of waiting until final submission.

### 7. What is regex?

Regex, or regular expression, is a pattern used to match and validate strings.

### 8. Why is regex used for email validation?

Regex helps check whether the email follows a basic pattern such as `name@example.com`.

### 9. What is event handling in React?

Event handling means responding to user actions such as typing, clicking, focusing, or submitting a form.

### 10. What does `onChange` do?

`onChange` runs whenever an input value changes. In this project, it updates state and validates the field.

### 11. What does `onSubmit` do?

`onSubmit` runs when the form is submitted. It prevents default page reload, validates the form, and processes valid data.

### 12. Why is `event.preventDefault()` used?

It prevents the browser from reloading the page during form submission.

### 13. How is the submit button disabled?

The button uses the `disabled` attribute based on the `isFormValid` value.

### 14. How are error messages displayed?

Error messages are conditionally rendered below each field when validation fails.

### 15. How is accessibility supported?

The form uses labels, `aria-invalid`, `aria-describedby`, `role="alert"`, and `aria-live` so assistive technologies can understand the form state.
