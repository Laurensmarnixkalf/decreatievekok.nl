var headerContainer = document.getElementsByClassName('site-header');
console.log(headerContainer);

var headerAppear = function () {
    
}

window.addEventListener("scroll",function(){
    var target = document.getElementsByClassName('site-header');
    if(window.pageYOffset > 50){
     target[0].style.display = "block"; 
    }
    else if(window.pageYOffset < 50){
      target[0].style.display = "none";
    }
  },false);