var add = document.querySelector('#add');
var menu_2 = document.querySelector('.menu-2')

// var home =  document.querySelector(".home")

//     add.addEventListener("click",function(){
//         add.classList.add("d-none")    
//         home.classList.remove("d-none")
//     })
//     home.addEventListener("click",function(){
//         home.classList.add("d-none")
//         add.classList.remove("d-none")
//     })
var data = [

    {
        photo: ' ./img/santa.jpg',
        title: ' SANTA FÉ',
        click:'Service',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name: ' 2nd Floor',
        possition : '<a herf="https://ampp.aeonmallcambodia.com/event/baseus-cambodia/"></a>',
    },
    {
        photo: './img/gym.jpg',
        title: ' The Place Gym',
        click:'Service',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 4nd Floor',
    },
    {
        photo: './img/pafu.jpg',
        title: ' PARFUMERIE',
        click:'Goods',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' Ground Floor',
    },
    {
        photo: './img/amazone.jpg',
        title: ' Amazon Cafe',
        click:'food & Beverage',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 2nd Floor',
    },
    {
        photo: './img/super.png',
        title: ' Super Dry',
        click:'fashion',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' Ground Floor',
    },
    
    {
        photo: './img/momo.jpg',
        title: ' MOMO Paradise',
        click:'food & Beverage',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 2nd Floor',
    },
    {
        photo: './img/ministry.jpg',
        title: ' Ministry of Public Works and Transport',
        click:'Service',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 4nd Floor',
    },
    {
        photo: './img/baseu.jpg',
        title: 'Baseus Cambodia ',
        click:'Goods',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 1st Floor',
    },
    {
        photo: './img/the-lobster.jpg',
        title: 'THE LOBSTER BAY',
        click:'food & Beverage',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 2nd Floor',
    },
    {
        photo: './img/puma.jpg',
        title: ' PUMA KIDS',
        click:'Fashion',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:' 1st Floor',
    },
    {
        photo: './img/dream-game.png',
        title: ' DREAM GAME',
        click:'Service',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:'4nd Floor',
    },
    {
        photo: './img/puma.png',
        title: ' PUMA',
        click:'Fashion',
        loocation:'<i class="bi bi-geo-alt-fill"></i>',
        location_name:'1st Floor',
    },
];
let storee = " ";
let store = "";

// for(let key in data){
//     store+=`
//     <div class="card col-md-3">
//     <div class="card-img">
//         <img src="${data[key].photo}" alt="" width="100%" height="100%">
//     </div>
//     <div class="title">

//     </div>
//  </div>
//     `;                 

// document.querySelector(".row").innerHTML = store;
// }
data.map(e => {
    store += `
   
    <div style="height:330px;" class="col-md-2 ps-2 mt-3">
        <div class="card bg-white h-100 p-0 ">
            <div style="height: 60%;" class="imge shadow d-flex justify-content-center align-items-center overflow-hidden rounded-1">
               <img  class="the_photo w-100" src="${e.photo}"  >
            </div>
            <div style="height: 40%;" class="decsrcip"><b><p>${e.title}</p></b>
            <a href=""><div class="location p-1">${e.loocation}${e.location_name}</div></a>
            <div class="txt"><p>${e.click}</p></div>
            </div>
            
        </div>
    </div>
   
    `;
   document.querySelector("#product").innerHTML = store;
});


// bg-info 
var btn1 = document.querySelector("#b1")
var btn2 = document.querySelector("#b2")

