// carousel-1 code

//define API URL
const url = "https://fakestoreapi.com/products";

//API call
async function fetchData(){
    try{
        const response = await fetch(url);
        const data = await response.json();

        const listWrapper = document.getElementById('data-list');

        const items = data.map((item)=>{
            const {image, title, price, description} = item;
            
            return `<li class="item">
                <img src=${image} alt=${title} class="image">
                <h3 class="title">${title}</h3>
                <span class="price">${price}$</span>
                <p class="description">${description}</p>
            </li>`
        }).join("");

        listWrapper.innerHTML = items;
    }
    catch(error){
        console.log(error);
    }
}
fetchData()

// DOM selection
const navBtn = document.querySelectorAll('.navigation-btns .btn');
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselList = document.querySelector('.list');
const carouselItem = document.getElementsByClassName('item');


carouselList.addEventListener('scroll', ()=>{
    const maxScrollLeft = carouselList.scrollWidth - carouselList.clientWidth;
    let scrollLeft = carouselList.scrollLeft;

    if(scrollLeft >= (maxScrollLeft - 10)){
        document.querySelector('.next-btn').setAttribute('disabled', true);
    }
    else if(scrollLeft <= 10){
        document.querySelector('.prev-btn').setAttribute('disabled', true)
    }
    else{
        document.querySelector('.next-btn').removeAttribute('disabled', false);
        document.querySelector('.prev-btn').removeAttribute('disabled', false);
    }
})
navBtn.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const currentBtn = e.currentTarget;
        const wrapperWidth = carouselWrapper.clientWidth;
        const scrollAmount = wrapperWidth < 768 ? 2 : wrapperWidth >= 768 && wrapperWidth <= 992 ? 3 : 4;
        
        //scroll carousel function call
        scrollCarousel(currentBtn, scrollAmount)
    })
})

function scrollCarousel(currentBtn, scrollAmount){
    if(currentBtn.classList.contains('prev-btn')){
        carouselList.scrollBy({ left: carouselItem[0].offsetWidth*(-scrollAmount), behavior: 'smooth' });   
    }
    else if(currentBtn.classList.contains('next-btn')){
        carouselList.scrollBy({ left: carouselItem[0].offsetWidth*scrollAmount, behavior: 'smooth' });
    }
}

