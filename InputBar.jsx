export default function InputBar({
value,
setValue,
send
}){


return (

<div

className="
absolute
bottom-5
left-5
right-5
"

>


<div

className="
flex
items-center
bg-white/50
backdrop-blur-2xl
border
border-white/60
rounded-full
px-6
py-3
"

>


<input

value={value}

onChange={e=>setValue(e.target.value)}

placeholder="Ask AURA..."

className="
flex-1
bg-transparent
outline-none
text-gray-600
"

/>



<button

onClick={send}

className="
ml-4
text-gray-500
"

>

↑

</button>


</div>


</div>

)

}