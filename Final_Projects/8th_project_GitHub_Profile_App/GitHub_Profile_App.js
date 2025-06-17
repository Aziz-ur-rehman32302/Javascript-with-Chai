const APIURL = "https://api.github.com/users/";
const main = document.querySelector(".main");
const search_Box = document.querySelector("#search");

const getUser = async(username)=>{
 const response = await fetch(APIURL + username);
 console.log(response);
 const data = await response.json();
 console.log(data.login);
//  checkwrongUserName(data)
 if (response.status === 404) {
        alert("❌ Wrong username!");
        return; // Stop further execution
    }else if(response.status ===403){
        
        alert("API rate limit exceeded for YOUR_IP_ADDRESS.");
        return
    }else{

    }

 const card = `

     <div class="card">

            <div id="profile_div">
                <img class="avatar" src="${data.avatar_url}">
            </div>

            <div class="user_info">

                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>  <strong>Followers</strong>:   <em>${data.followers}</em></li>
                    <li>  <strong>Following:</strong>   <em>${data.following}</em></li>
                    <li>  <strong>Repos:</strong>       <em>${data.public_repos}</em></li>
                </ul>

                 <div id="repos">

                 </div>

               

            </div>

        </div>


 `;
     main.innerHTML=card;
     getrepos(username);
 
 
}

const getrepos =  async (username)=>{
    const repos = document.querySelector("#repos");
    const response = await fetch(APIURL + username + '/repos')
    const data = await response.json()
    // console.log(data);

    data.forEach((item) => {
        // console.log(item);
        
        const elem = document.createElement("a");
        elem.classList.add("repo");
        elem.href= item.html_url;
        elem.innerText= item.name;
        elem.target = '_blank'
        repos.appendChild(elem);


        
    });
    

}


// getUser( "Taylorotwell " );
// getUser();

 const formSubmit=()=>{
    if (search_Box.value != ""){
        getUser(search_Box.value)
        search_Box.value="";
    }
        
    
    
    return false;//use so that page does not refresh when page is submit
 }

 search_Box.addEventListener("focusout",
    function(){
    formSubmit()
 })

//  const checkwrongUserName = (data)=>{
//     if (data.status === 404) {
//         alert("❌ Wrong username!");
//         return; // Stop further execution
//     }
//  }



getUser( "Aziz-ur-rehman32302 " );