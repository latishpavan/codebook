import React from 'react';
import LoginPage from '../../app/login/Login';
import { render, screen } from '@testing-library/react';

describe('<LoginPage />', () => {
	test('should see username and password fields on screen', () => {
		render(<LoginPage />);
		expect(screen.getByText(/username/i)).toBeInTheDocument();
		expect(screen.getByText(/password/i)).toBeInTheDocument();
	})
})
