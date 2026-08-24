import {motion} from "framer-motion"


export default function StatusLayer(){


return (

<motion.div

initial={{
opacity:0,
y:-20
}}

animate={{
opacity:1,
y:0
}}

className="
absolute
top-8
left-1/2
-translate-x-1/2
z-20
text-center
"

>


<div

className="
text-5xl
font-semibold
tracking-tight
"

>

09:41

</div>



<div

className="
mt-2
text-xs
tracking-[0.4em]
text-gray-400
"

>

OMNIA SYSTEM

</div>



<div

className="
mt-5
flex
gap-5
text-xs
text-gray-400
"

>

<span>
● AI ONLINE
</span>


<span>
◌ SYNC
</span>


<span>
◔ 96%
</span>


</div>


</motion.div>

)

}