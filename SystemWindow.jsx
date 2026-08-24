import {motion} from "framer-motion"


export default function SystemWindow({
title,
children,
onClose
}){


return (

<motion.div

initial={{

opacity:0,

scale:.75,

filter:"blur(20px)"

}}

animate={{

opacity:1,

scale:1,

filter:"blur(0px)"

}}

exit={{

opacity:0,

scale:.8

}}

transition={{

duration:.45

}}

className="
absolute
inset-0
z-50
flex
items-center
justify-center
"

>


<div

className="
relative
w-[90%]
h-[85%]
rounded-[40px]
bg-white/40
backdrop-blur-3xl
border
border-white/60
shadow-2xl
p-8
"

>


<button

onClick={onClose}

className="
absolute
right-8
top-6
text-2xl
text-gray-400
"

>

×

</button>



<h1

className="
text-3xl
font-semibold
"

>

{title}

</h1>



<div className="mt-8 h-full">

{children}

</div>



</div>


</motion.div>

)

}