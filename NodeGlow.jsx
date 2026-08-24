import {motion} from "framer-motion"


export default function NodeGlow(){

return (

<motion.div

animate={{

scale:[
1,
1.2,
1
],

opacity:[
0.3,
0.7,
0.3

]

}}

transition={{

duration:4,

repeat:Infinity

}}

className="
absolute
inset-0
rounded-full
bg-blue-200/40
blur-2xl
"

/>

)

}