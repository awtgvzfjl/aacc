import {useState} from "react"

import NeuralSpace from "../components/NeuralSpace"
import StatusLayer from "../components/StatusLayer"
import SystemWindow from "../components/SystemWindow"

import ModuleRegistry from "../system/ModuleRegistry"

import AuraModule from "../modules/AuraModule"


export default function Desktop(){


const [active,setActive]=useState(null)



function openModule(type){

if(type==="aura"){

setActive("aura")

}

}



function closeModule(){

setActive(null)

}



return (

<div

className="
relative
w-full
h-full
overflow-hidden
"

>


<StatusLayer/>


<NeuralSpace

openModule={openModule}

/>



{

active==="aura" &&

<SystemWindow

title="AURA"

onClose={closeModule}

>

<AuraModule/>

</SystemWindow>

}



</div>

)

}