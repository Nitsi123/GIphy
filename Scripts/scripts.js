const img = document.querySelector('img');

const submit = document.querySelector('#submit');
const form = document.querySelector(".form")
const loader = document.querySelector("#loading");
const imgContainer = document.querySelector(".image-container");

const newDivContainer = document.querySelector(".new-container")
newDivContainer.classList.add("invisible")

function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
    img.classList.add("visible")
}

form.addEventListener("submit", function(e)
{
    e.preventDefault()
    getTextValue()
    form.classList.toggle("invisible")
    newDivContainer.classList.remove("invisible")
})

function getTextValue(){
    img.classList.remove("visible")
    const value = document.getElementById("search").value;
    searchGif(value)
}

function searchGif(value)
{
    res = value.toLowerCase();
    if(res == "goldy" || value == "dimpy"){
        img.src = "sample.jpeg";
        img.classList.add("visible")
        img.classList.add("sample")
        return
    }
    else{

        url = `https://api.giphy.com/v1/gifs/translate?api_key=yXOGxS96COBv6Htc0SkNAHuv5jBwULqL&s=` + value
        displayLoading()
        fetch(url, {mode: 'cors'})
        .then(function(response) {
        
        return response.json();
        
        })
        .then(function(response) {
        console.log(response)
        img.src = response.data.images.original.url;
        hideLoading()
        });
    }


}

const newSearch = document.querySelector("#new-search");
const next = document.querySelector("#next");

newSearch.addEventListener("click", function(e)
{
    newDivContainer.classList.add("invisible")
    form.classList.toggle("invisible")
    img.classList.remove("visible")
    img.classList.remove("sample")
    const value = document.getElementById("search");
    value.value = ""
})

next.addEventListener("click", function(e)
{
    getTextValue()
})