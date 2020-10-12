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

---------------------------------------------------------------
Teacher Man code compare
check it out
let giphyKey = "J1noCVxuNpIkjrmWc9LZUCtzfUezIF8D";
let form = document.getElementById("form");

//abstract the fetch process to reduce indentations
//accepts a callback function for fetch completion
//todo: implement error handling
function get(url, callback) {
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            callback(result);
        });
}

function submitEvent(event) {
    event.preventDefault();

    let input = document.getElementById("search");
    let resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "Loading results...";

    get("https://www.swapi.tech/api/people/?name="+input.value, function(result) {
        resultsDiv.innerHTML = ""
        for (let i=0; i < result.results.length; i++) {
            const id = result.results[i]._id;
            const char = result.results[i].properties;
            const characterDiv = document.createElement("div");
            let html = "<h2>"+char.name+"</h2>";
            html += "<ul>";
            html += "<li>Birth Year: "+char.birth_year+"</li>";
            html += "<li id=\""+id+"\">Homeworld: fetching...</li>";
            html += "</ul>";
            characterDiv.innerHTML = html;


            get(char.homeworld, (resp) => {
                let li = document.getElementById(id);
                li.innerHTML = "Homeworld: "+resp.result.properties.name;
            })

            let urlVars = {
                "api_key": giphyKey,
                q: char.name,
                limit:1
            }

            //loop keys and create a url query
            let query = Object.keys(urlVars)
                .map(key => `${key}=${urlVars[key]}`)
                .join('&');

            get("https://api.giphy.com/v1/gifs/search?"+query, function(resp) {
                resp.data.forEach((gif) => {
                    let img = document.createElement("img");
                    img.src = gif.images.original.url;
                    characterDiv.appendChild(img);
                })
            })

            resultsDiv.appendChild(characterDiv);
        }
    });
}

const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let recordedKeys = [];
let lastKeyNum = 0;

window.addEventListener("keyup", (event) => {
    //check if keyup matches konami code
    if (konamiCode[lastKeyNum] === event.key) {
        lastKeyNum++;
        recordedKeys.push(event.key);

        // are we finished?
        if (recordedKeys.length === konamiCode.length) {
            binxIt();
        }
    } else {
        //key up does not match konami code patterrn, reset
        recordedKeys = [];
        lastKeyNum = 0;
    }
})

const binxIt = () => {
    //clear the entire body and load in everyone's favourite character, Jar Jar Binks!
    document.body.innerHTML = "";
    let urlVars = {
        "api_key": giphyKey,
        tag: "jarjar"
    };
    let query = Object.keys(urlVars)
        .map(key => `${key}=${urlVars[key]}`)
        .join('&');
    
    get("https://api.giphy.com/v1/gifs/random?"+query, function(resp) {
        //use background-size css to fill body with gif
        document.body.style.background = "url("+resp.data.image_original_url+")";    
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
    })

}

form.addEventListener("submit", submitEvent);
