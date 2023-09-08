import  {products} from './products.js'
console.log(products);
let carousel = document.getElementById('carousel');

products.forEach(product => {
    let item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = `
    <i class="fa-regular fa-heart"></i>
    <img src="${product.img}" alt="">
    <p>${product.price}</p>
    <p>${product.options}</p>
    <p>${product.title}</p>
    <button class="walBtn">Options</button>
    `
    carousel.appendChild(item)
});

let next = document.getElementById('arrow')
let prev = document.getElementById('arrow2')

next.onclick = () =>{
        let currentMargin = +carousel.style.marginLeft.split('p')[0]
        carousel.style.marginLeft = `${currentMargin - 600}px`
    prev.style.display = 'block'
}
prev.onclick = () =>{
    let currentMargin = +carousel.style.marginLeft.split('p')[0]
    carousel.style.marginLeft = `${currentMargin + 600}px`
    if(carousel.style.marginLeft === '0px'){
        prev.style.display = 'none'
    }
}

