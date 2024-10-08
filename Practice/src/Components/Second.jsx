import React, { useEffect, useState } from 'react'

function Second() {

    const [data, setData] = useState(null)

    useEffect(() => {


        fetch("https://jsonplaceholder.typicode.com/todos/3")
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))


    }, [])

    return (
        <div className='flex justify-center align-middle m-10'>
            <div> {

                data ? (<div>
                    <h1>Title : {data.title}</h1>
                    <h2>UserId : {data.id}</h2>

                </div>) : (<p>loading...</p>)


            }
            </div>
        </div>
    );


}


export default Second
