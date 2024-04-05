
import {useState} from "react"

const KeyboardClipboard = () => {

    const [inputData, setInputData] = useState("")

   const handleKeyDown = (e) => {
    console.log(e.keyCode)
    if (e.keyCode > 47 && e.keyCode < 58) {
        alert("a number pressed")
        e.preventDefault()
    }
   }
   const handleCopyArea = (e) => {
    alert("Kopyalama yapılamaz")
    e.preventDefault()
   }

   const handleCutArea = (e) => {
    alert("Bu metin kesilemez")
    e.preventDefault()
   }

   const handlePasteArea = (e) => {
    e.target.style.fontFamily = "tahoma"
    e.target.style.fontSize = "1.4rem"
    e.target.style.color = "red"
   }

    return (
        <div className="container mt-4">
         <h2>Keyboard Events</h2>   

         <input 
         type="text" 
         classname="form-control" 
         onChange={(e) => setInputData(e.target.value.toLocaleUpperCase())} 
         value={inputData}
         onKeyDown={handleKeyDown}
         />

         <div className="mt-3">
            <p>{inputData.toLocaleUpperCase()}</p>

         </div>

         <div>
            <textarea classname="form-control"
            name="textarea"
            id="area"
            cols="30"
            rows="10"
            onCopy={handleCopyArea}
            onCut={handleCutArea}
            onPaste={handlePasteArea}
            ></textarea>
         </div>          
        </div>
    )
}

export default KeyboardClipboard