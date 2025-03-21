import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import counterReducer from './store/slices/counterSlice';
import App from './App';

function renderWithStore(initialState = { counter: { value: 0 } }) {
    const store = configureStore({
        reducer: {
            counter: counterReducer,
        },
        preloadedState: initialState,
    });

    return render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}

describe('App Component', () => {
    it('muestra el valor inicial del contador', () => {
        renderWithStore({ counter: { value: 5 } });
        expect(screen.getByText(/Contador: 5/i)).toBeInTheDocument();
    });

    it('incrementa el contador al hacer clic en "+"', () => {
        renderWithStore();
        fireEvent.click(screen.getByText('+'));
        expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();
    });

    it('decrementa el contador al hacer clic en "-"', () => {
        renderWithStore({ counter: { value: 3 } });
        fireEvent.click(screen.getByText('-'));
        expect(screen.getByText(/Contador: 2/i)).toBeInTheDocument();
    });

    it('resetea el contador al hacer clic en "Reset"', () => {
        renderWithStore({ counter: { value: 7 } });
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
    });
});
