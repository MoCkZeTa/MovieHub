// console.log("128")
// console.log(movie_name)
// // const movie_card_image=document.getElementsByClassName("card")[0]
// console.log("cc")
// // console.log(movie_card_image)
// // let b=movie_card_image.firstElementChild
// console.log("dd")
// // console.log(b)

// const base_url="https://www.omdbapi.com/?apikey=ce9facbb&t="
// let details,movie_image;
// async function getdetails(){
//         details_json=await fetch(base_url+search_text)
//         details= await details_json.json()
//         console.log(details)
//         console.log("data fetched")
//         movie_image=details.Poster

// }


// let search_box = document.getElementsByClassName("search")[0]

// let card_image=document.getElementsByClassName("card-image")[0]
// console.log(card_image)
// let search_text;
// search_box.addEventListener("keypress", function (event) {
//     console.log(event)
//     if (event.key === "Enter") {
//         search_text = search_box.value
//         console.log("Search text:"+search_text)
//         console.log(7)
//         getdetails()
//         card_image.setAttribute("src",)

//         console.log(9)

//     }
// })

// 




// console.log("128")
// console.log(movie_name)
// // const movie_card_image=document.getElementsByClassName("card")[0]
// console.log("cc")
// // console.log(movie_card_image)
// // let b=movie_card_image.firstElementChild
// console.log("dd")
// // console.log(b)

// const base_url="https://www.omdbapi.com/?apikey=ce9facbb&t="
// let details,movie_image;
// async function getdetails(){
//         details_json=await fetch(base_url+search_text)
//         details= await details_json.json()
//         console.log(details)
//         console.log("data fetched")
//         movie_image=details.Poster

// }


// let search_box = document.getElementsByClassName("search")[0]

// let card_image=document.getElementsByClassName("card-image")[0]
// console.log(card_image)
// let search_text;
// search_box.addEventListener("keypress", function (event) {
//     console.log(event)
//     if (event.key === "Enter") {
//         search_text = search_box.value
//         console.log("Search text:"+search_text)
//         console.log(7)
//         getdetails()
//         card_image.setAttribute("src",)

//         console.log(9)

//     }
// })

const base_url = "https://www.omdbapi.com/?apikey=ce9facbb&t=";
let details, movie_image;

let cardLinks = document.querySelectorAll('.card-link');
let movie_choices=document.querySelector("#movie_choices")


async function getdetails() {
    details_json = await fetch(base_url + search_text);
    details = await details_json.json();
    console.log(details);
    console.log("data fetched");
    movie_image = details.Poster;
    card_image.setAttribute("src", movie_image);
    card_movie_name.innerHTML = details.Title
    card_movie_rating.innerHTML = details.imdbRating + "/10"
    card_movie_plot.innerHTML = details.Plot
}

let search_box = document.getElementsByClassName("search")[0];
let card_image = document.getElementsByClassName("card-image")[0];
let search_text;
let card_movie_name = document.getElementsByClassName("card_movie_name")[0]
console.log(card_movie_name)
let card_movie_rating = document.getElementsByClassName("card_movie_rating")[0]
let card_movie_plot = document.getElementsByClassName("card_movie_plot")[0]




search_box.addEventListener("keypress", function (event) {
    
    if (event.key === "Enter") {
        cardLinks.forEach((link) => {
            link.parentNode.removeChild(link);
        });
        movie_choices.textContent="Movies Found"
        search_text = search_box.value;
        console.log("Search text: " + search_text);
        localStorage.setItem("searchText", search_text); 
        getdetails();
    }
})

let data;

// Function to handle link clicks
function handleClick(event) {
    // Get the data inside the paragraph tag
    data = event.currentTarget.querySelector('.card_movie_name').textContent;
    
    // Store the data in local storage
    localStorage.setItem('clickedLinkData', data);
}

// Get all links
var links = document.querySelectorAll('.card-link');

// Attach click event listener to each link
links.forEach(function(link) {
    link.addEventListener('click', handleClick);
});






    
   


