
const buttonShowModalWindow = document.querySelector('.btn-show__modal_widow');
const buttonCloseModalWindow = document.querySelector('.modal-window__btn-close');
const modalWindow = document.querySelector('.modal');


const addOrRemoveClass = (element,method,className) => {
    element.classList[method](className)
};

buttonShowModalWindow.addEventListener('click', () => {
    addOrRemoveClass(modalWindow,'add','modal-show')
});

buttonCloseModalWindow.addEventListener('click', () => {
    addOrRemoveClass(modalWindow,'remove','modal-show')
});
