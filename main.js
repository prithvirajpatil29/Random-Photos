const imagecontainerE1 = document.querySelector(".image-container")
const btnE1 = document.querySelector(".btn")

btnE1.addEventListener("click",()=>{
    addnewimage()
})

function addnewimage(){
    const newimg = document.createElement("img")
    newimg.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`
    imagecontainerE1.appendChild(newimg)
}



