document.addEventListener('DOMContentLoaded', () => {
    $('.open-overlay').click(function() {
        var overlay_navigation = $('.overlay-navigation'),
          nav_item_1 = $('nav li:nth-of-type(1)'),
          nav_item_2 = $('nav li:nth-of-type(2)'),
          nav_item_3 = $('nav li:nth-of-type(3)'),
          nav_item_4 = $('nav li:nth-of-type(4)'),
          nav_item_5 = $('nav li:nth-of-type(5)'),
          top_bar = $('.bar-top'),
          middle_bar = $('.bar-middle'),
          bottom_bar = $('.bar-bottom');
      
        overlay_navigation.toggleClass('overlay-active');
        if (overlay_navigation.hasClass('overlay-active')) {
      
          top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
          middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
          bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
          overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
          nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
          nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
          nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
          nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
          nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
        } else {
          top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
          middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
          bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
          overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
          nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
          nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
          nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
          nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
          nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
        }
      })
  //2 галерея
  const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const close = document.getElementById('close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = item.src;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
//3 чому варто обрати нас
document.querySelectorAll('.feature-block').forEach(block => {
  block.addEventListener('click', () => {
    block.classList.toggle('expanded');
    block.style.backgroundColor = block.classList.contains('expanded') ? '#a5d6a7' : '#b2e0b2'; // Змінюємо колір при натисканні
  });
});

 //
 document.getElementById('callOrderForm').onsubmit = function(event) {
  event.preventDefault(); // Запобігання перезавантаженню сторінки
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  document.getElementById('output').innerText = `Ваші дані:\nПІБ: ${fullName}\nПошта: ${email}\nТелефон: ${phone}\nПовідомлення: ${message}`;
};

 
});