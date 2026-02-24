fetch("message.txt")
.then(Response=> {
    console.log(Response)
    console.log("status:", Response.status)
    console.log("OK?", Response.ok)
    console.log("URL:", Response.url)
    return Response.text();
})
.then(text => {
    console.log("Innehåll:", text)
    
})

const Response = await fetch("data.json");
const data = await Response.json();
console.log(data)

fetch("data.json")
.then(Response => Response.json())
.then(data=>{
    console.log(data)
    console.log(data.title)
    console.log("skribent:", data.author)
    console.log(data.items[0])
})
