  
  
const Event = () => {


  let message = "Hosgeldin FS16"



    const handleTıkla = (e) => {
        alert("tıklandı")
        console.log(e)
        console.log(e.target)
        console.log("ID:", e.target.id)
        console.log("NAME:", e.target.name)
    }

    function handleCıkış(msg) {
        console.log(msg)
    }

    const handleMsgDegistir = function () {
        message = "Merhaba React Dostlari"
    }


    return(
        <div>
            <h1>Events</h1>
            <button onClick={handleTıkla} id="btn" name="my-button" >Tıkla</button>

            <button onClick={() => alert("Silindi")} >Sil</button>

            <button onClick={() => handleCıkış(message)} >Cıkış</button>

            <button onClick={handleMsgDegistir} >Degistir</button>

            <p>{message}</p>
        </div>
    )
}

export default Event