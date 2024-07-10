// carousel-1 code

//define API URL
const url = "https://fakestoreapi.com/products";

//API call
async function fetchData(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

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