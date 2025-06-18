//most popular movies api
// const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_KEY&page=1";
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// Return movies that is search by user
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

//===================           Function getMovies Start      ===========================     
// const APIKEY = "04c35731a5ee918f014970082a0088b1";

const getMovies = async(api)=>{
    const responce =await fetch(api);
    const data =await responce.json();
    // console.log(data);
    showMovies(data.results)

}

getMovies(APIURL)//function use to get most popular movies when page is loaded first time

//===================           Function getMovies End      ===========================
  const moviebox = document.querySelector("#move_box");
//===================           Function showMovies Start   ===========================
const showMovies=(res)=>{
    moviebox.innerHTML=" ";
    // console.log(res);
    res.forEach((element) => {
        // console.log(element);
        const box = document.createElement('div');
        
        box.classList.add('box')
        box.innerHTML=`
         <img src="${IMGPATH + element.poster_path}">

                <div class="overlay">

                    <div class="title">
                        <h2>${element.title}</h2>
                        <span>${element.vote_average}</span>
                    </div>

                    <h3>Overview:</h3>
                    <p>
                       ${element.overview
}
                    </p>
        `;
        
        moviebox.appendChild(box)
    });

    
}
//===================           Function showMovies End      ===========================

document.querySelector("#search").addEventListener("keyup",
    function(event){//event is function paramater that function provide
        console.log(event);
        if (event.target.value != '') {
            getMovies(SEARCHAPI + event.target.value)//srearch movies
            }else{
                getMovies(APIURL)
                // popular movies
            }
            
        }

        
    
)




