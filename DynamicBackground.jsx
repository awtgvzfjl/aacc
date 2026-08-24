import {motion} from "framer-motion"


export default function DynamicBackground(){

return (

<div

className="
absolute
inset-0
overflow-hidden
"

>


<motion.div

animate={{

x:[0,80,0],

y:[0,-50,0]

}}

transition={{

duration:18,

repeat:Infinity,

ease:"easeInOut"

}}

className="
absolute
w-[600px]
h-[600px]
rounded-full
bg-blue-200/30
blur-3xl
top-[-200px]
left-[-200px]
"

/>



<motion.div

animate={{

x:[0,-60,0],

y:[0,80,0]

}}

transition={{

duration:20,

repeat:Infinity,

ease:"easeInOut"

}}

className="
absolute
w-[500px]
h-[500px]
rounded-full
bg-purple-200/30
blur-3xl
bottom-[-200px]
right-[-100px]
"

/>


</div>

)

}