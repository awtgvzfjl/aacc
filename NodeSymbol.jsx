export default function NodeSymbol({
type
}){


const symbols={

aura:"◌",

echo:"≋",

recall:"◇",

vision:"◎",

vault:"⬡",

orbit:"○",

control:"✦"

}


return (

<div

className="
text-3xl
font-light
text-gray-500
"

>

{symbols[type] || "○"}

</div>

)

}