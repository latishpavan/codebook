import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../app/header';


describe('Header component tests', () => {
    test('should have title', () => {
        render(<Header />);
        expect(screen.getByText('CodeBook')).toBeInTheDocument();
    })
});
