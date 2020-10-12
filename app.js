const form = document.getElementById("form");


function submitEvent(event) {
   
    event.preventDefault();
    let input = document.getElementById("search");
    let resultDiv = document.getElementById("results");
    console.log("value:"+input.value);
    

    //https://www.swapi.tech/api/planets/8

    fetch("https://www.swapi.tech/api/people/?name=r2")
        .then(function(response) {
            return response.json()
            

        })
        .then(function(result) {
            for(let i =0; i< result.results.length;i++){
                let char = result.results[i].properties;
                let characterDiv = document.createElement("div");
                let html= "<h2> planets: <h2>"
                
                html += "<ul>"
                html += "<li>Name: " + char.name + "</li>"
                html += "<li>planets: " + char.homeworld + "</li>"
                
                
                html += "<li>height: " + char.height + "</li>"
                html += "<li>height: " + char.height + "</li>"
                html += "<li>eye color: " + char.eye_color + "</li>"
                characterDiv.innerHTML =html;
                console.log(resultDiv);
                resultDiv.appendChild(characterDiv);
                characterDiv.innerHTML =html;
                console.log(resultDiv);
                resultDiv.appendChild(characterDiv);
            }
        });
            console.log("after fetch:");
             
        


    fetch 

}

form.addEventListener("submit", submitEvent);


