import React from 'react';
import { LoginPage } from '../../app/login';
import { render, screen } from '@testing-library/react';

describe('<LoginPage />', () => {
	test('should have login and sign up buttons', () => {
		render(<LoginPage />);
        expect(screen.getByTestId('login')).toBeInTheDocument();
        expect(screen.getByTestId('signup')).toBeInTheDocument();
	})
})
