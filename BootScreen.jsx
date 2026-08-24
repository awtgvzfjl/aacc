import {motion} from "framer-motion"

import OmniCore from "./OmniCore"


export default function BootScreen(){

return (

<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

className="
absolute
inset-0
z-50
bg-[#f7f8fc]
flex
flex-col
items-center
justify-center
"

>


<OmniCore />


<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
delay:1
}}

className="
mt-10
text-gray-400
tracking-[0.35em]
text-sm
"

>

INITIALIZING INTELLIGENCE

</motion.div>


<motion.div

initial={{
opacity:0
}}

animate={{
opacity:1
}}

transition={{
delay:2
}}

className="
mt-5
text-gray-300
text-xs
tracking-widest
"

>

NEURAL CORE ONLINE

</motion.div>


</motion.div>

)

}