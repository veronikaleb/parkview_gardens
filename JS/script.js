document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('callOrderForm').onsubmit = function(event) {
    event.preventDefault(); // Запобігання перезавантаженню сторінки
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const apartmentType = document.getElementById('apartmentType').value;
    const message = document.getElementById('message').value;

    document.getElementById('output').innerText = `Ваші дані:\nПІБ: ${fullName}\nПошта: ${email}\nТелефон: ${phone}\nТип квартири: ${apartmentType}\nПовідомлення: ${message}`;
};

});