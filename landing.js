const base_url = "https://www.omdbapi.com/?apikey=ce9facbb&t=";
document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelector('.card-container').style.display = 'none';
});

let search_box = document.querySelector(".search")
let cardContainer = document.querySelector(".card-container");

let card_image = document.getElementsByClassName("card-image")[0];
let search_text;
let card_movie_name = document.getElementsByClassName("card_movie_name")[0]
console.log(card_movie_name)
let card_movie_rating = document.getElementsByClassName("card_movie_rating")[0]
let card_movie_plot = document.getElementsByClassName("card_movie_plot")[0]




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
   
    cardContainer.style.display = 'block';
}

search_box.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        search_text = search_box.value;
        console.log("Search text: " + search_text);
        data = search_text;
        localStorage.setItem("searchText", search_text);
        localStorage.setItem('clickedLinkData2',data );
        let ok = localStorage.getItem("clickedLinkData");
        console.log(ok)
        getdetails();
        
        document.querySelector('.black h3').style.display = 'none';
        
        document.querySelector('.search').style.marginTop = '0';

}
});



function removePlaceholder() {
    var searchInput = document.querySelector('.search');
    searchInput.removeAttribute('placeholder');
}


window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
        removePlaceholder();
    }
});

if (window.innerWidth <= 767) {
    removePlaceholder();
}

