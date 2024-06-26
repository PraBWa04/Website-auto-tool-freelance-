document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            name: 'Дриль-шуруповерт акумуляторний безщітковий 18V 65Nm 0-1500об/хв TOPTUL KPH-1607E',
            description: 'Дрель-шуруповерт акумуляторний безщітковий 18V 65 Нм 0 - 1500 об/хв TOPTUL KPH-1607E. Зручність Компактний, з відмінним балансом, зручно і приємно лежить в руці. додатковими насадками - загострити ножі, зачистити поверхню і т.п. , підвісивши його на будь-яку петлю, гачок або пояс. Продуктивність швидкість обертання 4300 об/хв. Потужність акумулятора 18 В з ідеальним балансом між продуктивністю та тривалістю роботи. Прогумована ручка щільно лежить у руці, а гумові вставки на корпусі не дадуть зісковзнути шуруповерту, якщо ви покладете його на поверхню похилу.',
            price: '32 199₴',
            images: ['1.1.jpg']
        },
        {
            name: 'Електрошуруповерт 18V 4.0Ah 400Nm 0-3000об/хв TOPTUL KPBA0840E',
            description: 'Електрошуроповерт TOPTUL KPBA0840E має безщітковий потужний двигун, який забезпечує максимальний вихідний крутний момент. Безщітковий двигун забезпечує довший термін служби, ніж інші види двигунів. Регулювання швидкості виконується спеціальним перемикачем і сприяє оптимальній продуктивності у всіх застосуваннях. Перемикач розташований на рукоятці для зручної роботи однією рукою. Металева коробка передач забезпечує ефективніше передавання потужності та довговічність інструментів. Алюмінієвий корпус редуктора покращує розсіювання тепла, збільшуючи термін служби електродвигуна. Є температурний та електричний захист від перевантажень. Електрошуроповерт TOPTUL KPBA0840E оснащений світловими індикаторами, які підсвічують кнопку перемикача ввімкнення/вимкнення, а також відображають зарядку акумулятора. У комплекті йдуть дві літій-іонні акумуляторні батареї 18V 4.0Ah. Для їх заряджання необхідне джерело живлення змінного струму 100 - 240 В / 50 - 60 Гц, а споживана потужність DC 21V 3.0A. Усі елементи та запасна батарея упаковані у пластиковий кейс розмірами 400х320х100мм.',
            price: '20 499₴',
            images: ['1.2.jpg']
        },
        {
            name: 'Акумуляторний безщітковий електрошуроповерт 18V 4.0Ah 140-366Nm 0-3200об/хв TOPTUL KPB-0837E',
            description: 'Електрошуроповерт TOPTUL KPB-0837E має безщітковий потужний двигун, який забезпечує максимальний вихідний крутний момент. Безщітковий двигун забезпечує довший термін служби, ніж інші види двигунів. Регулювання швидкості виконується спеціальним перемикачем і сприяє оптимальній продуктивності у всіх застосуваннях. Перемикач розташований на рукоятці для зручної роботи однією рукою. Металева коробка передач забезпечує ефективніше передавання потужності та довговічність інструментів. Алюмінієвий корпус редуктора покращує розсіювання тепла, збільшуючи термін служби електродвигуна. Є температурний та електричний захист від перевантажень. Електрошуроповерт TOPTUL KPB-0837E оснащений світловими індикаторами, які підсвічують кнопку перемикача ввімкнення/вимкнення, а також відображають зарядку акумулятора. У комплекті йдуть дві літій-іонні акумуляторні батареї 18V 4.0Ah. Для їх заряджання необхідне джерело живлення змінного струму 100 - 240 В / 50 - 60 Гц, а споживана потужність DC 21V 3.0A. Усі елементи та запасна батарея упаковані у пластиковий кейс.',
            price: '32 849₴',
            images: ['1.3.jpg']
        },
        {
            name: 'Акумуляторний безщітковий електрошуроповерт 18V 150-280Nm 0-4300 об/хв TOPTUL KPB-226AE',
            description: 'Акумуляторний безщітковий електрошуроповерт 18V 150 - 280 Нм 0 - 4300 об/хв TOPTUL KPB-226AE. Зручність. Компактний, з відмінним балансом, зручно та приємно лежить у руці. Він стане надійним помічником при необхідності відкрутити або закрутити кріплення, просвердлити отвори, а з додатковими насадками – загострити ножі, зачистити поверхню тощо. Можна працювати в темряві завдяки яскравій світлодіодній підсвітці. Правильно планувати свою роботу та стежити за рівнем заряду батареї допомагає LED-індикатор. Кліпса, розташована збоку, дозволяє зручно зберігати та переносити шуруповерт, підвісивши його на будь-яку петлю, гачок або пояс. Продуктивність: швидкість обертання 4300 об/хв, високий крутний момент до 150 – 280 Нм. Вибрати потрібне зусилля та зберегти матеріал цілим допоможе "регулятор крутного моменту". Функціонал: Шуруповерт укомплектований Li-Ion знімним акумулятором. Потужність акумулятора 18 В з ідеальним балансом між продуктивністю та тривалістю роботи. Біля кнопки "Пуск" розташований перемикач напрямку обертання. Прорезинена ручка щільно лежить у руці, а гумові вставки на корпусі не дадуть шуруповерту зісковзнути, якщо ви покладете його на похилу поверхню.',
            price: '32 999₴',
            images: ['1.4.jpg']
        },
        {
            name: 'Акумуляторний ударний електрогайковерт 1/2" 120/240/385 Нм 2760 об/хв (Pro Series) TOPTUL KPA-1639E',
            description: 'Характеристики електричного гайковерта KPA-1639E: Новий потужний двигун з безщітковою конструкцією для максимального крутного моменту й міцності. У безщітковому двигуні відсутні вугільні щітки, він працює майже не нагріваючись, що збільшує термін служби. Алюмінієва передня вставка поліпшує розподіл тепла, тим самим збільшуючи термін служби двигуна. Безщітковий двигун з електронним управлінням оптимізує використання енергії батареї, збільшуючи її час роботи до 30%. Регулювання швидкості для оптимальної продуктивності у всіх сферах застосування. Конструкція перемикача Quick F/R для зручного управління однією рукою. Вбудована підсвітка, освітлює робочу зону. Ергономічна рукоятка для зменшення втоми при тривалому користуванні. Обладнано додатковим захисним ковпаком передньої частини корпусу. Захист від перевантаження. Індикація заряду батареї.',
            price: '32 799₴',
            images: ['1.5.jpg']
        },
        {
            name: 'Електрозаклепочник TOPTUL KPR-064ME',
            description: 'Електрозаклепочник TOPTUL KPR-064ME: • Діаметри заклепок: 3.2, 4.0, 4.8, 6.4 мм • Сила: 9000 Нм • Швидкість: 0-1422 об/хв Удобство: • Компактний, з відмінним балансом, зручно лежить в руці. • Можна працювати в темряві завдяки яскравому світлодіодному підсвічуванню. • LED-індикатор допомагає правильно планувати роботу та контролювати рівень заряду акумулятора. • Кліпса на боці дозволяє зручно зберігати і переносити, підвісивши його на будь-який крючок, петлю або пояс. Функціонал: • Оснащений знімним літій-іонним акумулятором. • Потужність акумулятора 18 В з ідеальним балансом між продуктивністю та тривалістю роботи. • Гумова ручка щільно лежить в руці, а гумові вставки на корпусі запобігають його ковзанню, якщо ви поставите його на нахилenuy поверхню.',
            price: '33 499₴',
            images: ['1.6.jpg']
        },
        {
            name: 'Професійний набір акумуляторного інструменту Bosch GSR 18V-50 + GDX 180-LI 5Ah',
            description: 'з АКБ 18V 5 Ah-3 шт, дриль-шурупокрут, гайкокрут; Дриль-шурупокрут GSR 18V-50 PROFESSIONAL Легка, порівняно компактна і потужна акумуляторна дриль-шурупокрут з підвищеним крутним моментом, надійним безщітковим двигуном, швидкозатискний патрон і автоматичної LED-підсвічуванням. Позиціонується як модель професійного класу верхньої цінової категорії. Призначена для активного використання у складальних, монтажно-демонтажних, оздоблювальних і будівельних роботах різної інтенсивності. Завдяки значному крутному моменту, що досягає 50 Нм, здатна легко і швидко впоратися з загортанням/відверненням шурупів, саморізів, гвинтів і конфірматів значного діаметра і довжини. Автономне живлення від літій-іонних акумуляторів з напругою 18 В робить дриль-шурупокрут Bosch GSR 18 V-50 Professional корисним помічником при виконанні різних робіт на об\'єктах, позбавлених підключення до побутової електромережі. Оснащене посиленим планетарним редуктором і необслуговуваним безщітковим двигуном з підвищеною стійкістю до перевантажень. Працює у двох швидкісних режимах. Перший (до 460 об/хв) забезпечує максимальний крутний момент для роботи з кріпленнями, а другий (до 1800 об/хв) оптимальний для енергійного свердління невеликих отворів. Для обмеження моменту затягування в м\'яких матеріалах є 20-ступінчаста муфта. Є ефективний гальмо двигуна і повзунковий перемикач реверса.',
            price: '19 999₴',
            images: ['1.7(1).jpg', '1.7(2).jpg', '1.7(3).jpg']
        },
        {
            name: 'Професійний набір акумуляторного інструменту Milwaukee M18 CBLPP2A-402C',
            description: 'Набір інструментів Milwaukee M18 CBLPP2A-402C 4933464536 постачається в комплекті з динакейсом для зберігання та транспортування. Як джерело живлення інструментів використовується літій-іонний акумулятор М18 напругою 18 Ст. Ударний дриль M18 CBLPD через невелику вагу зручний при роботі у важкодоступних місцях. Наявність удару робить інструмент універсальним. Висока потужність та продуктивність досягається за рахунок безщіткового двигуна. Імпульсний гвинтоверт M18 CBLID служить для відкручування та закручування кріпильних елементів. Кріплення на пояс рятує, коли потрібні вільні руки. Металевий редуктор гарантує тривалий термін служби приладу. Технічні характеристики Milwaukee M18 CBLPP2A-402C 4933464536 Тип двигуна безщітковий Кількість інструментів у наборі 2 шт Кількість акумуляторів у комплекті 2 Серія акумулятора Milwaukee REDLithium Циркулярна (дискова) пила немає Тип акумулятора Li-Ion Напруга акумулятора 18 В Місткість акумулятора 4 А*ч Комплектація ударний дриль, імпульсний гвинтоверт Упаковка кейс/валіза Переваги Milwaukee M18 CBLPP2A-402C 4933464536 Ударний дриль M18 CBLPD Вказівник рівня заряду акумулятора; 60 Нм крутний момент - найкраще співвідношення потужності до розміру; Система захисту REDLINK від перевантаження в інструменті та акумуляторі; Повністю металева двостороння кліпса дозволяє легко та швидко повісити інструмент на ремінь. Імпульсний гвинтоверт M18 CBLID Яскраве світлодіодне підсвічування робочої поверхні; Компактні розміри для зручності роботи – довжина всього 130 мм; Система захисту REDLINK від перевантаження інструменту та акумулятора.',
            price: '22 999₴',
            images: ['1.8(1).jpg', '1.8(2).jpg']
        },
        {
            name: 'Потужний дриль-шурупокрут акумуляторний безщітковий DeWALT DCD708D1T',
            description: 'Дриль-шурупокрут акумуляторний безщітковий DeWALT DCD708D1T Компактний і ергономічний дизайн полегшує навантаження при використанні. Довжина корпусу всього 160 мм - є одним з кращих показників серед 18 В дрилів-шурупокрутів на ринку. Безщітковий двигун з високим ККД забезпечує більшу тривалість роботи без перезарядження акумулятора. Відсутність швидкозношуваних частин (щітки) збільшує загальний ресурс інструменту, дозволяє інструменту працювати довше на одному заряді акумулятора. Компактний, ергономічний дизайн корпусу дозволяє використовувати інструмент в обмеженому просторі. Електронне регулювання швидкості. Світлодіодне підсвічування робочої зони. Використовується в збірці меблів, монтажі конструкцій, опалювального, вентиляційного обладнання, столярних та електротехнічних роботах тощо. Технічні характеристики DCD708D1T Виробник DeWALT Країна-виробник Китай Тип двигуна Безщітковий Напруга акумулятора, В 18 Ємність аккумулятору, Аг 2 Вихідна потужність, Вт 340 Тип акумулятора Li-Ion Максимальний крутний момент, Нм 65 Частота обертання 1 швидкість, об/хв 450 Частота обертання 2 швидкість, об/хв 1650 Максимальний діаметр свердління (дерево), мм 30 Максимальний діаметр свердління (метал), мм 13 Макс. діаметр хвостовика оснащення, мм 13 Наявність удару немає Швидкозатискний патрон є Кількість швидкостей 2 Вага, кг 1.1 Комплектація Акумулятор 2 Аг - 1 шт Зарядний пристрій - 1 шт Валіза TSTAK - 1 шт',
            price: '9 999₴',
            images: ['1.9.jpg']
        },
        {
            name: 'Професійний акумуляторний ударний гайковерт Bosch Professional GDS 18V-1050 H',
            description: 'Акумуляторний ударний Гайковерт Bosch GDS 18V-1050 H Professional із виробничою потужністю 18 В запросто справляється із кріпленням М10-М24. Кількість оборотів залежить від обраної швидкості — 0-800 об/хв, 0-1200 об/хв, 0-1750 об/хв. Крутний момент (максимальний) при закручуванні —1050 Нм, а при викручуванні — 1700 Нм. Гайковерт оснащений безщітковим двигуном, патроном ¾ із фрикційним кільцем, вбудованим ліхтариком, індикатором. Частота ударів: 0-1600 уд/хв., 0-2400 уд/хв., 0-2600 уд/хв. Вага пристрою 2.9 кг. Доставляється в картонному пакованні без акумулятора та зарядного пристрою. Тришвидкісний гайковерт працює з шурупами діаметром М10-М24. Опис ударного гайковерта Bosch GDS 18V-1050 H Professional: Гайковерт ударний Bosch GDS 18V-1050 H Professional застосовується у різних виробничих сферах: при проведенні електрики, монтажі трубопроводів, шиномантажі тощо. Компактний розмір (240x221x86 мм) дозволяє комфортно працювати у важкодоступних місцях. Три швидкості забезпечують універсальність пристрою. Гайковерт можливо легко та швидко поставити на лісах, сходах (завдяки його компактності, легкості, практичному дизайну). Технічні особливості ударного гайковерта Bosch GDS 18V-1050 H Professional: Працює від літій-іонного акумулятора потужністю 18 В. Швидкість обертів — 0-800 об/хв., 0-1200 об/хв., 0-1750 об/хв. Частота ударів — 0-1600 уд/хв., 0-2400 уд/хв., 0-2600 уд/хв. Крутний момент складає 0-350 Нм, 0-750 Нм, 0-1050 Нм. Ці показники дозволяють довго працювати інструментом і справлятись із різними завданнями. За допомогою індикатора можливо контролювати стан пристрою: зелений вказує на задовільний стан, жовтий — пристрій підходить до критичного стану, червоний — інструмент чи акумулятор перегріті. Також індикатор повідомляє про обраний швидкісний режим. Панель управління має 2 кнопки — вибору швидкості та вкл/викл. ліхтарика. Патрон — квадрат ¾ із фрикційним кільцем.',
            price: '11 999₴',
            images: ['1.10.jpg']
        },
        {
            name: 'Гайковерт високомоментний акумуляторний MILWAUKEE 1/2" M18 FHIW2F12-502X, 2034Нм',
            description: 'Гайкокрут акумуляторний 1/2" MILWAUKEE, M18 FHIW2F12-502X, 2034Нм, (+2 акумулятори, зарядний пристрій M18 FHIW2F12-502X Ударний гайковерт з високим крутним моментом, з\'єднання 1/2 дюйма, Мілуокі 4933492783 Велика потужність: ударний гайковерт з високим моментом, що крутить, M18 FUEL™ забезпечує момент затягування 1491 Нм і момент відгвинчування 2034 Нм у дійсно компактному інструменті довжиною всього 193 мм. 2000 об/хв на неодруженому ходу, це на 35% вище, ніж у попереднього покоління. Система, що захищає акумулятор від сильних вібрацій Дуже міцний корпус, що гарантує високу міцність. Три світлодіоди, розташовані попереду, гарантують відмінне освітлення робочої зони. 4 режими DRIVE CONTROL дозволяють швидко вибирати різні швидкості та моменти затягування. Четвертий режим «викручування болта» забезпечує максимальний момент, що крутить, при відкручуванні, а потім знижується до 750 об/хв, не допускаючи втрати контролю над болтом. Технологія FUEL™ змінює уявлення про бездротові електроінструменти. Безщітковий двигун, електроніка REDLINK PLUS™ та акумуляторна батарея REDLITHIUM™ забезпечують чудову продуктивність та довговічність. Працює з усіма акумуляторами M18™ MILWAUKEE®.',
            price: '27 449₴',
            images: ['1.11(2).jpg', '1.11(3).jpg', '1.11(1).jpg']
        },
        {
            name: 'Акумуляторна болгарка Bosch GWS 180 LI 1 АКБ',
            description: 'Акумуляторна болгарка Bosch GWS 180 LI за своєю потужністю, порівнянна з 700 Вт мережевою болгаркою. Поставляється з одним акумулятором GBA 18V 4.0Ah та зарядним пристроєм. Ключові особливості Bosch GWS 180 LI Продуктивний безщітковий двигун, який не потребує обслуговування. Захист від повторного увімкнення. Висока потужність, дозволяє виконувати роботи як по різанні, так і шліфування різних матеріалів. Повітрозабірники обладнані фільтром від абразивного пилу. Акумуляторна болгарка Bosch GWS 180 LI має невеликий діаметр обхвату корпусу для максимальної зручності в роботі. Швидка зміна дисків завдяки кнопці фіксації шпинделя. Регулювання захисного кожуха не вимагає застосування додаткового інструменту. 2-х позиційна передня рукоятка. Світлодіодний індикатор заряджання акумулятора. Протиковзні та антивібраційні накладки SOFT GRIP. Комплектація Bosch GWS 180 LI 1 АКБ акумулятор GBA 18V 4.0Ah (1600A001CH) зарядний пристрій GAL 18V-40 Professional (1600A019RJ) фланець (1 605 703 099) затискна гайка (1 603 340 040) ключ (1 607 950 043) захисний кожух (2 608 000 678) додаткова рукоятка (1 602 025 024) пластиковий кейс. Основні особливості Порівняна з мережевим інструментом потужністю 700 Вт. Може використовуватися з усіма профі акумуляторами бош 18 В. Безщітковий двигун, що не потребує обслуговування. Система захисту акумулятора від перевантаження. Тонка рельєфна рукоятка. Відмінна збалансованість інструменту. Компактна конструкція та невелика вага.',
            price: '8 499₴',
            images: ['1.12.jpg']
        },
        {
            name: 'Акумуляторна кутова шліфмашина Makita DGA 504 Z',
            description: 'Кутова шліфувальна машина Makita DGA504Z - це компактна акумуляторна болгарка, ергономічна форма якої дозволяє працювати однією рукою. Електронна система обмеження струму з сигнальною лампою дозволяє безперервно користуватися болгаркою з одночасним контролем навантаження двигуна. Система блокування з сигнальною лампою запобігає запуску болгарки Makita DGA504Z під час підключення акумуляторної батареї та вмикає її, якщо заряд батареї не досяг певного показника. У комплект поставки, крім болгарки Makita DGA504Z, входить також захисний кожух, бічна ручка, гайка затискна, опорна шайба, торцевий ключ і шліфувальний диск. Зверніть увагу, що валіза для транспортування, акумулятор і зарядний пристрій не входять. Переваги для користувача: Безщітковий двигун постійного струму створює менше теплоутворення та ідеально підходить для тривалого використання. Ергономічна м\'яка гумова ручка особливого дизайну для поглинання вібрації та комфортної роботи. Електронний обмежувач струму захищає двигун від випадкових навантажень. Висока продуктивність та ефективність для важких шліфувальних робіт. Функція плавного пуску поступово збільшує швидкість, щоб унеможливити навантаження під час запуску. Функція автоматичного контролю швидкості регулює оберти в залежності від стану навантаження, що дозволяє швидко вибирати між високою швидкістю і високим моментом, що крутить. Індикатор розряджання акумулятора. Екстремальна технологія захисту (XPT) пропонує максимальний захист від пилу, сміття та рідин для оптимальної роботи в екстремальних умовах. Функція антиперезапуску запобігає випадковому запуску інструмента під час заміни акумулятора, коли вимикач блокується в положенні “увімкнено”. Система захисту акумулятора захищає від надмірного розряду, перегріву та замикання для підвищення продуктивності, збільшення циклу роботи та загального терміну служби акумулятора. Вбудований пиловий екран виступає як додатковий захист від пилу, бруду та сміття. Індикатор розряджання акумулятора. Повзунковий вимикач.',
            price: '7 399₴',
            images: ['1.13(1).jpg', '1.13(2).jpg']
        },
        {
            name: 'Професійний акумуляторний перфоратор Makita DHR243RTJ',
            description: 'Акумуляторний перфоратор Makita DHR243RTJ – це професійний інструмент для свердління у стінах та заготовках, свердління з ударом та довбання. Застосовується в масштабних та тривалих будівельних роботах, а також у побутових умовах та завдяки високій потужності двигуна, якість виконуваних робіт знаходиться на високому рівні. Особливості акумуляторного перфоратора Makita DHR243RTJ: Безщітковий мотор, що не потребує обслуговування; 3 режими роботи: свердління, свердління з ударом і довбання; Додатковий затискний патрон для швидкої зміни біти; Унікальна конструкція із гумовими вставками оберігає клеми акумулятора від вібрацій; Довга напрямна біти зводить коливання до мінімуму; Механізм регулювання кута забезпечує поворот долота на 360 градусів із 40 положеннями установки; Можливість підключення вузла видалення пилу. Комплект поставки: Акумуляторний перфоратор Makita DHR243RTJ; Швидкозатискний патрон; Патрон SDS+; Зарядний пристрій DC18RC; Акумулятори 5.0 Аг х 2 шт; Пластиковий кейс; Інструкція з експлуатації; Гарантійний талон.',
            price: '24 999₴',
            images: ['1.14(1).jpg', '1.14(2).jpg']
        },
        {
            name: 'Перфоратор акумуляторний безщітковий SDS-Plus DeWALT DCH133M1',
            description: 'Особливості DCH133M1 Блокування обертання для легких довбальних робіт в цеглі, бетоні і кам’яній кладці. Високопродуктивний безщітковий двигун. Ідеально підходить для свердління отворів під анкери та просвердлювання отворів діаметром 4-26 мм в бетоні, камені і цегляній кладці. Компактний, легкий і ергономічний дизайн підвищує комфорт і простоту використання. Технічні характеристики DCH133M1 Виробник DeWALT Країна-виробник Китай З’ємний патрон немає Тип двигуна Безщітковий Напруга акумулятора, В 18 Ємність аккумулятору, Аг 4 Джерело живлення акумуляторне Тип акумулятора Li-Ion Тип патрона SDS-Plus Частота ударів, уд/хв 5500 Частота обертання, об/хв 1500 Максимальна енергія удару (EPTA 05/2009), Дж 2.6 Кількість режимів роботи 3 Вага, кг 2.27 Комплектація Акумулятор (4 Аг) - 1 шт Зарядний пристрій - 1 шт Валіза - 1 шт',
            price: '16 999₴',
            images: ['1.15(1).jpg', '1.15(2).jpg']
        },
        {
            name: 'Акумуляторний промисловий фен DeWALT DCE530N',
            description: 'Особливості DCE530N 2 температурних режими для роботи з різними матеріалами. Вимикач із захистом від ненавмисного пуску. LED підсвічування. Бічні вентиляційні отвори для зниження ризику перегріву при установці інструменту на задню частину. Можливість фіксації вимикача у включеному положенні. Елемент системи XR 18 В, в т.ч. сумісний з батареями FLEXVOLT. Технічні характеристики DCE530N Виробник DeWALT Країна-виробник Китай Тип двигуна Безщітковий Напруга акумулятора, В 18 Джерело живлення акумуляторне Тип акумулятора Li-Ion Максимальна температура, град 530 Мінімальна температура, град 290 Повітряний потік, л/хв 190 Плавне регулювання температури немає Вага, кг 0.5 Комплектація Пістолет гарячого повітря акумуляторний - 1 шт Насадка ″риб’ячий хвіст″ - 1 шт Насадка-концентратор - 1 шт Без акумулятора і зарядного пристрою',
            price: '7 399₴',
            images: ['1.16.jpg']
        },
        {
            name: 'Потужний гайковерт ударний акумуляторний PROFI-TEC DTW1001BL POWERLine',
            description: 'Акумуляторний гайковерт PROFI-TEC DTW1001BL - це універсальний інструмент, призначений для проведення монтажних та демонтажних робіт За допомогою такого інструменту Ви легко зможете закручувати або розкручувати різні кріпильні з\'єднання на різьбовій основі. Такий інструмент відмінно підходить для тих, кому необхідно проводити різноманітні будівельні та ремонтні роботи. Акумуляторний гайковерт PROFI-TEC DTW-1001BL можна використовувати як на побутовому рівні, так і на вищих рівнях. Особливості акумуляторного гайковерта PROFI-TEC DTW1001BL: Надійний та довговічний безщітковий двигун, що не потребує обслуговування; Високоміцний корпус підвищує експлуатаційний період та витривалість пристрою; Надійний ударний механізм; Ергономічна форма та продуманий дизайн сприяють комфортній експлуатації; Високий момент, що крутить, і оптимальна сила удару забезпечують чудову продуктивність; Світлодіодне підсвічування робочої зони; Два Li-Ion акумулятори розраховані на подвійне число циклів підзарядки та тривале функціонування; Уся лінійка інструментів PROFI-TEC POWERLine сумісна та працює від батарей MAKITA LXT. Комплект поставки: Акумуляторний гайковерт PROFI-TEC DTW1001BL; Зарядний пристрій; Акумулятори 6.0 Aч - 2 шт.; Адаптер; Транспортувальний ремінь; Пластиковий кейс; Інструкція з експлуатації; Гарантійний талон.',
            price: '9 999₴',
            images: ['1.17(3).jpg', '1.17(2).jpg','1.17(1).jpg']
        },
        {
            name: 'Потужний акумуляторний ударний дриль-шурупокрут Bosch Professional GSB 185-LI із 2 акб GBA 18V 2.0Ah, з/п GAL 18V-20 у кейсі',
            description: 'Ударний дриль-шурупокрут Bosch GSB 185-LI Professional живиться від літій-іонного акумулятора 18 В. Оснащений безщітковим двигуном, 2-швидкісним редуктором (0-500 і 0-1900 об/хв), ударним механізмом (0-27000 уд/хв). Ефективно свердлить отвори у деревині (35 мм) і металі (10 мм), закручує кріплення і бурить. Обертальний момент регулюється 20 положеннями, максимальне значення 50 Нм. Важить інструмент без акумулятора близько 1 кг. Йде у комплекті з кейсом, 2 батареями (по 2 Ач), зарядним пристроєм. 2-швидкісний інструмент (18 В) із 20 положеннями моменту сили, ударною функцією. Опис акумуляторного ударного дриля-шурупокрута Bosch Professional GSB 185-LI: Акумуляторний інструмент високої потужності (18 В) незмінний на будівельному майданчику, у домашній майстерні й інших об\'єктах. Його легка вага і компактні розміри дають змогу працювати у місцях зі складним доступом, збираючи конструкції з гіпсокартону, панельні меблі тощо. Високу продуктивність роботи забезпечує безщітковий двигун. Він потребує мінімального техобслуговування, розрахований на тривалий термін експлуатації. Залежно від крутного моменту (до 50 Нм), обраного кількості обертів і ввімкнення чи вимкнення ударної функції електроінструмент показує максимальний результат. Металевий патрон дає змогу витримувати високі навантаження. На корпусі розміщений світловий індикатор, який сповіщає про стан пристрою. Для безперебійної роботи з шурупокрутом йдуть 2 батареї ємністю по 2 Агод, зарядний пристрій. Переміщати Bosch GSB 185-LI, комплекти акумуляторів, біт та іншого оснащення можна у місткому кейсі (йде у комплекті). Виконаний він із пластика стійкого до механічних пошкоджень.',
            price: '7 299₴',
            images: ['1.18(1).jpg', '1.18(2).jpg']
        },
        {
            name: 'Професійна акумуляторна дриль-шурупокрут Milwaukee M18 CBLDD-0',
            description: 'Milwaukee M18 CBLDD-0 - дриль-шуруповерт із акумуляторним джерелом живлення. Інструмент автономний, тому підходить для будь-яких умов експлуатації. Він оснащений безщітковим двигуном, що споживає менше енергії. Завдяки економії енергозапасу час роботи на одному заряді збільшено. Якщо є необхідність у безперервному робочому процесі, необхідно запастися ще одним АКБ. Особливості та переваги моделі M18 CBLDD-0 (4933464316): свердління, вкручування та викручування шурупів однаково продуктивні, безпечні та точні за рахунок двошвидкісного редуктора; безключова зміна насадок зумовлена швидкозатискним патроном; гумова рукоятка не вислизає з долоні; вбудований світлодіод покращує видимість при поганому висвітленні; кнопки керування зручно розміщені для вибору режиму без відриву від діяльності; перфорація в корпусі сприяє відтоку тепла від робочого механізму, що запобігає перегріву; низький рівень шуму – комфорт оператора; інструмент мало важить і викликає втоми при тривалих маніпуляціях. Технічні характеристики Milwaukee M18 CBLDD-0 (4933464316) Робочі параметри Режими роботи безударний Кількість швидкостей 2 Максимальний діаметр свердління в стали 13 мм Максимальний діаметр свердління в дереві 52 мм Максимальний діаметр патрона 13 мм Максимальні обороти 1800 об/хв 500 об/хв Максимальний крутний момент 60 Нм Характеристики двигуна і пристрою Тип двигуна безщітковий Живлення акумуляторний Характеристики акумулятора Тип акумулятора Li-Ion Напруга акумулятора 18 В Кількість акумуляторів немає в комплекті Як встановити акумулятор слайдер Конструктивні та функціональні особливості Тип патрона швидкозажимний Підсвічування робочої зони з підсвіткою Функція реверсу з реверсом Регулювання крутного моменту муфта Додаткова інформація Тип товару шуруповерти Вид дриль-шуруповерти Габарити 248х198х90 мм Гарантія 36 місяців Вага 1.5 кг Вид інструменту шурупокрути Тип пристрою дрилі Конструкція пістолетного типу Число ступенів крутного моменту 18 Клас професійний Комплектація картонна коробка Країна походження США/Німеччина Комплектація - акумуляторний дриль-шуруповерт; - картонна коробка; - Інструкція з експлуатації; - гарантійний талон; *акумулятор і зарядний пристрій не входять до комплекту постачання',
            price: '5 499₴',
            images: ['1.19(1).jpg', '1.19(2).jpg']
        },
        {
            name: 'Професійний зарядний пристрій + 3 шт АКБ 18V 5Аг DeWALT DCB1104P3',
            description: 'Особливості DCB1104P3 Заряджає батареї: 10.8, 12, 18, 54 В XR Li-Ion. Струм зарядки: 4 А. Заряджає акумулятор DCB183 2 Аг до 80% ємності менш ніж за 30 хвилин. Діагностика зі світлодіодною індикацією. Новий індикатор стану заряду показує, коли акумулятор заряджений на 80%, і окремий індикатор показує заряд понад 80%. У комплекті з 3 акумуляторами 18В XR Li-Ion 5 Аг (DCB184). Технічні характеристики DCB1104P3 Виробник DeWALT Країна-виробник Китай Тип акумуляторів, що заряджаються Li-Ion Струм зарядки, А 4 Напруга максимальна, В 54 Напруга мінімальна, В 10.8 Час зарядки, хв 75 хв. / 18 В XR Li-Ion Li-Ion 5 Аг (DCB184) Світлова індикація є Вага, кг 0.5 Комплектація Зарядний пристрій – 1 шт. Акумулятори 18В XR Li-Ion 5 Аг (DCB184) – 3 шт.',
            price: '14 999₴',
            images: ['1.20.jpg']
        },
        {
            name: 'Швидкозарядний пристрій Makita DC18RC - 18B',
            description: 'Швидкозарядний пристрій Makita DC18RC (195584-2): переваги Призначена для заряджання Li-Ion акумуляторів Час заряджання акумулятора ємністю 4,0 Ач всього 36 хвилин Підходить для акумуляторів серії LXT. Швидкозарядний пристрій Makita DC18RC (195584-2): технічні характеристики Напруга акумулятора 7,2 - 18 В Тип акумулятора Li-Ion Напруга 230 В Вихід 7,2-18В --- 9А Час заряджання акумулятора BL1815 15 хвилин Час заряджання акумулятора BL1820 24 хвилини Час заряджання акумулятора BL1830B 22 хвилини Час заряджання акумулятора BL1840B 36 хвилин Час заряджання акумулятора BL1850B 45 хвилин Час заряджання акумулятора BL1860B 55 хвилин. Швидкозарядний пристрій Makita DC18RC (195584-2): комплект поставки Поставляється без акумулятора',
            price: '2 499₴',
            images: ['1.21(2).jpg', '1.21(1).jpg']
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