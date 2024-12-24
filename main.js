import { Fancybox } from "@fancyapps/ui";

import './sass/style.scss'
import "@fancyapps/ui/dist/fancybox/fancybox.css";

//fancybox (может конфликтовать)
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

document.addEventListener('DOMContentLoaded', () => {
    function showModal() {
        const modal = document.getElementById('modal-promo');
        const overlay = document.getElementById('overlay');

        if (modal && overlay) {
            document.documentElement.classList.add('lock');
            overlay.style.display = 'block';
            modal.style.display = 'block';
            setTimeout(() => {
                overlay.classList.add('visible');
                modal.classList.add('visible');
            }, 10);
        }
    }

    function closeModal() {
        const modal = document.getElementById('modal-promo');
        const overlay = document.getElementById('overlay');

        if (modal && overlay) {
            overlay.classList.remove('visible');
            modal.classList.remove('visible');

            setTimeout(() => {
                overlay.style.display = 'none';
                modal.style.display = 'none';
                document.documentElement.classList.remove('lock');
            }, 300);
        }
    }

    setTimeout(showModal, 5000);

    const closeButton = document.querySelector('.modal-promo__close');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }
});
