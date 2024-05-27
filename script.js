let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Califronia Roll',
        image: 'california.jpg',
        price: 8
        
    },
    {
        id: 2,
        name: 'Salmon Roll',
        image: 'salmon.jpg',
        price: 9
    },
    {
        id: 3,
        name: 'Veggie Roll',
        image: 'Vegetarian-Sushi-Roll.jpg',
        price: 4
    },
    {
        id: 4,
        name: 'Dragon Roll',
        image: 'Dragon-Roll.jpg',
        price: 12
    },
    {
        id: 5,
        name: 'Spicy Crab Temaki',
        image: 'spicy-crab-temaki.jpg',
        price: 6
    },
    {
        id: 6,
        name: 'Crab Salad',
        image: 'crab-salad.jpg',
        price: 5
    },
    {
        id: 7,
        name: 'Sushi Burger',
        image: 'sushi-burger.jpg',
        price: 8
    },
    {
        id: 8,
        name: 'Mango Roll',
        image: 'mango-roll.jpg',
        price: 5

    },
    {
        id: 9,
        name: 'Classic Set - 40pieces',
        image: 'classic-set.jpg',
        price: 35
    }
];
    let listCards  = [];
    function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
     listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key},
                         ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},
                         ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
