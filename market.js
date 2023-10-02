var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

const navList = document.querySelector(".L_I ul")
const burger = document.querySelector(".checkbtn")

burger.addEventListener("click", () => {
    navList.classList.toggle("active")
})

let kotsan = false;

console.log("Islomjon", kotsan = true);
console.log("Dovudhon", kotsan = false);









// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Zar market</title>

//     <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="mediya.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
//         integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
//         crossorigin="anonymous" referrerpolicy="no-referrer" />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
// </head>

// <body>
//     <div class="contact">
//         <div class="container">
//             <div class="location">
//                 <div>
//                     <p> <a href="https://yandex.uz/maps/21314/namangan/geo/1522496972/?ll=71.635218%2C40.992547&z=14"><i class="fa-solid fa-location-dot"></i> Turakurgan</a></p>
//                     <p>Muddatli to`lovga sotib olish</p>
//                     <p>Yetkazib berish</p>
//                     <p>Aksiya</p>
//                 </div>

//                 <div class="aloqa">
//                     <p>Alaqa markazi:</p>
//                     <p><i class="fa-sharp fa-solid fa-phone"></i>  +99888 303 00 66</p>
//                     <select>
//                         <option>UZB</option>
//                         <option>ING</option>
//                         <option>RUSS</option>
//                     </select>
//                 </div>
//             </div>
//         </div>
//     </div>



//     <nav class="navbar">
//         <div class="container">
//             <div class="q">
//                 <div class="L_I">
//                     <div class="img">
//                         <img class="logo" src="./img/LOGO.jpg" alt="Logo" width="90px">
//                     </div>

//                     <div class="div_input">
//                         <input type="text" placeholder="Search">
//                     </div>
//                 </div>


//                 <div class="nav_log">
                   
//                     <ul class="nav_log">
//                         <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Sevimlilar</p></li>
//                         <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Savatcha</p></li>
//                         <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Xaridga</p></li>
//                         <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Kirish</p></li>
//                     </ul>

//                     <div class="icon_img">
//                         <i id="islam" class="fa-brands fa-apple"></i>
//                         <img class="img" src="./img/Screenshot 2023-04-14 160743.png" alt="img">
//                         <input type="checkbox" id="check">
//                         <label for="check" class="checkbtn">
//                             <i class="fa-solid fa-bars"></i>
//                         </label>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </nav>
//     <nav class="navbar">
//         <div class="container">
//             <div class="nav">

//                 <div class="Evos">
//                     <img class="img_logo" src="./Img_zar/Zar market logo.png" alt="logo">
//                     <ul class="nav-links">
//                         <li><a href="#">Home</a></li>
//                         <li><a href="#">Branches</a></li>
//                         <li><a href="#-">About</a></li>
//                         <li><a href="#">Contact</a></li>
//                     </ul>
                    
//                     <!-- <div class="navbar2">
//                         <ul class="nav_log">
//                             <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Sevimlilar</p></li>
//                             <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Savatcha</p></li>
//                             <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Xaridga</p></li>
//                             <li><a href="#"><i class="fa-sharp fa-solid fa-bag-shopping"></i></a><p>Kirish</p></li>
//                         </ul>
//                     </div> -->
                    
//                 </div>
//             </div>
//         </div>
//     </nav>





//     <div class="swiper mySwiper">
//         <div class="swiper-wrapper">
//           <div class="swiper-slide"><img class="nerlift" src="https://zarmarketuz.netlify.app/imgs/Map%20gif.gif" alt=""></div>
//           <div class="swiper-slide"><img src="./Img_zar/apple-banner-2-uz.jpg" alt="img"></div>
//           <div class="swiper-slide"><img src="./Img_zar/Apple banner.jpg" alt="img"></div>
//           <div class="swiper-slide"><img src="./Img_zar/Phones.png" alt="img"></div>
//           <div class="swiper-slide"><img src="./Img_zar/Lounder.jpg" alt="img"></div>
//         </div>
//       </div>
    
//     <section class="container">
//         <main class="Fast_fud" id="main">



//             <div class="slick-brand">
//                 <div class="slick-brand-div">
//                     <div>
//                         <img src="./Img_zar/Apple.webp" alt="logo">
//                      </div>
//                      <div>
//                         <img src="./Img_zar/Bosch.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Hp.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Tefal.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Philips.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Lg.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Samsung.webp" alt="logo">
//                       </div>
//                       <div>
//                         <img src="./Img_zar/Mi.webp" alt="logo">
//                       </div>
//                 </div>
//             </div



//             <!--=============== Premium ===============-->
//             <section class="section section__height container" id="Лаваш">
//                 <h1 class="Fast_f">Premium takliflar </h1>

//                 <div class="feature">


//                     <div class="obekt">


//                     </div>


//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">


//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">


//                     </div>

//                     <div class="obekt">

//                     </div>
//                 </div>
//             </section>





//             <!--=============== Televizorlar ===============-->
//             <section class="section section__height container" id="Бургеры">
//                 <h1 class="Fast_f">Televizorlar</h1>
//                 <div class="feature">

//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                 </div>
//             </section>




//             <!--===============Muzlatgichlar ===============-->
//             <section class="section section__height container" id="Хот-Дог">
//                 <h1 class="Fast_f">Muzlatgichlar</h1>
//                 <div class="feature">

//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                 </div>

//             </section>




//             <!--===============Наушники ===============-->
//             <section class="section section__height container" id="Соусы, добавки">
//                 <h1 class="Fast_f">Наушники</h1>
//                 <div class="feature">

//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>
//                 </div>
//             </section>




//             <!--=============== Калонки ===============-->
//             <section class="section section__height container" id="Напитки">
//                 <h1 class="Fast_f">Калонки</h1>

//                 </h1>
//                 <div class="feature">

//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">

//                     </div>


//                     <div class="obekt">

//                     </div>
//                     <div class="obekt">

//                     </div>

//                     <div class="obekt">


//                     </div>

//                     <div class="obekt">

//                     </div>

//                 </div>
//             </section>
//         </main>
//     </section>
//     </div>

//     <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>
//       <!-- Swiper JS -->
//   <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

//   <!-- Initialize Swiper -->

//     <script src="market.js"></script>
// </body>

// </html>