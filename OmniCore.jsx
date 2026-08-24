import {motion} from "framer-motion"


export default function OmniCore(){

return (

<motion.div

animate={{

scale:[
1,
1.08,
1
],

opacity:[
0.7,
1,
0.7
]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="
relative
w-48
h-48
flex
items-center
justify-center
"

>


<div

className="
absolute
inset-0
rounded-full
bg-blue-200/30
blur-3xl
"

/>


<div

className="
relative
w-32
h-32
rounded-full
bg-white/60
backdrop-blur-3xl
border
border-white/80
shadow-2xl
flex
items-center
justify-center
"

>


<span

className="
font-semibold
tracking-[0.3em]
text-gray-500
"

>

OMNIA

</span>


</div>


</motion.div>

)

}