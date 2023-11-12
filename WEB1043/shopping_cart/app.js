const product = [
    {
        id:0,
        image: 'image/iphone.jpeg',
        title: 'Iphone 5',
        price: 120,
        description: 'Ngay từ buổi lễ ra mắt, các nhà thiết kế của Apple đã khẳng định đây là chiếc điện thoại mỏng nhất mà họ từng làm, iPhone 5 sở hữu những thông số về kích thước thật đáng kinh ngạc, máy mỏng chỉ 7.6 mm và trọng lượng chưa tới 112g, nếu đem ra so sánh với các smartphone hiện nay thì iPhone 5 thực sự là một trong những chiếc điện thoại mỏng nhất, nhẹ nhất.'
    },
    {
        id:1,
        image: 'image/iphone15.jpeg',
        title: 'Iphone 15',
        price: 20,
        description: 'Thiết kế mới đầy sáng tạo sử dụng mặt lưng kính được pha màu xuyên suốt toàn bộ chất liệu. Quy trình trao đổi ion kép đặc chế cho kính, cùng khung viền nhôm chuẩn hàng không vũ trụ giúp iPhone 15 trở nên cực kỳ bền bỉ.'
    },
    {
        id:2,
        image: 'image/iphone.jpeg',
        title: 'Iphone 7',
        price: 150,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique.'
    },
    {
        id:3,
        image: 'image/iphone.jpeg',
        title: 'Iphone 8',
        price: 1200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique.'
    },
];
const categories = [...new Set(product.map((item)=>{
    return item
}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>{
    var{image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img onclick='showProductDetails(${item.id})' class='images' src=${image}></img>
        </div>
        <div class= 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`

    )
}).join('')
var cart = [];
let isModalVisible = false;
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
    hideCartItems();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML= cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is emty";
        document.getElementById("total").innerHTML ="$"+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>{
            var {image, title, price} = items;
            total = total+price;
            document.getElementById("total").innerHTML = "$" +total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                    "<img class='imgDel' src='image/delete.png' onclick='delElement("+(j++) +")'></img></div>"
            );
        }).join('');
    }
}
function showProductDetails(productId) {
    const product = categories.find((item) => item.id === productId);
    if (isModalVisible) {
        modal.style.display = "none";
        isModalVisible = false;
    } else {
        productImage.src = product.image;
        productName.innerText = product.title;
        productPrice.innerText = `$ ${product.price}.00`;
        productDescription.innerText = product.description;
        modal.style.display = "block";
        isModalVisible = true;
    }
}

function cartImage(){
    var cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function(item) {
        if (item.style.display === "none") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });0
}

function hideCartItems() {
    var cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function(item) {
        item.style.display = "none";
    });
}

function displayCartItems() {
    var cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function(item) {
        item.style.display = "block";
    });
}
