// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
 function burgerFunction() {
     var x = document.querySelector('#dropdown');
     if (x.style.display === "block") {
       x.style.display = "none";
     } else {
       x.style.display = "block";
     }
   }

   let junibtn = document.querySelector('#juni')
junibtn.addEventListener('click', function onClick(event){
  event.target.style.backgroundColor = 'red';

})
  