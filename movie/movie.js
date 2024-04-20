let clickedLinkData = localStorage.getItem("clickedLinkData");
let actors_value=document.querySelector(".actors_value")
let awards_value=document.querySelector(".awards_value")
let language_value=document.querySelector(".language_value")
let released_value=document.querySelector(".released_value")
let plot=document.querySelector(".plot")
let boxoffice_value=document.querySelector(".boxoffice_value")
let imdb_rating=document.querySelector(".imdb_rating")
let movie_title=document.querySelector(".movie_title")
let movie_year=document.querySelector(".movie_year")
let blur_image=document.querySelector(".blur_image")
let genres=document.querySelector(".genres")
let director_value=document.querySelector(".director_value")
let writer_value=document.querySelector(".writer_value")
let addToWishlistBtn = document.getElementById("add-wishlist");
let main_image = document.getElementById("main-image")
let details, movie_image;

setTimeout(()=>{
    localStorage.removeItem("clickedLinkData")
},5000)

const base_url = "https://www.omdbapi.com/?apikey=ce9facbb&t=";
if(clickedLinkData){{
    async function getdetails() {
       
        details_json = await fetch(base_url + clickedLinkData);
        details = await details_json.json();
        console.log(details);
        console.log("data fetched");
        movie_image = details.Poster;
        main_image.setAttribute("src", movie_image)
        actors_value.innerHTML=details.Actors
        awards_value.innerHTML=details.Awards
        language_value.innerHTML=details.Language
        released_value.innerHTML=details.Released
        plot.innerHTML=details.Plot
        boxoffice_value.innerHTML=details.BoxOffice
        imdb_rating.innerHTML=details.imdbRating+"/10"
        movie_title.innerHTML=details.Title
        movie_year.innerHTML=details.Year
        director_value.innerHTML=details.Director
        writer_value.innerHTML=details.Writer
        blur_image.style.backgroundImage="url("+details.Poster+")"
        // console.log(details.Genre+(Array.from(details.Genre)))
        genre_arr=details.Genre.split(',')
        genres.innerHTML=""
        // console.log(genre_arr,typeof(genre_arr))
        genre_arr.forEach(element => {
            genres.innerHTML+=' <div class="genre">'+element+'</div>'
        });
    }
    getdetails();
}}



function handleClick() {
    if(addToWishlistBtn.innerHTML === "Added to Wishlist"){
        addToWishlistBtn.innerHTML="Add to Wishlist"
    }
    else if(addToWishlistBtn.innerHTML==="Add to Wishlist"){
        addToWishlistBtn.innerHTML="Added to Wishlist"
    }
  }
addToWishlistBtn.addEventListener("click", handleClick);
  