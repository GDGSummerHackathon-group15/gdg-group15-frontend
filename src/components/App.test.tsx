import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Test', () => {
	it('render gdg text', () => {
		render(<App />);
		const textElement = screen.getByText(/GDG Hackathon group15/i);
		expect(textElement).toBeInTheDocument();
	});
});