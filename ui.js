//welcome to js
//* get the browser width and height
document.addEventListener("DOMContentLoaded",(e)=>{
    var body = e.target.body.clientHeight;
    document.querySelector('#second-row').style.height = body+'px'; 
    document.querySelector('#message-container').style.height = body -100+'px'; 
    document.querySelector('#pick-receiver').style.height = body -100+'px'; 
    
})
