import React from 'react'
import { inputDigit, inputDecimal, clear, performOperation, equal } from '../Features/CounterSlice'
import { useSelector, useDispatch } from 'react-redux'

function Calculator() {
    const count = useSelector((state) => state.Counter.value)
    const dispatch = useDispatch();

    const handleDigit = (digit) => {
        dispatch(inputDigit(digit));
    };

    const handleDecimal = () => {
        dispatch(inputDecimal());
    };

    const handleClear = () => {
        dispatch(clear());
    };

    const handleOperation = (operation) => {
        dispatch(performOperation(operation));
    };

    const handleEqual = () => {
        dispatch(equal());
    };


    return (
        <>
            <div className='bg-blue-700 text-white text-center p-4 text-2xl'>
                Calculatore
            </div>

            <div className='text-5xl p-8 text-center'> {count}</div>

            <div className='  flex justify-center align-middle'>
                <div className='grid grid-cols-4 gap-5 place-content-center h-full '>


                    <button onClick={handleClear} className='bg-red-500 p-4 text-2xl m-2'>AC</button>
                    <button onClick={() => handleDigit('1')} className='bg-red-500 p-4 text-2xl m-2'>1</button>
                    <button onClick={() => handleDigit('2')} className='bg-red-500 p-4 text-2xl m-2'>2</button>
                    <button onClick={() => handleDigit('3')} className='bg-red-500 p-4 text-2xl m-2'>3</button>
                    <button onClick={() => handleDigit('4')} className='bg-red-500 p-4 text-2xl m-2'>4</button>
                    <button onClick={() => handleDigit('5')} className='bg-red-500 p-4 text-2xl m-2'>5</button>
                    <button onClick={() => handleDigit('6')} className='bg-red-500 p-4 text-2xl m-2'>6</button>
                    <button onClick={() => handleDigit('7')} className='bg-red-500 p-4 text-2xl m-2'>7</button>
                    <button onClick={() => handleDigit('8')} className='bg-red-500 p-4 text-2xl m-2'>8</button>
                    <button onClick={() => handleDigit('9')} className='bg-red-500 p-4 text-2xl m-2'>9</button>
                    <button onClick={() => handleDigit('0')} className='bg-red-500 p-4 text-2xl m-2'>0</button>

                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={handleDecimal}>.</button>

                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={() => handleOperation('+')}>+</button>
                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={() => handleOperation('-')}>-</button>
                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={() => handleOperation('*')}>*</button>
                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={() => handleOperation('/')}>/</button>
                    <button className='bg-red-500 p-4 text-2xl m-2' onClick={handleEqual}>=</button>
                </div>
            </div>



        </>
    )
}

export default Calculator
