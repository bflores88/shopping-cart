var headImage = document.createElement('img');
headImage.src = 'images/cart.svg';
headImage.className = 'headImage';
headImage.style.float = 'left';
headImage.style.padding = '30px';
header.appendChild(headImage);

var headerWords = document.createElement('h1');
headerWords.className = 'headWords';
headerWords.style.paddingTop = '30px';
headerWords.style.marginTop = '0px';
headerWords.innerHTML = 'Shopping Cart';
header.appendChild(headerWords);

var shopCart = [{
    product: "Finger Toothbrush",
    description: "A helping hand to a nicer smile.",
    price: 1.11
}, {
    product: "Barry Manilow's Greatest Hits Collection Vol 1",
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.",
    price: 39.57
}, {
    product: "Ramen Oreos",
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.",
    price: 8.88
}, {
    product: "Woof Washer 360",
    description: "Wash your dirty stinky mutt in minutes! Water and dog not included.",
    price: 9.29
}, {
    product: "Sauna Pants",
    description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.",
    price: 2.33
}, {
    product: "Hug Me Pillow",
    description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.",
    price: 599.99
}];

// console.log(shopCart.length);

for (var i = 0; i<shopCart.length; i++) {
    var shopItemBox = document.createElement('div');
    shopItemBox.className = 'itemBox';
    shopItemBox.style.borderTop = '1px solid lightgrey';
    cartItems.appendChild(shopItemBox);

    var shopItemImg = document.createElement('img');
    shopItemImg.id = 'itemImg' + i;
    shopItemImg.className = 'prodImg'
    shopItemImg.style.float = 'left';
    shopItemBox.appendChild(shopItemImg);

    var prodDiv = document.createElement('div');
    prodDiv.className = 'nameDescr';
    shopItemBox.appendChild(prodDiv);

    var itemBoxHead = document.createElement('h3');
    itemBoxHead.className = 'itemHeader';
    itemBoxHead.innerHTML = shopCart[i].product;
    prodDiv.appendChild(itemBoxHead);

    var itemBoxDescr = document.createElement('div');
    itemBoxDescr.className = 'itemDescr';
    itemBoxDescr.style.display = 'inline';
    itemBoxDescr.innerHTML = shopCart[i].description;
    prodDiv.appendChild(itemBoxDescr);

    var itemBoxPrice = document.createElement('div');
    itemBoxPrice.className = 'itemPrice';
    itemBoxPrice.innerHTML = shopCart[i].price;
    shopItemBox.appendChild(itemBoxPrice);

    
    }

document.getElementById('itemImg0').src = 'images/fingerBrush.jpg';

document.getElementById('itemImg1').src = 'images/barryhits.jpg';

document.getElementById('itemImg2').src = 'images/ramenoreo.jpeg'