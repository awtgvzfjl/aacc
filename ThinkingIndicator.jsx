import {motion} from "framer-motion"


export default function ThinkingIndicator(){


return (

<div

className="
flex
gap-2
p-4
"

>


{

[1,2,3].map(i=>(


<motion.div

key={i}

animate={{

y:[0,-6,0]

}}

transition={{

duration:.8,

repeat:Infinity,

delay:i*0.15

}}

className="
w-2
h-2
rounded-full
bg-gray-400
"

/>


))

}


</div>

)

}