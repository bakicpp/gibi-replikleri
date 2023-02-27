import { useEffect, useState } from "react";


export default function Test(){


    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('component ilk yüklendiğide çalışır')
    }, [])

    useEffect(() => {
        console.log('component render oldu!')  

    })

    useEffect(()=>{
        console.log("count degeri degisti : " + count)
    }, [count])
     

    return(
        <div>
            <h3>{count}</h3>
            <button className="bg-green-500" onClick={()=> setCount(count => count + 1)}>arttır</button>
            <button className="bg-red-500" onClick={()=> setCount(count => count - 1)}>azalt</button>
            
        </div>
    )
}