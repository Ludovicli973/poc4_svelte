import Card from './Card.svelte';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/svelte';
import { vi } from 'vitest';

vi.mock('./import-base', () => ({
	base: 'http://localhost:3000'
}));

test('should render the anime card with a link to its details page', async () => {
	const anime = {
		_id: '1',
		title: 'Fullmetal Alchemist: Brotherhood',
		image: 'http://example.com/image1.jpg',
		type: 'TV'
	};

	render(Card, { anime });
	const link = screen.getByRole('link');
	expect(link).toHaveAttribute('href', 'http://localhost:3000/details/1');
});
