const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav__list ");

navToggle.addEventListener("click", ()=>{
   const a = nav.classList.toggle("active")
    console.log(a)
})


console.log(navToggle);




const dataArray = ["ola","bayo","tolu","titi","tope"];
dataArray.map((data) => {
  return console.log(`I borrowed money from ${data}` );
})



