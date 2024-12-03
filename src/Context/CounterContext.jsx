import { createContext, useState } from "react";


export let CounterContext =createContext(0)


export default function CounterContextProvider(props){
    console.log(props);
    

    const [count,setCount]= useState(0)
    


    // function incrementNum(){
    //     setCount("aaaa")

    // }
    // // function decrementNum(){
    //     setCount(count --)

    // }



    return<>
    <CounterContext.Provider value={{count,setCount}}>
    {props.children}

    </CounterContext.Provider>

    
    </>
}