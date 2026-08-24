import {motion} from "framer-motion"

import NodeGlow from "./NodeGlow"
import NodeSymbol from "./NodeSymbol"


export default function Node({
name,
type,
onActivate
}){


return (

<motion.div

whileHover={{

y:-8,

scale:1.08

}}

whileTap={{

scale:.92

}}

onClick={()=>onActivate?.(type)}

className="
relative
w-24
h-24
flex
items-center
justify-center
cursor-pointer
"

>


<NodeGlow/>


<div

className="
relative
w-20
h-20
rounded-full
bg-white/50
backdrop-blur-2xl
border
border-white/70
shadow-xl
flex
flex-col
items-center
justify-center
"

>


<NodeSymbol type={type}/>


<div

className="
text-[10px]
mt-1
text-gray-400
tracking-wide
"

>

{name}

</div>


</div>


</motion.div>

)

}