import Node from "./Node"
import DynamicBackground from "./DynamicBackground"


export default function NeuralSpace({
openModule
}){


return (

<div

className="
absolute
inset-0
"

>


<DynamicBackground/>


<div

className="
absolute
top-[25%]
left-1/2
-translate-x-1/2
"

>

<Node

name="AURA"

type="aura"

onActivate={openModule}

/>

</div>




<div

className="
absolute
top-[48%]
left-[25%]
"

>

<Node

name="Recall"

type="recall"

onActivate={openModule}

/>

</div>



<div

className="
absolute
top-[48%]
right-[25%]
"

>

<Node

name="Vision"

type="vision"

onActivate={openModule}

/>

</div>



<div

className="
absolute
bottom-[25%]
left-1/2
-translate-x-1/2
"

>

<Node

name="Orbit"

type="orbit"

onActivate={openModule}

/>

</div>



<div

className="
absolute
bottom-[18%]
left-[30%]
"

>

<Node

name="Echo"

type="echo"

onActivate={openModule}

/>

</div>



<div

className="
absolute
bottom-[18%]
right-[30%]
"

>

<Node

name="Vault"

type="vault"

onActivate={openModule}

/>

</div>



</div>

)

}