document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonials-carousel');
    const items = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showItem(index) {
        const itemWidth = items[0].offsetWidth + 20;
        const containerWidth = document.querySelector('.testimonials-carousel-wrapper').offsetWidth;
        const offset = (containerWidth - itemWidth) / 2;
        carousel.style.transform = `translateX(${-index * itemWidth + offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showItem(currentIndex);
    });

    showItem(currentIndex);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const chat_id = 'YOUR_CHAT_ID';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const data = {
        chat_id: chat_id,
        text: `Новий контакт:\nТелефон: ${phone}\nEmail: ${email}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Ваші дані успішно надіслано!');
        } else {
            alert('Сталася помилка. Спробуйте пізніше.');
        }
    })
    .catch((error) => {
        console.error('Помилка:', error);
        alert('Сталася помилка. Спробуйте пізніше.');
    });
});