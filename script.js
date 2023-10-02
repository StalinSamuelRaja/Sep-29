//set time out
let timer=11;

function countDown(){
    console.log(timer);    
    timer--;
    const id=setTimeout(countDown,1000)
    if (timer==0) {
        clearTimeout(id);
        document.querySelector(".inbuild-element-grp").innerHTML=`<h1>Happy Independence Day</h1>`; 
    }   
    else{
        document.querySelector(".inbuild-element-grp").innerHTML=`<h1>${timer}</h1>`;   
    }
    
}
