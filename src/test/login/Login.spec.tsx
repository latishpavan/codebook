import React from 'react';
import LoginPage from '../../app/login/Login';
import { render, screen } from '@testing-library/react';

describe('<LoginPage />', () => {
	test('should see username and password fields on screen', () => {
		render(<LoginPage />);
		expect(screen.getAllByText(/username/i)).toHaveLength(2);
		expect(screen.getAllByText(/password/i)).toHaveLength(2);
	})
})
