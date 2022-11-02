
 let screen=document.querySelector('.screen');




 function allclear() {
    let screen=document.querySelector('.screen');
     screen.value=" "
     console.log("clear")
 }

  


function btnvalue(n) {
    // let screen=document.querySelector('.screen');

      screen.value += n;
      console.log('clicked')
}
function calc() {
    

    screen.value=eval(screen.value)
}