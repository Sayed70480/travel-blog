function myFunction() {
    var mainMenu = document.getElementsByClassName("mylink")[0];
   
    if (mainMenu.style.display === "block") {
      mainMenu.style.display = "none";
      
    } else {
      mainMenu.style.display = "block";
  
    }
  }