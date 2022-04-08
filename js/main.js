// Burger Menu js start here

const menuBtn = document.querySelector('.menu-btn');
const menuLeft = document.querySelector('.menu-left');
const column = document.querySelector('.hide');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuLeft.classList.add('hamburger');
        column.classList.add('column');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuLeft.classList.remove('hamburger');
        column.classList.remove('column');
        menuOpen = false;
    }
});

// Burger Menu js End here

const filter_btns = document.querySelectorAll(".filter-btn");

filter_btns.forEach((btn) =>
    btn.addEventListener("click", () => {
        filter_btns.forEach((button) => button.classList.remove("active"));
        btn.classList.add("active");

        let filterValue = btn.dataset.filter;

        $(".grid").isotope({ filter: filterValue });
    })
);

$(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
});

//back to top

        var btn = $('#back-top');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('in');
        } else {
            btn.removeClass('in');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });
   