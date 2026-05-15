import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('Vérification texte h1 App-header', () => {
    render(<App />);
    const headerh1 = screen.getByRole('heading', { level: 1, name: /School Dashboard/ });
    expect(headerh1).toBeInTheDocument();
  });

  test('Vérification texte App-body', () => {
    render(<App />);
    const bodyp = screen.getByText(/Login to access the full dashboard/);
    expect(bodyp).toBeInTheDocument();
  });

  test('Vérification texte App-footer', () => {
    render(<App />);
    const footerp = screen.getByText(/Copyright \d{4} - Holberton School/);
    expect(footerp).toBeInTheDocument();
  });

  test('Vérification alt image App-header', () => {
    render(<App />);
    const headerImgAlt = screen.getByAltText(/holberton logo/);
    expect(headerImgAlt).toBeInTheDocument();
  });

  test('Vérification des inputs associés aux labels', () => {
    render(<App />);
    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Password/);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('Vérification du texte des labels', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/Email/);
    const passwordLabel = screen.getByLabelText(/Password/);
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('Vérification du bouton', () => {
    render(<App />);
    const formButton = screen.getByRole('button', { name: /Ok/ });
    expect(formButton).toBeInTheDocument();
  });
});