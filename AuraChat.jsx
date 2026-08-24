import {useState} from "react"

import MessageBubble from "./MessageBubble"
import ThinkingIndicator from "./ThinkingIndicator"
import InputBar from "./InputBar"



export default function AuraChat(){


const [messages,setMessages]=useState([

{

role:"aura",

text:"Good evening. AURA is online."

}

])


const [input,setInput]=useState("")


const [thinking,setThinking]=useState(false)



function send(){


if(!input)return



setMessages([

...messages,

{

role:"user",

text:input

}

])



setInput("")

setThinking(true)



setTimeout(()=>{


setThinking(false)



setMessages(prev=>[

...prev,

{

role:"aura",

text:"System response generated."

}

])


},1200)


}



return (

<div

className="
relative
h-full
"

>


<div

className="
h-[75%]
overflow-y-auto
"

>


{

messages.map((item,index)=>(


<MessageBubble

key={index}

role={item.role}

text={item.text}

/>


))

}



{

thinking && <ThinkingIndicator/>

}


</div>



<InputBar

value={input}

setValue={setInput}

send={send}

/>


</div>

)

}