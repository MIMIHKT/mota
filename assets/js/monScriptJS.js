
/* Affichage Modale */
console.log("modale Contact JS chargé");

$(document).ready(function() {
    const lienContact = $('#menu-item-8');
    const boutonContact = $('#boutonContact');
    const modalOverlay = $('.popup-overlay');
    const referencePhoto = $('#referencePhoto');

    const openModal = function() {
        modalOverlay.css('display', 'flex');

        if (boutonContact.attr('data-reference') && boutonContact.attr('data-reference').trim() !== "") {
            referencePhoto.val(boutonContact.attr('data-reference'));
        }
    };

    const closeModal = function() {
        modalOverlay.css('display', 'none');
    };

    lienContact.on('click', function(event) {
        event.preventDefault();
        openModal();
    });

    boutonContact.on('click', function(event) {
        event.preventDefault();
        openModal();
    });

    $(window).on('click', function(event) {
        if (event.target === modalOverlay[0]) {
            closeModal();
        }
    });
});



/* Navigation menu burger mobile */
console.log("menu Burger JS chargé");

$(document).ready(function () {
    const header = $('header');
    const menuBurger = $('.menu_burger');
    const nav = $('.navigation');
    const menuLinks = $('.menu_navigation li a');

    menuBurger.on('click', function () {
        const isOpen = header.hasClass('open');

        header.toggleClass('open', !isOpen);
        menuBurger.toggleClass('open', !isOpen);
        nav.toggleClass('open', !isOpen);

    });
});


/* Affichage Miniature */
console.log("Affichage Miniature JS chargé");

$(document).ready(function() {
    const miniPicture = $('#miniPicture');

    $('.arrow-left, .arrow-right').hover(
        function() {
            miniPicture.css({
                visibility: 'visible',
                opacity: 1
            }).html(`<a href="${$(this).data('target-url')}">
                        <img src="${$(this).data('thumbnail-url')}" alt="${$(this).hasClass('arrow-left') ? 'Photo précédente' : 'Photo suivante'}">
                    </a>`);
        },
        function() {
            miniPicture.css({
                visibility: 'hidden',
                opacity: 0
            });
        }
    );

    $('.arrow-left, .arrow-right').click(function() {
        window.location.href = $(this).data('target-url');
    });
});

