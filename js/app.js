// Меню бургер ===============================================================================================
const iconMenu = document.querySelector('.icon-menu');
const menuList = document.querySelector('.header__menu');
const bodyElement = document.body;
// Спойлеры ==================================================================================================
const spollerBody = document.querySelector('[data-spollers]');
const spollerItemButton = document.querySelectorAll('[data-spoller]');
const spollerItem = document.querySelectorAll('.item-info__links');

// Функционал спойлера
if (spollerBody) {
    spollerBody.classList.add('_init');
}

if (spollerItemButton.length > 0) {
    spollerItemButton.forEach((item) => {
        item.addEventListener('click', openSpoller);

        function openSpoller() {
            item.classList.toggle('_active');
            this.nextElementSibling.classList.toggle('_active');
        }
    })
}

// Функционал меню бургер
if (iconMenu) {
    iconMenu.addEventListener('click', openMenu);

    function openMenu() {
        iconMenu.classList.toggle('_active');
        menuList.classList.toggle('_active');

        function bodyLockStatus() {
            if (iconMenu.classList.contains('_active') || !iconMenu.classList.contains('_active')) {
                bodyElement.classList.toggle('_lock');
            }
        }

        bodyLockStatus();
    }
}
