export default function MessageBubble({
role,
text
}){


return (

<div

className={`
max-w-[80%]
p-4
rounded-3xl
mb-3

${
role==="user"

?

"ml-auto bg-white/70"

:

"mr-auto bg-white/40"

}

backdrop-blur-xl

border

border-white/60

text-gray-600

`

}

>

{text}

</div>

)

}