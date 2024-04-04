import { useState } from "react"

const UseStateCounter = () => {

    // let sayac = 0

    const [sayac, setSayac] = useState(20)

    const handleInc = () => {
        // sayac = sayac + 1
        setSayac(sayac + 1)

    }


  return (

    <div>
        <h2>Use State Counter</h2>
        <h1>Count:{sayac}</h1>
        <button onClick={handleInc} >INC</button>
        <button onClick={() => setSayac(0)} >CLR</button> 
        <button onClick={() => setSayac(sayac - 1)} >DEC</button>

    </div>

  )
}

export default UseStateCounter