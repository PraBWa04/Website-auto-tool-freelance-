document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Домкрат підкатний TORIN TA820014S, вантажопідйомністю 2 тонни (відповідає стандарту ASME) та 1,5 тонни (відповідає стандарту CE), у кейсі. Висота підйому становить від 135 до 330 мм.',
            description: 'Цей тип домкрата дуже зручний у використанні в гаражі або інших місцях з обмеженим простором. Вони не піднімають так високо, як пляшкові домкрати, але надійніше утримують автомобіль. Коротко про основні характеристики автомобільного домкрата Torin TA820014 (в кейсі): висота підйому становить 330 мм, висота підхоплення - 135 мм, максимальна вантажопідйомність - 2 тонни (2т(ASME)/1,5т(CE)). Домкрат Torin TA820014 має пласку платформу, що забезпечує хорошу стійкість під час роботи. До особливостей домкрата варто віднести посилену гідравліку та модифікований запобіжний клапан. Ця модель має просту конструкцію і дуже проста в експлуатації. Зазначимо також його малу вагу - всього 7,5 кг, і невеликі габарити, завдяки чому він не займе багато місця в багажнику вашого авто.',
            price: '1 799₴',
            images: ['8.2.jpg']
        },
        {
            name: 'Домкрат підкатний 2т 135-340 мм TORIN T820050',
            description: 'Домкрат підкатний 2т 135-340 мм TORIN T820050, важить всього 8,2 кг і має компактні габарити, при цьому характеризується автономною роботою і не потребує витрат сил для роботи. Якісний насос і гідроциліндр виконані з максимальною точністю. Такий домкрат підкатний 2т TORIN T820050 є напівпрофесійним типом обладнання. T820050 TORIN працює на ручному гідравлічному приводі і легко фіксує на потрібній висоті вантаж до 2 тонн. Поставляється в картонній коробці. Мобільний, компактний і зручний в експлуатації, виготовлений з високоякісних матеріалів. Ідеально підходить для обслуговування автомобілів на шиномонтажах і автосервісах.',
            price: '1 799₴',
            images: ['8.3.jpg']
        },
        {
            name: 'Домкрат подкатний 3т 135-410 мм TORIN T830020',
            description: 'Домкрат подкатний TORIN T830020 має висоту 135 мм, при цьому здатний піднімати та утримувати вагу до 3 тонн на висоті 410 мм. Домкрат TORIN T830020 простий і зручний у використанні, має стійку конструкцію та довгу ручку. Домкрат підійде для використання в гаражі, на СТО, на шиномонтажних станціях, на виробництві тощо. T830020 має вагу 16,7 кг.',
            price: '3 399₴',
            images: ['8.4.jpg']
        },
        {
            name: 'Професійний подкатний домкрат TORIN T830023T з двома насосами та педаллю призначений для піднімання ваги до 3 тонн на висоту від 130 до 465 мм.',
            description: 'Подкатний домкрат TORIN T830023T має висоту 130 мм, але здатний піднімати та утримувати вагу до 3 тонн на висоті 465 мм. Це простий та зручний у використанні домкрат має стійку конструкцію та довгу ручку. Він підходить для використання в гаражах, СТО, на шиномонтажних станціях, на виробництві тощо. Його вага становить 31 кг. Наявність подвійної помпи прискорює процес підйому та знижує ризик відмови конструкції.',
            price: '7 549₴',
            images: ['8.5.jpg']
        },
        {
            name: 'Підкатний домкрат TORIN TZ830027H вагою 3 тонни має висоту від 98 до 770 мм. Це професійний домкрат з восьмипозиційним регулюванням та подвійною помпою. Ідеально підходить для використання в автосервісах, гаражах та інших місцях ремонту автомобілів.',
            description: 'Підкатний домкрат TORIN TZ830027H має висоту 98 мм, але може піднімати і утримувати вагу до 3 тонн на висоті 770 мм. Цей домкрат простий і зручний у використанні, має стійку конструкцію та довгу ручку. Він ідеально підходить для використання в гаражах, автосервісах, шиномонтажних станціях та на виробництві. Вага цього домкрата становить 31 кг. Подвійна помпа прискорює процес опускання/підйому і робить конструкцію повністю надійною.',
            price: '13 249₴',
            images: ['8.6.jpg']
        },
        {
            name: 'Домкрат пляшковий  2т 181-345 мм TORIN T90204',
            description: 'Гідравлічний пляшковий домкрат 2т - універсальний, нестаціонарний механізм для підйому і фіксації різноманітних вантажів на певній висоті. Це пристрій користується великою популярністю в сфері монтажних і загальнослюсарних робіт в автосервісах, а також успішно використовується на підприємствах і в промислових комплексах. Гідравлічний пляшковий домкрат є одним із найбільш простих і надійних у використанні завдяки своїй потужності. Він має високий рівень ККД - до 80% при невеликому зусиллі та значну вантажопідйомність. Якісне виконання роботи при обслуговуванні і ремонті забезпечується комфортною областю підйому, а наявність гідравлічного механізму гарантує високі робочі характеристики механізму.',
            price: '799₴',
            images: ['8.7.jpg']
        },
        {
            name: 'Домкрат пляшковий 3т 194-372 мм TORIN T90304',
            description: 'Домкрат автомобільний телескопічний TORIN T90304 вантажопідйомністю до 3 тонн має компактні розміри, але при цьому хорошу стійкість, а максимальна висота підйому становить 372 мм. Висота самого домкрата складає всього 194 мм. Вага TORIN T90304 – 3,6 кг. Має широку стійку платформу та невеликі габарити, завдяки чому його легко використовувати та транспортувати.',
            price: ' 899₴',
            images: ['8.8.jpg']
        },
        {
            name: 'Домкрат пляшковий 5т 216-413 мм TORIN T90504',
            description: 'Домкрат пляшковий TORIN T90504 має грузопідйомність 5 та максимальну висоту підйому 413 мм, що досить для роботи не лише з легковими автомобілями, а й з джипами та мікроавтобусами. Висота домкрата T90504 становить 216 мм, а вага 4,5 кг. Домкрат є незамінним помічником у випадках підняття автомобіля для заміни колеса або виконання інших ремонтних робіт. Особливості: • Закалений винтовий подовжувач дозволяє регулювати максимальну висоту підйому. • Зручна рифленая п\'ята з термообробкою забезпечує широку зону підхоплення та надійне зчеплення. • Широка та міцна основа забезпечує стійкість та безпеку. Всі точки навантаження посилені, що підвищує тривалість служби та надійність."',
            price: '1 349₴',
            images: ['8.9.jpg']
        },
        {
            name: 'Домкрат пляшковий  10т 230-460 мм   TORIN  T91004',
            description: 'Домкрат бутылочний TORIN T91004 має компактні розміри та невелику вагу - всього 6,8 кг. Висота домкрата складає 230 мм, а максимальна грузопідйомність - до 10 тонн. У домкрата TORIN T91004 широка основа, що забезпечує більшу стійкість та безпеку під час роботи. Максимальна висота підйому становить 380 мм, при цьому можна компенсувати різницю між домкратом та кузовом за рахунок викручування винта. Поверхня домкрата T91004, яка контактує з кузовом, має ребристу форму для кращого зчеплення. Домкрат TORIN T91004 простий у використанні та не потребує спеціальних знань.',
            price: '1 899₴',
            images: ['8.10.jpg']
        },
        {
            name: 'Домкрат пляшковий  15т 230-460 мм   TORIN  T91504',
            description: '',
            price: '2 399₴',
            images: ['8.11.jpg']
        },
        {
            name: 'Домкрат пневматичний DPA-2C виробництва AIRKRAFT має грузопідйомність 2,8 тонни.',
            description: 'Конструкція цього домкрата дозволяє піднімати автомобілі з відносно невеликим дорожнім просвітом. Його висота дозволяє використовувати його для підйому майже всіх автомобілів вагою до 2,8 тонн. Для підняття автомобіля: розмістіть DPA-2C у потрібному місці під днищем, під\'єднайте стиснений повітря та відкрийте кран. Після того, як авто буде підняте на потрібну висоту, закрийте кран. Для опускання автомобіля: плавно відкрийте кран з протилежного боку від під\'єднаного шланга.',
            price: '4 999₴',
            images: ['8.12.jpg']
        },
        {
            name: 'Домкрат пневматичний DPA-3C витримує вагу до 4,2 тонн і призначений для підйому автомобілів.',
            description: 'Конструкція домкрата дозволяє піднімати автомобілі з відносно невеликим дорожнім просвітом. Висота домкрата дозволяє використовувати його для підйому практично всіх автомобілів вагою до 4 тонн. Підняття автомобіля: розмістити DPA-3C в потрібному місці під днищем, підключити стиснутий повітря та відкрити кран. Після підняття автомобіля на необхідну висоту, закрити кран. Зниження автомобіля: плавно відкрити кран з протилежної сторони від підключеного шланга.',
            price: '6 199₴',
            images: ['8.13.jpg']
        },
        {
            name: 'Домкрат з пневматичним приводом DPA-3RK з короткою ручкою, навантаженням 4,2 т, від AIRKRAFT.',
            description: 'Конструкція домкрата дозволяє піднімати автомобілі з відносно невеликим дорожнім просвітом. Висота домкрата ідеально підходить для підйому майже всіх автомобілів вагою до 4 тонн. Він має зручну скорочену ручку довжиною всього 400 мм. Піднімання авто: помістіть DPA-3RK у необхідне місце під днищем, підключіть стиснутий повітря і відкрийте кран. Піднявши авто на необхідну висоту, перекрийте кран. Опускання авто: плавно відкрийте кран з протилежного боку від підключеного шланга.',
            price: '6 199₴',
            images: ['8.14.jpg']
        },
        {
            name: 'Домкрат пневматичний професійний  короткая ручка JP-2PRO-SH 2,8т  AIRKRAFT',
            description: 'Пневматичний домкрат JP-2PRO-SH від AIRKRAFT є професійним підйомним пристроєм, який дозволяє піднімати одне з коліс автомобіля, забезпечуючи додатковий простір для ремонту або обслуговування. Робочий діапазон домкрата дозволяє піднімати автомобілі як з невеликим дорожнім просвітом, так і високі вантажівки. Конструкція домкрата розрахована на підйом автомобілів вагою до 2,8 тонн. Переваги: - Зручний пульт керування спуском/підйому домкрата (замість кранів у старій моделі). Пневматичний клапан виготовлений зі спеціальних кольорових металів. Корпус з алюмінію, золотник з латуні; - Збільшений діаметр контактної площі на 30% до 120 мм. Використовується спеціальна зносостійка гумова опора; - Болти підвищеної міцності. Усі силові деталі закріплені болтами підвищеного класу міцності, а саме 8,8 за ГОСТ 1759.4-87 (ISO 898.1-78); - Штамповане сталеве кільце з листа товщиною 6 мм. Забезпечує герметичне прилягання гумової гофри до сталевої кришки та основи домкрата; - Гумова гофра з капроновим кордом та силовими кільцями зі сталевого корду. Висока якість лиття гуми; - Оснащений клапаном аварійного зниження тиску',
            price: '5 149₴',
            images: ['8.15.jpg']
        },
        {
            name: 'Домкрат пневматичний професійний  JP-3PRO 4,2т  AIRKRAFT',
            description: 'Пневматичний домкрат JP-3PRO AIRKRAFT є професійним підйомним пристроєм, призначеним для підняття одного з коліс автомобіля, забезпечуючи додатковий простір у зоні ремонту або обслуговування. Робочий діапазон домкрата дозволяє піднімати автомобілі як з невеликим дорожнім просвітом, так і високі позашляховики. Конструкція домкрата розрахована для підйому автомобілів вагою до 4,2 тонн.Переваги:Зручний пульт спуску підйому домкрата: На відміну від старих моделей з кранами, цей домкрат оснащений пультом для зручного управління підйомом та спуском.Пневматичний клапан: Виготовлений зі спеціальних кольорових металів, що забезпечує високу надійність і довговічність.Корпус з дюралюмінію: Золотники виготовлені з латуні, що забезпечує легкість конструкції та стійкість до корозії. Збільшений діаметр п\'ятна контакту: На 30%, до 120 мм. Використовується спеціальна зносостійка гумова опора для кращого контакту з поверхнею.Болти підвищеної міцності: Всі силові деталі закріплені болтами класу міцності 8.8 по ГОСТ 1759.4-87 (ISO 898.1-78), що забезпечує високу надійність конструкції. Штамповане сталеве кільце: Виготовлене з листа товщиною 6 мм, забезпечує герметичне прилягання гумової гофри до сталевої кришки та основи домкрата. Гумова гофра: Оснащена капроновим кордом і силовими кільцями зі сталевого корду. Висока якість ливарного гумового матеріалу забезпечує довговічність. Клапан аварійного скидання тиску: Забезпечує додаткову безпеку при експлуатації домкрата.Цей пневматичний домкрат є надійним та зручним інструментом для підйому автомобілів, що підходить як для професійних автомайстерень, так і для особистого використання.',
            price: '6 399₴',
            images: ['8.16.jpg']
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