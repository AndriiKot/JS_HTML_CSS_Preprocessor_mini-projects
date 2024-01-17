
const buttonShowModalWindow = document.querySelector('.btn-show__modal_widow');
const buttonCloseModalWindow = document.querySelector('.modal-window__btn-close');
const modalWindow = document.querySelector('.modal');
const backgroundModalWindow = document.querySelector('.overlay');

const addOrRemoveClass = (element,method,className) => {
    element.classList[method](className)
};

const closeModalWindow = () => {
    addOrRemoveClass(modalWindow,'remove','modal-show')
};

const showModalWindow = () => {
    addOrRemoveClass(modalWindow,'add','modal-show')  
};

buttonShowModalWindow.addEventListener('click', showModalWindow);
buttonCloseModalWindow.addEventListener('click', closeModalWindow);
backgroundModalWindow.addEventListener('click', closeModalWindow );
