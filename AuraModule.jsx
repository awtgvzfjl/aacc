import AuraChat from "../components/AuraChat"
import MemoryCard from "../components/MemoryCard"
import ToolCard from "../components/ToolCard"


export default function AuraModule(){


return (

<div

className="
h-full
"

>


<div>

<h1 className="
text-3xl
font-semibold
">

AURA

</h1>


<p className="
mt-2
text-gray-400
">

Intelligence Core

</p>

</div>



<div

className="
mt-8
grid
grid-cols-2
gap-5
"

>


<div className="
col-span-2
h-[420px]
"

>

<AuraChat/>

</div>



<MemoryCard/>


<ToolCard/>


</div>


</div>

)

}