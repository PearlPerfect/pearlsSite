const menuIcon = document.getElementById("menuIcons");
const sideNav = document.getElementById("sideNav");
const menu= document.getElementById("menu");


sideNav.style.right = "-250px";
menuIcon.addEventListener("click", function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0";
        menu.src = "./images/close icon.png"
    }

    else{
        sideNav.style.right = "-250px"
        menu.src = "./images/menu.png"
    }
})

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});