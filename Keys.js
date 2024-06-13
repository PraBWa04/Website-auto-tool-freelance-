document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Набір ключів шарнірних 7шт. 6-19 TOPTUL GAAA0704',
            description: 'Набір ключів шарнірних 7шт. 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19',
            price: '2 299₴',
            images: ['4.1.jpg']
        },
        {
            name: 'Набір розрізних ключів 5 шт. 8-24 (чорний чохол) TOPTUL GPAQ0502',
            description: 'Набір розрізних ключів від TOPTUL розмірами 8х10, 11х13, 12х14, 17х19, 22х24 мм',
            price: '1 599₴',
            images: ['4.2.jpg']
        },
        {
            name: 'Набір розрізних односторонніх ключів 3/8" 10 шт 10-19 мм TOPTUL GAAR1001',
            description: 'Набір розрізних односторонніх ключів 3/8" 10 шт 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 мм на планці',
            price: '1 399₴',
            images: ['4.3.jpg']
        },
        {
            name: 'Набір накидних ключів 6-22 мм (кут 45°) 8 шт. TOPTUL GPAH0804',
            description: 'Набір накидних ключів 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19, 20х22 мм (кут 45°), 8 шт. ',
            price: '1 499₴', 
            images: ['4.4.jpg']
        },
        {
            name: 'Набір накидних ключів 6-22 мм (кут 75°), 8 шт. TOPTUL GAAA0810',
            description: 'Набір накидних ключів 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19, 20х22 мм (кут 75°), 8 шт. ',
            price: '1 949₴',
            images: ['4.5.jpg']
        },
        {
            name: 'Набір накидних ключів 6-32 мм (кут 45°), 12 шт. TOPTUL GAAA1202.',
            description: 'Набір накидних ключів 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19, 20х22, 21х23, 24х27, 25х28, 30х32 мм (кут 45°), 12 шт. ',
            price: '3 489₴',
            images: ['4.6.jpg']
        },
        {
            name: 'Набір накидних ключів 6-32 мм (кут 75°), 12 шт. TOPTUL GAAA1204.',
            description: 'Набір накидних ключів 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19, 20х22, 21х23, 24х27, 25х28, 30х32 мм (кут 75°), 12 шт. ',
            price: '3 849₴',
            images: ['4.7.jpg']
        },
        {
            name: 'Набір супердовгих накидних ключів, 6 шт. TOPTUL GPAP0602',
            description: 'Набір супердовгих накидних ключів, 6 шт.',
            price: '2 999₴',
            images: ['4.8.jpg']
        },
        {
            name: 'Набір ріжкових ключів 15 шт. 3,2-14 мм 15°х75° TOPTUL GRAJ1501',
            description: 'Набір ключів TOPTUL GRAJ1501, 15 одиниць.',
            price: '2 249₴',
            images: ['4.9.jpg']
        },
        {
            name: 'Набір рожкових ключів TOPTUL GAAA0812, 8 штук, від 6 до 22 мм.',
            description: 'Набір рожкових ключів TOPTUL у зеленому чохлі, 8 штук: 6х7, 8х9, 10х11, 12х13, 14х15, 16х17, 18х19, 20х22.',
            price: '1 299₴',
            images: ['4.10.jpg']
        },
        {
            name: 'Набір рожкових ключів TOPTUL GPCJ1001, 10 штук, розміри від 6 до 32 мм.',
            description: 'Набір рожкових ключів TOPTUL, 10 штук, з розмірами від 6х7 до 30х32 мм, у чорному чохлі.',
            price: '2 199₴',
            images: ['4.11.jpg']
        },
        {
            name: 'Набір рожкових ключів TOPTUL GAAA1206, 12 штук, від 6 до 32 мм.',
            description: 'Набір рожкових ключів TOPTUL, 12 штук, від 6х7 мм до 30х32 мм.',
            price: '2 799₴',
            images: ['4.12.jpg']
        },
        {
            name: 'Набір супердовгих комбінованих ключів TOPTUL, 7 штук, від 10 до 19 мм.',
            description: 'Набір супердовгих комбінованих ключів, 7 штук, розмірами 10, 11, 12, 13, 14, 17, 19 мм на тримачі.',
            price: '1 299₴',
            images: ['4.13.jpg']
        },
        {
            name: 'Набір мініатюрних комбінованих ключів, 10 штук (від 5/32" до 7/16"), TOPTUL GBBA1001.',
            description: 'Набір комбінованих ключів мініатюрних дюймових, 10 штук (від 5/32" до 7/16").',
            price: '749₴',
            images: ['4.14.jpg']
        },
        {
            name: 'Набір ключів комбінованих скорочених, 10 штук, від 10 до 19.',
            description: 'Набір ключів комбінованих укорочених, 10 штук, у зеленому чохлі: AAAF1010 - Ключ комбінований укорочений 10 мм (полірований) | AAAF1111 - Ключ комбінований укорочений 11 мм (полірований) | AAAF1212 - Ключ комбінований укорочений 12 мм (полірований) | AAAF1313 - Ключ комбінований укорочений 13 мм (полірований) | AAAF1414 - Ключ комбінований укорочений 14 мм (полірований) | AAAF1515 - Ключ комбінований укорочений 15 мм (полірований) | AAAF1616 - Ключ комбінований укорочений 16 мм (полірований) | AAAF1717 - Ключ комбінований укорочений 17 мм (полірований) | AAAF1818 - Ключ комбінований укорочений 18 мм (полірований) | AAAF1919 - Ключ комбінований укорочений 19 мм (полірований)',
            price: '1 069₴',
            images: ['4.15.jpg']
        },
        {
            name: 'Набір комбінованих ключів на тримачі, 9 штук (6-8, 10, 12-14, 17, 19 мм) від TOPTUL GAAC0901',
            description: 'Набір комбінованих ключів на тримачі, 9 штук: 6, 7, 8, 10, 12, 13, 14, 17, 19.',
            price: '899₴',
            images: ['4.16.jpg']
        },
        {
            name: 'Набір комбінованих ключів на тримачі, 12 штук: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19 мм.',
            description: 'Набір комбінованих ключів на тримачі, 12 штук: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19 мм.',
            price: '1 199₴',
            images: ['4.17.jpg']
        },
        {
            name: 'Набір комбінованих ключів на тримачі, 14 штук: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 мм.',
            description: 'Набір комбінованих ключів TOPTUL GAAC1401 на тримачі, 14 штук: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24 мм. Згинута частина накидної головки дозволяє працювати з підпрофільними гайками/болтами. Вдосконалена конструкція рожкової частини. Кут нахилу 15% - більше простору для повороту. Ергономічна конструкція ручки ключа розроблена для підвищення комфорту під час виконання робіт.',
            price: '1 599₴',
            images: ['4.18.jpg']
        },
        {
            name: 'Набір комбінованих ключів TOPTUL GSAB1401 на тримачі, 14 штук: від 7 до 24 мм. Комплект поставляється на зручному тримачі для зберігання.',
            description: 'Набір комбінованих ключів TOPTUL GSAB1401 на тримачі, 14 штук. Особливості: стандартний комплект комбінованого ключа з відхиленням 15° (серія AAEB); широка конструкція підвіски, яка підходить для більшості типів одиночних або подвійних гачків; виготовлений з інженерного матеріалу для захисту від оливи, стійкості до ударів та продовження терміну служби; спеціальна зручна конструкція для легкого транспортування та зберігання; хром-ванадієва сталь; високий крутний момент у 1,6 раза в порівнянні зі стандартом ANSI та DIN; професійна якість для максимальної довговічності та стійкості до корозії; сатинове хромоване покриття.',
            price: '2 399₴',
            images: ['4.19.jpg']
        },
        {
            name: '"Hi-Performance" набір комбінованих ключів TOPTUL GPAX1401, 14 штук, розміром від 8 до 32.',
            description: 'Набір комбінованих ключів "Hi-Performance" TOPTUL у чорному чохлі, 14 штук: 8, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24, 27, 30, 32.',
            price: '3 099₴',
            images: ['4.20.jpg']
        },
        {
            name: 'Набір комбінованих ключів "Dynamic" TOPTUL, 14 штук: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 24.',
            description: 'Набір комбінованих ключів "Dynamic" TOPTUL, 14 штук: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 24.',
            price: '2 399₴',
            images: ['4.21.jpg']
        },
        {
            name: 'Набір комбінованих ключів "Hi-Performance" TOPTUL, 16 штук: 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24.',
            description: 'Набір комбінованих ключів "Hi-Performance" TOPTUL, 16 штук: 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 22, 24, 27, 30, 32',
            price: '3 199₴',
            images: ['4.22.jpg']
        },
        {
            name: 'Набір комбінованих ключів TOPTUL GAAA2604 містить 26 штук ключів з діаметрами від 6 до 32 міліметрів.',
            description: 'Набір комбінованих ключів TOPTUL GAAA2604 містить 26 штук ключів з діаметрами від 6 до 32 міліметрів, зберігається в зеленому чохлі.',
            price: '6 199₴',
            images: ['4.23.jpg']
        },
        {
            name: 'Набір комбінованих ключів TOPTUL GPAA2602 містить 26 штук ключів з діаметрами від 6 до 32 міліметрів, зберігається в удлиненному варіанті.',
            description: 'Набір комбінованих ключів TOPTUL GPAA2602 у чорному чохлі містить 26 штук ключів в удлиненному варіанті з діаметрами від 6 до 30 та 32 міліметрів.',
            price: '7 399₴',
            images: ['4.24.jpg']
        },
        {
            name: 'Набір ключів комбінованих з реверсивною трещоткою TOPTUL GPAQ1203 у сумці включає 12 ключів з діаметрами від 8 до 19 міліметрів.',
            description: 'Набір ключів комбінованих з реверсивною трещоткою включає 12 ключів з діаметрами від 8 до 19 міліметрів у чорному чохлі.',
            price: '5 899₴',
            images: ['4.25.jpg']
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