
function openGarage() {
    let container = document.querySelector('.container');

    container.classList.add('animate__animated');
    container.classList.add('animate__slideOutUp');

    document.addEventListener("keydown", (event) => {
        container.classList.remove('animate__slideOutUp');
        container.classList.add('animate__slideInDown');
    });
}