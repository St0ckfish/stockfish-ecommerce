import React,{ useState } from 'react';

const Btn = () => {
    const [state, setState] = useState({count: 0, name: "Mostapha"})

    const increment = (v) =>{
        for(let i=0; i<v;i++){
            setState((prev) => ({...state, count:prev.count +1}))
        }
    };

    return(
        <>
        <p>{state.count}</p>
            <button onClick={()=> increment(1)}>+</button>
        </>
    )
}

export default Btn;