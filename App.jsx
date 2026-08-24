import { useEffect, useState } from "react"

import BootScreen from "./components/BootScreen"
import Desktop from "./pages/Desktop"


export default function App(){

  const [boot,setBoot] = useState(true)


  useEffect(()=>{

    const timer = setTimeout(()=>{

      setBoot(false)

    },3500)


    return ()=>clearTimeout(timer)

  },[])


  return (

    <div className="w-full h-full">

      {
        boot

        ?

        <BootScreen/>

        :

        <Desktop/>

      }

    </div>

  )

}