const fetchpromise = fetch("https://api.github.com/users",{
    method:"GET",
    headers:{
        "Content-Type":"application/json"
    }
})
const cardWrapper= document.querySelector(".card-wrapper");
const Loading =document.createElement("h3");
    Loading.innerHTML="Loading..."
    cardWrapper.append(Loading)
// const card=document.querySelector("card");
fetchpromise.then(function(response){
    cardWrapper.removeChild(Loading)
    console.log(response)
    return response.json();
}).then(function(parsedata){
    console.log(parsedata)
    for(let obj of parsedata){
        
        // card.innerHTML=parsedata;
        const div=document.createElement("div");
        div.classList.add("card");
        const img =document.createElement("img");
        img.setAttribute("src", obj.avatar_url);
       const h3= document.createElement("h3");
       h3.innerHTML=obj.login;
       div.append(img);
       div.append(h3);
       cardWrapper.append(div);
    }

}).catch(function(err){
    console.log(err);
})

