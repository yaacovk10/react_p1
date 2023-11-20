import { useState } from "react";

const App=()=>{
    const myStyle = {
        backgroundColor : 'blue',
      };
    const [n1, setn1] = useState(0)
    const [n2, setn2] = useState(0)
    const [result, setresult] = useState(0)

    const calc = (opr)=>{
        setresult(eval(`${n1} ${opr} ${n2}`))
    }
    const changestyle = ()=>{
       newstyle =  n1 *n2 * 100
    }
    return (
    <div>
        <input onChange={(e)=>setn1(e.target.value)}/>
        <input onChange={(e)=>setn2(e.target.value)}/>

        <button onClick= {(e)=>calc(e.target.innerText)} style={myStyle}>+</button>
        <button onClick= {(e)=>calc(e.target.innerText)} >-</button>
        <button onClick= {(e)=>calc(e.target.innerText)}>*</button>
        <button onClick= {(e)=>calc(e.target.innerText)}>/</button>




        <h2>Result:{result}</h2>
    </div>
    )
    }

export default App
