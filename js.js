const body = document.querySelector("body");
      sideBar = body.querySelector(".sidebar");
      toggel = body.querySelector(".toggel");
      searchBtn = body.querySelector(".search-box");
      modeSwitch = body.querySelector(".toggle-switch");
      modeText = body.querySelector(".mode-text"); 

toggel.addEventListener("click", ()=>{
    sideBar.classList.toggle("close");
});
modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "light mode";
    }else{
        modeText.innerText = "dark mode";
    }
});
 

 
      