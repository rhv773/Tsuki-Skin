const product = JSON.parse(localStorage.getItem('selectedProduct'));

if (product) {
    document.getElementById('product-title').innerText = product.name;
    document.getElementById('product-desc').innerText = product.desc;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('main-img').src = product.img;
}