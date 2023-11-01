function myFunction() {
    var menuResponsive = document.getElementById("myTopnav");
    var closebtn = document.getElementById("close");
    var togglebtn = document.getElementById("toggle");
    if (menuResponsive.className === "topnav") {
        closebtn.style.display = "block"
        togglebtn.style.display = "none"
        menuResponsive.className += " responsive";
    } else {
        menuResponsive.className = "topnav";
        closebtn.style.display = "none"
        togglebtn.style.display = "block"
    }
}
