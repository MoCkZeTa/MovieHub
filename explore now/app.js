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
        getdetails();}
})

let data;
function handleClick(event) {

    data = event.currentTarget.querySelector('.card_movie_name').textContent;
    localStorage.setItem('clickedLinkData', data);
}

let links = document.querySelectorAll('.card-link');

links.forEach(function(link) {
    link.addEventListener('click', handleClick);
});






    
   


