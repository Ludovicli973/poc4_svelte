import SearchBar from './SearchBar.svelte';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('SEARCH BAR ELEMENT', () => {
	test('render INPUT element', () => {
		render(SearchBar);
		const inputElem = screen.getByPlaceholderText('Search');
		expect(inputElem).toBeInTheDocument();
	});
});
