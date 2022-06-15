
async function openGarage() {
    let container = document.querySelector('.container');
    let container2 = document.querySelector('.container2');

    container.classList.add('animate__animated');
    container.classList.add('animate__slideOutUp');

    document.addEventListener("keydown", (event) => {
        container.classList.remove('animate__slideOutUp');
        container.classList.add('animate__slideInDown');
    });
    await delay(1000);
    container.style.display = 'none';
    container2.style.display = 'block';
    container2.style.height = '100%';
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}