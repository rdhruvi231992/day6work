# day6work JavaScript


var div = document.getElementById("hello world");
div.innerText = "hello world";


let element = document.createElement("p");
element.innerHTML = "hellome";
div.appendChild(element);
javascript
window.addEventListener("click", () => {
    var div =document.createElement("div");
    document.body.appendChild(div);

    

    var element = document.createElement("p")
    element.innerHTML="hello "+ x;
    div.appendChild(element);

    
    
    var elements = document.createElement("h1")
    element.innerHTML="welcome to ninja " + name;
    div.appendChild(elements);
    
    let h1 =document.createElement(h1);
    h1.innerHTML="hello my js"; 
})




-----------
 console.log("form submited" +event.timeStamp);
 const form = document.getElementById("form");

function submitEvent(event) {
   
    event.preventDefault();
    let input = document.getElementById("search");
    console.log("value:"+input.value);

}
form.addEventListener("submit", submitEvent);
