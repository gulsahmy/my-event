import {useState} from "react"


const UseStateObject = () => {

    // const [ad, setAd] = useState ("Mehmet")
    // const [SoyAd, setSoyAd] = useState ("Yılmaz")
    // const [Meslek, setMeslek] = useState ("Ogretmen")
    // const [Maas, setMaas] = useState (50000)

   

    const [kisi, setKisi] = useState ({
        ad: "Mehmet",
        soyad: "Yılmaz",
        meslek: "Ogretmen",
        maas: 50000,
        mood: "Happy",
    })

    const [toggle, setToggle] = useState(true)

    const handleMood = () => {
        setKisi ({...kisi, mood: toggle ? "Sad" : "Happy"})
        setToggle(!toggle)
    }
    console.log(toggle)

    // const adDegistir = () => {
    //     setAd("Ahmet")
        
    // }

    // const SoyAdDegistir = () => {
    //     setSoyAd("Kaya")
    // }



  return (
    <div> 
        <h1>UseState Object Example</h1> 

        <h2>AD: {kisi.ad} </h2>
        <h2>SOYAD: {kisi.soyad} </h2>
        <h2>MESLEK: {kisi.meslek} </h2>
        <h2>MAAS: {kisi.maas} </h2>

        <h3>Mood: {kisi.mood} </h3>

        <button onClick={() => setKisi({...kisi, ad: "Ahmet"})} >ad degistir</button>
        <button onClick={() => setKisi({...kisi, soyad: "Kaya"})} >soyad degistir</button>
        <button onClick={() => setKisi({...kisi, maas: 50000})} >meslek degistir</button>
        <button onClick={() => setKisi({...kisi, maas: kisi.maas + 5000})}>maas arttır</button>
        <button onClick={() => setKisi({...kisi, maas: kisi.maas - 1000})}>maas azalt</button>
       
        <button onClick={handleMood}>Happy/Sad</button>
        </div>
  )
}

export default UseStateObject