 var navlinks=document.getElementById("nav-links");
 function showMenu() {
      navlinks.style.display = "block"; // Correct syntax
      navlinks.style.right = "0";
    }
    
    function hideMenu() {
      navlinks.style.display = "none"; // Hides the menu
      navlinks.style.right = "-220px";
    }