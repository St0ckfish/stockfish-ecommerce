import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);
// export const Btn = () => {
//     const { count,setCount } = useContext(UserContext); // Access name directly
//     return(
//     <button onClick={() => }>+++</button>
        
//     )
// }
export const UserProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const incremrnt = () => {
        setCount(count+1);
        console.log(count)
    }

    return (
        <UserContext.Provider value={{ count, setCount,incremrnt }}> {/* Provide both name and setName functions */}
            {children}
        </UserContext.Provider>
    );
};
