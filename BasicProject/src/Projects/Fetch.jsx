import React, { useEffect, useState } from 'react'
import axios from "axios"

function Fetch() {

    const [data1 ,setdata1] = useState([])
    const [data2 ,setdata2] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => {
                setdata1(response.data)
            })
            .catch(error => {
                console.log('Error' ,error);
            });
           
        axios.get('https://jsonplaceholder.typicode.com/todos/2')
            .then((response) => {
                setdata2(response.data)
            })
            .catch(error => {
                console.log('Error' ,error);
            });
           
    }, [])
    console.log(data1,data2)
    return (
        <div>

        </div>
    )
}

export default Fetch
