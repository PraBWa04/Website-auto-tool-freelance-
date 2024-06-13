document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Стійка трансмісійна гідравлічна 0,5 т, H=1260-1750 мм, TORIN TEL05001.',
            description: 'Стійка трансмісійна гідравлічна 0,5 т TORIN TEL05001 призначена для зняття та установки автомобільних коробок передач, елементів вихлопної системи та паливних баків. Трансмісійна стійка TEL05001 обладнана педаллю для гідравлічного приводу, хромованим штоком, клапаном контролю перевантаження. Для маневреності та стійкості стійки використано 4 металевих колісця.',
            price: '9 399₴',
            images: ['5.1.jpg']
        },
        {
            name: 'Стійка трансмісійна (з педаллю) 0,75 т, H=1360-2030 мм, TORIN TRF40753A.',
            description: 'Стійка трансмісійна (з педаллю) TRF40753A TORIN призначена для монтажу та демонтажу трансмісії. Також може служити додатковою опорою під час роботи на підйомнику. Стійка трансмісійна призначена для монтажу та демонтажу коробок передач та інших вузлів та агрегатів трансмісії під час їх ремонту або технічного обслуговування на автомобілях, встановлених на оглядовій ямі, естакаді або підйомнику.',
            price: '5 199₴',
            images: ['5.2.jpg']
        },
        {
            name: 'Стійка трансмісійна гідравлічна 0,5 т, H=1140-1945 мм, TORIN TEL05004S.',
            description: 'Стійка трансмісійна гідравлічна 0,5 т TORIN TEL05004S - відмінний помічник у монтажі та демонтажі трансмісії. Універсальний захоп допоможе працювати не лише з трансмісією, але й з іншими вузлами та механізмами, буде незамінним. Педальний привід насоса дозволяє звільнити руки механіка. Шток хромований для запобігання появі корозії. Розрахований на вантажопідйомність до 500 кг. Безсвинцеве лакофарбне покриття наноситься після ретельної хімічної обробки металу, щоб забезпечити якісне зчеплення з поверхнею та запобігти появі ржавчини. Робоча поверхня має кут нахилу вперед 14 °, нахил назад 72 °, 31 ° вправо і 45 ° вліво, а також має ручки регулювання для управління нахилом. Легко піднімається і опускається за допомогою важеля насоса зручною прорезиненою ручкою.',
            price: '9 899₴',
            images: ['5.3.jpg']
        },
        {
            name: 'Кран підкатний гідравлічний складний 1 т (T31002x-GS) TORIN T31002.',
            description: 'Гідравлічний кран Big Red T31002 - складаний гаражний кран з максимальною вантажопідйомністю 1,0 тонна, масою 75 кг. Призначений для підйому і переміщення вантажів під час виконання вантажно-розвантажувальних робіт у гаражах, складських приміщеннях, ремонтних цехах тощо. Телескопічна стріла, що фіксується в 4 позиціях, забезпечує висоту підйому до 2,382 метрів. Оснащений гідроциліндром із вбудованим насосом з ручним приводом.',
            price: '11 699₴',
            images: ['5.4.jpg']
        },
        {
            name: 'Стенд складаний для вивішування двигуна поворотний, 680 кг, TORIN T26801.',
            description: 'Стенд для вивішування двигуна поворотний T26801 стане корисним для таких видів робіт, як діагностика, профілактика та ремонт двигуна. Завдяки коліщаткам, корпус стенда без зусиль може переміщатися по рівній поверхні. Міцний, маневрений стенд може піднімати вантаж до 680 кг. Діапазон кута поворотного сідла становить 0-360°, з 8 позиціями для фіксації через кожні 45°. Завдяки компактним габаритам 870х195х190 мм і вазі всього 33 кг, стенд має відмінну маневреність та транспортабельність.',
            price: '5 949₴',
            images: ['5.5.jpg']
        }
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