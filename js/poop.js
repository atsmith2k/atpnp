
async function openGarage() {
    let container = document.querySelector('.container');

    container.classList.add('animate__animated');
    container.classList.add('animate__slideOutUp');

    document.addEventListener("keydown", (event) => {
        container.classList.remove('animate__slideOutUp');
        container.classList.add('animate__slideInDown');
    });
    await delay(600);
    window.location = './shop.html'
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function insideGarage() {
    let container = document.querySelector('.container').style.display = 'none';
    let products = document.getElementById('product-component-1652968921100');
    products.style.display = "block";
    console.log(products)
}