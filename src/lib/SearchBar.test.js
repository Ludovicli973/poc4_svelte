import SearchBar from './SearchBar.svelte';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/svelte';

describe('SearchBar component', () => {
	beforeEach(() => {
		render(SearchBar);
	});
	test('button Search is present', () => {
		const elem = screen.getByText('Search');
		expect(elem).toBeInTheDocument();
	});
	test('clear button should be here when user write something', () => {
		const inputElem = screen.getByPlaceholderText('Search');
		fireEvent.change(inputElem, { target: { value: 'test' } });
		setTimeout(() => {
			const buttonClear = screen.getByText('Clear');
			expect(buttonClear).toBeInTheDocument();
		}, 300);
	});
	test('clear button should not be here when input is empty', () => {
		const inputElem = screen.getByPlaceholderText('Search');
		fireEvent.change(inputElem, { target: { value: '' } });
		const buttonClear = screen.queryByText('Clear');
		expect(buttonClear).not.toBeInTheDocument();
	});
	test('Input should be empty when click on clear button', () => {
		const inputElem = screen.getByPlaceholderText('Search');
		fireEvent.change(inputElem, { target: { value: 'test' } });
		setTimeout(() => {
			const buttonClear = screen.getByText('Clear');
			buttonClear.click();
			expect(inputElem.value).toBe('');
		}, 300);
	});
});
