import { useState } from 'react';
import './App.css';

const initialFormData = {
  name: '',
  email: '',
  password: '',
};

const initialErrors = {
  name: '',
  email: '',
  password: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(fieldName, value) {
  const trimmedValue = value.trim();

  if (fieldName === 'name' && trimmedValue.length === 0) {
    return 'Name is required.';
  }

  if (fieldName === 'email' && !emailPattern.test(trimmedValue)) {
    return 'Please enter a valid email address.';
  }

  if (fieldName === 'password' && value.length < 6) {
    return 'Password must be at least 6 characters long.';
  }

  return '';
}

function validateForm(formValues) {
  return {
    name: validateField('name', formValues.name),
    email: validateField('email', formValues.email),
    password: validateField('password', formValues.password),
  };
}

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState(initialErrors);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const formErrors = validateForm(formData);
  const isFormValid = Object.values(formErrors).every((error) => error === '');

  const getInputClassName = (fieldName) => {
    if (!touched[fieldName] && formData[fieldName].length === 0) {
      return 'form-input';
    }

    return errors[fieldName] ? 'form-input invalid' : 'form-input valid';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const fieldError = validateField(name, value);

    // Controlled inputs keep React state as the single source of truth.
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: fieldError,
    }));

    setSuccessMessage('');
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      password: true,
    });

    if (Object.values(validationErrors).some((error) => error !== '')) {
      return;
    }

    setSuccessMessage('Registration completed successfully.');
    setFormData(initialFormData);
    setErrors(initialErrors);
    setTouched(initialErrors);
    setShowPassword(false);
  };

  return (
    <main className="page-shell">
      <section className="registration-card" aria-labelledby="registration-title">
        <div className="card-header">
          <p className="eyebrow">React Form Project</p>
          <h1 id="registration-title">Registration Form Validation</h1>
          <p className="subtitle">
            Create an account with instant field validation and accessible feedback.
          </p>
        </div>

        {successMessage && (
          <p className="success-message" role="status" aria-live="polite">
            {successMessage}
          </p>
        )}

        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              className={getInputClassName('name')}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {touched.name && errors.name && (
              <span id="name-error" className="error-message" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className={getInputClassName('email')}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@example.com"
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {touched.email && errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <span className="character-counter" aria-live="polite">
                {formData.password.length}/6 characters
              </span>
            </div>

            <div className="password-field">
              <input
                id="password"
                className={getInputClassName('password')}
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter at least 6 characters"
                aria-invalid={Boolean(touched.password && errors.password)}
                aria-describedby={
                  errors.password ? 'password-error password-help' : 'password-help'
                }
              />
              <button
                className="password-toggle"
                type="button"
                onClick={() => setShowPassword((isVisible) => !isVisible)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>

            <span id="password-help" className="field-help">
              Minimum 6 characters required.
            </span>

            {touched.password && errors.password && (
              <span id="password-error" className="error-message" role="alert">
                {errors.password}
              </span>
            )}
          </div>

          <button className="submit-button" type="submit" disabled={!isFormValid}>
            Register
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
