document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Набір пневмоінструменту TOPTUL GDAI2002E містить 20 предметів діаметром 1/2 дюйма під кодом KAAA1660B.',
            description: 'Набір пневмоінструменту TOPTUL GDAI2002E містить 20 предметів діаметром 1/2 дюйма під кодом KAAA1660B.',
            price: '7 999₴',
            images: ['6.1.jpg']
        },
        {
            name: 'Набір пневмоінструменту TOPTUL GDAI2701 містить 27 предметів діаметром 1/2 дюйма під кодом KAAA1640.',
            description: 'Набір пневмоінструменту TOPTUL GDAI2701 містить 27 предметів діаметром 1/2 дюйма.',
            price: '10 549₴',
            images: ['6.2.jpg']
        },
        {
            name: 'Набір пневмоінструменту TOPTUL GDAI2702',
            description: 'Набір пневмоінструменту TOPTUL GDAI2702 містить 27 предметів діаметром 1/2 дюйма.',
            price: '11 149₴',
            images: ['6.3.jpg']
        },
        {
            name: 'Набір пневмоінструменту TOPTUL GDAI2703 містить 27 предметів діаметром 1/2 дюйма.',
            description: 'Набір пневмоінструменту TOPTUL GDAI2703 містить 27 предметів діаметром 1/2 дюйма. Особливістю є потужний пневмогайковерт KAAA1660 з присоединительним квадратом 1/2 дюйма та важелем 949 Нм. В наборі є ударні головки від 10 до 24 мм, три шиномонтажні головки (17, 19, 21 мм) у спеціальній оплітці для захисту коліс від подряпин. Також є пристрій для розширення на 125 мм і кардан для роботи у важкодоступних місцях. Весь інструмент в наборі високої якості та придатний для щоденного використання в автосервісах і СТО.',
            price: '12 349₴',
            images: ['6.4.jpg']
        },
        {
            name: 'Набір пневмоінструменту TOPTUL GDAI2704',
            description: 'Цей набір пневмоінструменту TOPTUL GDAI2704 містить 27 предметів з пристроями діаметром 1/2 дюйма.',
            price: '12 999₴',
            images: ['6.5.jpg']
        },
        {
            name: 'Трещотка пневматична TOPTUL KAAE0802',
            description: 'Трещотка пневматична TOPTUL KAAE0802 має з\'єднувальний квадрат 1/4 дюйма, максимальне створюване зусилля 41 Нм і швидкість обертання 350 обертів за хвилину. Вона оснащена виводом повітря з задньої частини та шумоглушником.',
            price: '3 299₴',
            images: ['6.6.jpg']
        },
        {
            name: 'Пневматична трещотка TOPTUL GDAE0402',
            description: 'Пневматична трещотка TOPTUL GDAE0402 має з\'єднувальний квадрат 1/4", з максимальним створеним усилием 54 Нм і швидкістю обертання 400 обертів за хвилину. Вона має вихід повітря з задньої частини і шумоглушитель. Також в комплекті йдуть перехідники на 1/4 "і 3/8" і тримач бітів 1/4".',
            price: '4 549₴',
            images: ['6.7.jpg']
        },
        {
            name: 'Пневматична трещотка TOPTUL KAAE1202',
            description: 'Трещотка пневматична TOPTUL KAAE1202 має з\'єднувальний квадрат 3/8", максимальний обертовий момент 41 Нм і швидкість обертання 360 обертів за хвилину. Вона також має вихід повітря ззаду та шумоглушник.',
            price: '3 299₴',
            images: ['6.8.jpg']
        },
        {
            name: 'Трещотка пневматична TOPTUL KAAL1610',
            description: '',
            price: '8 849₴',
            images: ['6.9.jpg']
        },
        {
            name: 'Мініатюрний пневмошуруповерт Toptul KSAU0808 з приводом 1/4',
            description: 'Цей пневмошуруповерт Toptul KSAU0808 з приводом 1/4" і крутним моментом 108 Н/м та швидкістю обертання 12 000 обертів за хвилину ідеально підходить для роботи з карбюраторами, системами зажигання, кузовними панелями, трансмісіями, піддонами системи змащення та мелким ремонтом двигуна. Зажимний патрон призначений для європейського типу біт.',
            price: '5 349₴',
            images: ['6.10.jpg']
        },
        {
            name: 'Пневмогайковерт 1/2"  271 Н/м  10000 об/хв  1,36 кг  TOPTUL KAAA1620',
            description: 'Пневмогайковерт TOPTUL KAAA1620 має з\'єднувальний квадрат 1/2", максимальне вироблене зусилля - 271 Н/м, швидкість обертання - 10000 об/хв, відведення повітря з нижньої частини ручки та шумоглушник.',
            price: '7 399₴',
            images: ['6.11.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAS1630',
            description: 'Швидкість обертання - 10000 об/хв, відведення повітря з нижньої частини ручки та шумоглушник. Пневмогайковерт з квадратом 1/2", зусиллям 407 Н/м TOPTUL KAAS1630. Розроблений спеціально для використання в обмеженому просторі та важкодоступних місцях; Силіконовий чохол захищає корпус від механічних пошкоджень; Вивід повітря з заглушником для зменшення шуму; Зручний перемикач швидкостей (Forward: 3, Revers: 1) на ручці для легкої роботи однією рукою.',
            price: '8 999₴',
            images: ['6.12.jpg']
        },
        {
            name: 'Пневмогайковерт з квадратом 1/2", швидкістю 13500 об/хв, вагою 1,24 кг з композитним корпусом TOPTUL KAAJ1643.',
            description: 'Пневмогайковерт TOPTUL KAAJ1643 (облегчений, укорочений) має з\'єднувальний квадрат 1/2", з максимальним усилим 583 Н/м та швидкістю вращення 8000 об/хв. Він оснащений можливістю одноручного перемикання режиму обертання (F/R) та шумоглушником.',
            price: '9 299₴',
            images: ['6.13.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAX1660 (серія Pro). Вага інструменту становить 1,92 кг.',
            description: 'Пневмогайковерт TOPTUL KAAX1660 має з\'єднувальний квадрат 1/2 дюйма, максимальну потужність 813 Н/м, швидкість обертання 10000 об/хв і вагу 1,9 кг. Він використовує подвійний молот як робочий механізм та має чотири позиції для регулювання потужності з реверсом.',
            price: '7 949₴',
            images: ['6.14.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAR1650 (легкий, укорочений)',
            description: 'Пневмогайковерт TOPTUL KAAR1650 (легкий, укорочений) має з\'єднувальний квадрат 1/2 дюйма, максимальний вироблений усил 678 Нм, швидкість обертання 9500 об/хв, можливість одноручного перемикання напрямку обертання (Вперед/Назад) та шумоглушник.',
            price: '6 649₴',
            images: ['6.15.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAQ1650 (супер-короткий)',
            description: 'Пневмогайковерт TOPTUL KAAQ1650 (полегшений, укорочений) має приєднувальний квадрат 1/2", з максимальним крутним моментом 678 Нм та швидкістю обертання 9500 об/хв, з виводом повітря з нижньої частини ручки та шумоглушником.',
            price: '6 999₴',
            images: ['6.16.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAA1660',
            description: 'має приєднувальний квадрат 1/2", максимальне створене зусилля 949 Нм та швидкість обертання 6500 об/хв, вага 2,8 кг, з виводом повітря з нижньої частини ручки та шумоглушником.',
            price: '9 099₴',
            images: ['6.17.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KAAJ1680',
            description: 'Пневмогайковерт TOPTUL KAAJ1680 - це полегшений та укорочений інструмент з приєднувальним квадратом 1/2", максимальним створеним зусиллям 1085 Нм, швидкістю обертання 8000 об/хв, можливістю одноручного переключення напрямку обертання (F/R) та шумоглушником.',
            price: '11 549₴',
            images: ['6.18.jpg']
        },
        {
            name: 'Пневмогайковерт TOPTUL KSAC1680 1/2',
            description: 'Пневмогайковерт TOPTUL KSAC1680 має приєднувальний квадрат 1/2", з максимальним створюваним зусиллям 1288 Нм та швидкістю обертання 8500 об/хв, з виходом повітря з нижньої частини ручки та шумоглушником.',
            price: '7 099₴',
            images: ['6.19.jpg']
        },
        {
            name: 'Молоток пневматичний TOPTUL KAHA3217, має частоту ударів 3200 уд/хв.',
            description: 'Молоток пневматичний TOPTUL KAHA3217 має виготовлений з литого алюмінієвого сплаву корпус з ударним механізмом з закаленої сталі. Завдяки герметичному та високоточному з\'єднанню деталей забезпечується висока продуктивність та економія повітря. Має форму пістолета зручною ручкою. Додатково можна придбати насадки: KAJA18A1 Плоска насадка; KAJA18B1 Насадка для листового металу; KAJA18C1 Насадка для чищення зварювального шва; KAJA18D1 Насадка для різання панелей; KAJA18E1 Ударна насадка.',
            price: '2 999₴',
            images: ['6.20.jpg']
        },
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'catalog-item';

        const productImages = document.createElement('div');
        productImages.className = 'product-images';

        if (product.images.length > 1) {
            product.images.forEach((image, index) => {
                const img = document.createElement('img');
                img.src = image;
                img.alt = product.name;
                img.className = index === 0 ? 'active' : 'hidden';
                productImages.appendChild(img);
            });

            const prevButton = document.createElement('button');
            prevButton.textContent = '<';
            prevButton.className = 'carousel-button';
            prevButton.onclick = () => {
                const currentIndex = Array.from(productImages.children).findIndex(child => child.className === 'active');
                const nextIndex = (currentIndex - 1 + product.images.length) % product.images.length;
                productImages.children[currentIndex].className = 'hidden';
                productImages.children[nextIndex].className = 'active';
            };

            const nextButton = document.createElement('button');
            nextButton.textContent = '>';
            nextButton.className = 'carousel-button';
            nextButton.onclick = () => {
                const currentIndex = Array.from(productImages.children).findIndex(child => child.className === 'active');
                const nextIndex = (currentIndex + 1) % product.images.length;
                productImages.children[currentIndex].className = 'hidden';
                productImages.children[nextIndex].className = 'active';
            };

            const carouselButtons = document.createElement('div');
            carouselButtons.className = 'carousel-buttons';
            carouselButtons.appendChild(prevButton);
            carouselButtons.appendChild(nextButton);

            productImages.appendChild(carouselButtons);
        } else {
            const img = document.createElement('img');
            img.src = product.images[0];
            img.alt = product.name;
            productImages.appendChild(img);
        }

        const productDetails = document.createElement('div');
        productDetails.className = 'product-details';

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.className = 'price';
        productPrice.textContent = `Ціна: ${product.price}`;

        const buyButton = document.createElement('a');
        buyButton.href = 'https://t.me/auto_tool_set';
        buyButton.textContent = 'Купити';
        buyButton.className = 'buy-button';

        productDetails.appendChild(productName);
        productDetails.appendChild(productDescription);
        productDetails.appendChild(productPrice);
        productDetails.appendChild(buyButton);

        productItem.appendChild(productImages);
        productItem.appendChild(productDetails);

        productList.appendChild(productItem);
    });
});