document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const token = '7031200270:AAHKROUHkeUa-IXfAncIxo3_evZjkuF16h0';
    const chat_id = '698374561';
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