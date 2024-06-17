import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '10',
    prevValue: null,
    operation: null,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inputDigit: (state, action) => {
            if (state.value === '0') {
                state.value = action.payload;
            } else {
                state.value += action.payload;
            }
        },
        inputDecimal: (state) => {
            if (!state.value.includes('.')) {
                state.value += '.';
            }
        },
        clear: (state) => {
            state.value = '0';
            state.prevValue = null;
            state.operation = null;
        },
        performOperation: (state, action) => {
            const inputValue = parseFloat(state.value);

            if (state.prevValue === null) {
                state.prevValue = inputValue;
            } else if (state.operation) {
                const result = calculate(state.prevValue, inputValue, state.operation);
                state.prevValue = result;
                state.value = String(result);
            }

            state.operation = action.payload;
            state.value = '0';
        },
        equal: (state) => {
            const inputValue = parseFloat(state.value);

            if (state.operation && state.prevValue !== null) {
                const result = calculate(state.prevValue, inputValue, state.operation);
                state.value = String(result);
                state.prevValue = null;
                state.operation = null;
            }
        },
    },
});

const calculate = (firstOperand, secondOperand, operation) => {
    switch (operation) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
};

export const { inputDigit, inputDecimal, clear, performOperation, equal } = counterSlice.actions;

export default counterSlice.reducer;
