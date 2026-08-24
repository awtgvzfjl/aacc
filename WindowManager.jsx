import {useState} from "react"


export default function WindowManager(){


const [active,setActive]=useState(null)



return {


active,


open:(module)=>{

setActive(module)

},


close:()=>{

setActive(null)

}


}


}