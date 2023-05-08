let tog=document.getElementsByClassName("arrow")
let i;

for(i=0;i<tog.length;i++){
    tog[i].addEventListener("click",function(){
    this.parentElement.querySelector(".more").classList.toggle("show")
    this.classList.toggle("arrow-down")
    })
}
