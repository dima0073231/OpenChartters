
function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.classList.toggle('active');
}
function toggleCart() {
  document.getElementById('cartModal').classList.toggle('active');
}

function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

const cartProducts = [];
let discount = 0;

function toggleCart() {
  document.getElementById('cartModal').classList.toggle('active');
}


function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}

function addToCart(productName, price) {
  cartProducts.push({ name: productName, price });
  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  let total = 0;

  cartProducts.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${item.name} - €${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  const discountedTotal = total - discount;
  document.getElementById("total-amount").textContent = `€ ${discountedTotal.toFixed(2)}`;
  document.getElementById('cartModal').classList.add('active');
}

function applyPromo() {
  const promoCode = document.getElementById("promo-input").value.trim().toLowerCase();
  const promoMessage = document.getElementById("promo-message");
  if (promoCode === "save10") {
    discount = 10;
    promoMessage.textContent = "Promo code applied: €10 off!";
  } else {
    discount = 0;
    promoMessage.textContent = "Invalid promo code.";
    promoMessage.style.color = "red";
  }
  updateCartUI();
}
const translations = {
  en: {
    service: "Service",
    faq: "FAQ",
    blog: "Blog",
    about: "About us",
    account: "My account",
    main_heading: "Get access to top tools — quickly and affordably!",
    main_description: "OpenChatters is your easy way to subscribe to popular online services like ChatGPT, Midjourney, TGStat, Canva, AdSpy and more. Try before buying, choose a convenient plan and start using today!",
    choose_service: "Choose your service",
    choose_instuments: "Choose your creative tool",
    price: "Price",
    basket: "Add to cart",
    stepsh1:"Get Started with OpenChatters in 3 Easy Steps",
    stepsp:"Connecting your tools is quick and easy!",
    stepsh2:"Choose your services",
    stepspp:"Browse available services — ChatGPT, Midjourney, TGStat, Canva, AdSpy, and more — and add what you need to the cart.",
    stepsh22:"Go to the cart",
    stepsppp:"In the cart, select: trial subscription or monthly plan — no commitments.",
    stepsh222:"Pay in a convenient way",
    stepspppp:"Complete your payment. Access will be activated automatically right after payment.",
    who: "Who We Are",
    whop: "OpenChatters gives you instant access to the world’s top digital tools:ChatGPT, Midjourney, TGStat, Canva, AdSpy, and more. What We Offer: ✅ Flexible subscriptions  ✅ Trial versions  ✅ Fast activation Our Mission: To make digital tools easy and affordable for everyone.",
  promote:"Why Choose OpenChatters",
  promoteh3:"Reliable Access",
  promoteh33:"Flexible Pricing",
  promoteh333:"Refund Guarantee",
  promoteh3333:"Fast Activation",
  promoteh33333:"24/7 Support",
  promoteh333333:"Secure Payments",
  promotepp:"We provide fast and guaranteed access to ChatGPT, Midjourney, TGStat, Canva, AdSpy, and more — after your payment.",
  promoteppp:"Choose a trial from $1 or go with a full month subscription. No contracts, no commitment.",
  promotepppp:"Didn’t get access on time? We'll refund your money — hassle-free.", 
  promoteppppp:"Our system activates your access in just a few minutes — no waiting.",
  promotepppppp:"Our team is online 24/7 — available in English, Ukrainian, and Russian.",
  promoteppppppp:"We use trusted, protected payment systems. Your data and funds are safe.",
footer:"FOP Knysh Alla Oleksandrivna 08297 Kyiv region, Bucha district, Bucha city, Shose Nove, building 42",
footerh3:"Payment and Returns",
  footerh33:"Privacy Policy", 
  footerh333:"Terms of Use", 
  footerh3333:"About Us", 
  footerh33333:"Contacts", 
  footerp:"OpenChatters 2025 © All rights reserved",
  footera :"Back to the top",
  reviewTitle: "Your satisfaction drives us to grow!",
  alex_name: "Alex",
  alex_text: "Got instant access, exactly as promised. Thanks for the service! 👍",
  marina_name: "Marina",
  marina_text: "Signed up in one minute. Super easy and no hassle.",
  ivan_name: "Ivan",
  ivan_text: "Great prices and fast activation. Using it for the second month already. 🔥",
  daria_name: "Daria",
  daria_text: "Didn’t expect it to be that fast. Got access to Midjourney in 3 minutes!",
  sergey_name: "Sergey",
  sergey_text: "Amazing service! Everything honest, accounts working, fast support. 👌",
  julia_name: "Julia",
  julia_text: "Loved the $1 trial access option. Everything works perfectly! 😊",
  nikita_name: "Nikita",
  nikita_text: "Smooth process: paid and received access without any issues. Will recommend!",
  olga_name: "Olga",
  olga_text: "ChatGPT subscription activated instantly. Loving it. 👍",
  artem_name: "Lisa",
  artem_text: "Trial version really helped me decide before buying. Respect! 🙌",
  katerina_name: "Katerina",
  katerina_text: "Finally found a convenient platform for subscriptions. Only with you now.",
  vladimir_name: "Vladimir",
  vladimir_text: "Bought Canva access — got login details immediately. Quick and easy. 😉",
  alina_name: "Lila",
  alina_text: "Support is polite and truly helpful, not just standard replies.",
  max_name: "David",
  max_text: "Paid at night — got access within 5 minutes. You guys rock! 🚀",
  tatiana_name: "Alina",
  tatiana_text: "Instructions were clear, got access without any problems.",
  denis_name: "Svetlana",
  denis_text: "Totally worth the money! Thanks for the great work. 👏"
  
},
  ru: {
    service: "Сервис",
    faq: "FAQ",
    blog: "Блог",
    about: "О нас",
    account: "Мой аккаунт",
    main_heading: "Открой доступ к топовым инструментам — быстро и выгодно!",
    main_description: "OpenChatters — твой простой способ получить подписку на популярные онлайн-сервисы, такие как ChatGPT, Midjourney, TGStat, Canva, AdSpy и другие. Тестируй перед покупкой, выбирай удобный тариф и начинай пользоваться уже сегодня!",
    choose_service: "Выберите свой сервис",
    choose_instuments: "Выберите свой креативный инструмент",
    price: "Цена",
    basket: "Добавить в корзину",
    stepsh1:"Начни пользоваться OpenChatters в 3 шага",
    stepsp:"Подключить нужный инструмент — это быстро и просто!",
    stepsh2:"Выбери сервисы",
    stepspp:"Ознакомься с доступными сервисами — ChatGPT, Midjourney, TGStat, Canva, AdSpy и другие — и добавь их в корзину.",
    stepsh22:"Перейди в корзину",
    stepsppp:"В корзине выбери: пробный период или подписку на месяц — без обязательств.",
    stepsh222:"Оплати удобным способом",
    stepspppp:"Произведи оплату. Доступ будет активирован автоматически сразу после оплаты.",
    who: "О нас",
    whop:"OpenChatters — это платформа с быстрым доступом к самым популярным цифровым сервисам:  ChatGPT, Midjourney, TGStat, Canva, AdSpy и другие.Что мы предлагаем: ✅ Удобные подписки  ✅ Пробные версии  ✅ Моментальная активация Наша цель:Сделать цифровые инструменты доступными каждому — просто и выгодно.",
    promote:"Почему выбирают OpenChatters",
    promoteh3:"Гарантированный доступ",
    promoteh33:"Гибкие тарифы",
    promoteh333:"Гарантия возврата",
    promoteh3333:"Быстрая активация",
    promoteh33333:"Поддержка 24/7",
    promoteh333333:"Безопасная оплата",
    promotepp:"Мы предоставляем быстрый и гарантированный доступ к ChatGPT, Midjourney, TGStat, Canva, AdSpy и другим сервисам после оплаты.",
    promoteppp:"Выбирайте удобный формат: пробный период от $1 или месячная подписка — без обязательств.",
    promotepppp:"Если доступ не предоставлен вовремя — вернём деньги.", 
    promoteppppp:"Система автоматически выдаёт доступ за несколько минут.",
    promotepppppp:"На связи круглосуточно — на русском, английском и украинском языках.",
    promoteppppppp:"Используем только защищённые платёжные системы. Ваши данные в безопасности.",
   footer:"ФОП Кныш Алла Александровна 08297, Киевская обл., Бучанский р-н, г. Буча, шоссе Новое, дом 42",
   footerh3:"Оплата и возврат",
  footerh33:"Политика конфиденциальности", 
  footerh333:"Условия пользования", 
  footerh3333:"О нас", 
  footerh33333:"Контакты",
  footerp:"Все права защищены",
  footera :"Наверх", 
  reviewTitle: "Ваше удовлетворение вдохновляет нас расти!",
  alex_name: "Алексей",
  alex_text: "Быстро получил доступ, всё четко как обещали. Спасибо за сервис! 👍",
  marina_name: "Марина",
  marina_text: "Оформила подписку за минуту. Очень удобно и никаких лишних движений.",
  ivan_name: "Иван",
  ivan_text: "Отличные цены и моментальная активация. Уже пользуюсь второй месяц. 🔥",
  daria_name: "Дарья",
  daria_text: "Не ожидала, что будет так быстро. Доступ к Midjourney через 3 минуты!",
  sergey_name: "Сергей",
  sergey_text: "Супер сервис! Всё честно, доступы рабочие, поддержка отвечает за пару минут. 👌",
  julia_name: "Юлия",
  julia_text: "Очень понравилась возможность тестового доступа за 1 доллар. Всё работает! 😊",
  nikita_name: "Никита",
  nikita_text: "Всё четко: оплатил — получил доступ без проблем. Буду рекомендовать друзьям.",
  olga_name: "Ольга",
  olga_text: "Подписка на ChatGPT активировалась мгновенно. Всё нравится. 👍",
  artem_name: "Артем",
  artem_text: "Тестовая версия реально помогла определиться перед покупкой. Респект! 🙌",
  katerina_name: "Катерина",
  katerina_text: "Давно искала удобную площадку для подписок. Теперь только через вас.",
  vladimir_name: "Владимир",
  vladimir_text: "Купил доступ к Canva — сразу выдали логин. Быстро и без лишних вопросов. 😉",
  alina_name: "Алина",
  alina_text: "Поддержка очень вежливая и действительно помогает, а не кормит отговорками.",
  max_name: "Максим",
  max_text: "Заплатил ночью — доступ получил за 5 минут. Работаете круто! 🚀",
  tatiana_name: "Татьяна",
  tatiana_text: "Все инструкции были понятными, доступ получила без единой ошибки.",
  denis_name: "Денис",
  denis_text: "Сервис стоит своих денег! Спасибо за качественную работу. 👏"
  },
  uk: {
    service: "Сервіс",
    faq: "FAQ",
    blog: "Блог",
    about: "Про нас",
    account: "Мій аккаунт",
    main_heading: "Відкрий доступ до топових інструментів — швидко та вигідно!",
    main_description: "OpenChatters — твій простий спосіб отримати підписку на популярні онлайн-сервіси, такі як ChatGPT, Midjourney, TGStat, Canva, AdSpy та інші. Тестуй перед покупкою, обирай зручний тариф та починай користуватись вже сьогодні!",
    choose_service: "Виберіть свій сервіс",
    choose_instuments: "Виберіть свій креативний інструмент",
    price: "Ціна",
    basket: "Додати до кошика",
    stepsh1:"Почни користуватись OpenChatters за 3 прості кроки",
    stepsp:"Підключити потрібний інструмент — це швидко та просто!",
    stepsh2:"Обери сервіси",
    stepspp:"Переглянь доступні сервіси — ChatGPT, Midjourney, TGStat, Canva, AdSpy та інші — та додай потрібні в кошик.",
    stepsh22:"Перейди до кошика",
    stepsppp:"У кошику обери: тестовий період або підписку на місяць — без зобов'язань.",
    stepsh222:"Оплати зручним способом",
    stepspppp:"Оплати замовлення. Доступ активується автоматично одразу після оплати.",
    who: "Хто ми",
    whop: "OpenChatters — це сервіс, що відкриває швидкий доступ до топових цифрових інструментів: ChatGPT, Midjourney, TGStat, Canva, AdSpy та інші.",

    promote:"Чому обирають OpenChatters",
    promoteh3:"Гарантований доступ",
    promoteh33:"Гнучкі тарифи",
    promoteh333:"Гарантія повернення",
    promoteh3333:"Швидка активація",
    promoteh33333:"Підтримка 24/7",
    promoteh333333:"Безпечна оплата",
    promotep:"Ми забезпечуємо швидкий і гарантований доступ до ChatGPT, Midjourney, TGStat, Canva, AdSpy та інших сервісів після оплати.",
    promotepp:"Вибирайте формат: тестовий період від $1 або підписка на місяць — без зобов'язань.",
    promoteppp:"Якщо доступ не надано у зазначений час — ми повернемо гроші.", 
    promotepppp:"Автоматична система надає доступ протягом кількох хвилин.",
    promoteppppp:"Ми на зв’язку цілодобово — українською, англійською та російською.",
    promotepppppp:"Працюємо через захищені платіжні системи. Ваші гроші та дані під надійним захистом.",
    footer:" ФОП Книш Алла Олександрівна 08297, Київська обл., Бучанський р-н, м. Буча, шосе Нове, будинок 42",
    footerh3:"Оплата та повернення",
   footerh33:"Політика конфіденціальності", 
   footerh333:"Условия пользования", 
   footerh3333:"Про нас", 
   footerh33333:"Контакти", 
   footerp:"OpenChatters 2025 © Всі права захищено",
    footera :"На верх",
    reviewTitle: "Ваше задоволення спонукає нас до зростання!",
    alex_name: "Олексій",
    alex_text: "Швидко отримав доступ, все чітко як обіцяли. Дякую за сервіс! 👍",
    marina_name: "Марина",
    marina_text: "Оформила підписку за хвилину. Дуже зручно і без зайвих дій.",
    ivan_name: "Іван",
    ivan_text: "Чудові ціни і миттєва активація. Користуюсь вже другий місяць. 🔥",
    daria_name: "Дар'я",
    daria_text: "Не очікувала, що буде так швидко. Доступ до Midjourney за 3 хвилини!",
    sergey_name: "Сергій",
    sergey_text: "Супер сервіс! Все чесно, доступи працюють, підтримка відповідає за хвилини. 👌",
    julia_name: "Юлія",
    julia_text: "Дуже сподобалась можливість тестового доступу за 1 долар. Все працює! 😊",
    nikita_name: "Микита",
    nikita_text: "Все чітко: оплатив — отримав доступ без проблем. Рекомендую друзям.",
    olga_name: "Ольга",
    olga_text: "Підписка на ChatGPT активувалась миттєво. Все подобається. 👍",
    artem_name: "Артем",
    artem_text: "Тестова версія реально допомогла визначитись перед покупкою. Респект! 🙌",
    katerina_name: "Катерина",
    katerina_text: "Давно шукала таку зручну платформу для підписок. Тепер тільки через вас.",
    vladimir_name: "Володимир",
    vladimir_text: "Купив доступ до Canva — одразу отримав логін. Швидко та без зайвих питань. 😉",
    alina_name: "Аліна",
    alina_text: "Підтримка дуже ввічлива і дійсно допомагає, а не відмахується.",
    max_name: "Максим",
    max_text: "Оплатив вночі — доступ отримав за 5 хвилин. Ви круті! 🚀",
    tatiana_name: "Тетяна",
    tatiana_text: "Інструкції були зрозумілі, доступ отримала без жодної помилки.",
    denis_name: "Денис",
    denis_text: "Сервіс вартий своїх грошей! Дякую за якісну роботу. 👏"
  },
  zh: {
    service: "服务",
    faq: "常见问题",
    blog: "博客",
    about: "关于我们",
    account: "我的账户",
    main_heading: "快速实惠地访问顶级工具！",
    main_description: "OpenChatters 是您订阅流行在线服务（如 ChatGPT、Midjourney、TGStat、Canva、AdSpy 等）的简便方式。购买前可试用，选择合适的计划，今天就开始使用！",
    choose_service: "选择您的服务",
    choose_instuments: "选择您的创意工具",
    price: "价格",
    basket: "加入购物车",
    stepsh1:"三步轻松开始使用 OpenChatters",
    stepsp:"连接您需要的工具，快速又简单！",
    stepsh2:"选择服务",
    stepspp:"浏览可用服务 — ChatGPT、Midjourney、TGStat、Canva、AdSpy 等 — 并将所需服务加入购物车。",
    stepsh22:"进入购物车",
    stepsppp:"在购物车中选择：试用版或整月订阅，无任何绑定。",
    stepsh222:"选择便捷支付方式",
    stepspppp:"完成付款。支付完成后将自动激活访问权限。",
    who: "关于我们",
    whop:"OpenChatters 是一个可以**快速访问**全球**顶级数字工具**的平台：ChatGPT**、**Midjourney**、**TGStat**、**Canva**、**AdSpy 等。我们提供：  ✅ 灵活订阅  ✅ 试用版本  ✅ 即时开通服务我们的使命：让每个人都能简单、高效地使用高质量数字工具。",
    promote:"为什么选择 OpenChatters",
    promoteh3:"可靠访问",
    promoteh33:"灵活价格",
    promoteh333:"退款保障",
    promoteh3333:"快速激活",
    promoteh33333:"**全天候客服支持",
    promoteh333333:"**安全支付",
    promotepp:"我们在付款后立即提供对 ChatGPT**、**Midjourney**、**TGStat**、**Canva**、**AdSpy 等服务的**快速访问**。",
    promoteppp:"您可以选择**从 1 美元起试用**，也可以选择**整月订阅**，无需任何承诺。",
    promotepppp:"如果未能按时提供访问，**我们将全额退款**。", 
    promoteppppp:"系统将在几分钟内**自动为您开通服务，无需等待。",
    promotepppppp:"我们提供 24/7 支持**，支持**英语**、**乌克兰语**和**俄语**。",
    promoteppppppp:"我们使用**受保护的支付方式**，确保交易安全无忧。",
    footer:"FOP Knysh Alla Oleksandrivna 08297, región de Kyiv, distrito de Bucha, ciudad de Bucha, Shose Nove, edificio 42",
    footerh3:"付款與退貨",
   footerh33:"隱私權政策", 
   footerh333:"使用條款", 
   footerh3333:"關於我們", 
   footerh33333:"聯絡我們", 
    footerp:"OpenChatters 2025 © 版權所有",
      footera :"回到顶部",
  },
  es: {
    service: "Servicio",
    faq: "Preguntas frecuentes",
    blog: "Blog",
    about: "Sobre nosotros",
    account: "Mi cuenta",
    main_heading: "¡Accede a las mejores herramientas — rápido y económico!",
    main_description: "OpenChatters es tu manera sencilla de suscribirte a servicios populares en línea como ChatGPT, Midjourney, TGStat, Canva, AdSpy y más. Prueba antes de comprar, elige un plan conveniente y empieza hoy mismo.",
    choose_service: "Elige tu servicio",
    choose_instuments: "Elige tu herramienta creativa",
    price: "Precio",
    basket: "Añadir a la cesta",
    stepsh1:"Comienza con OpenChatters en 3 pasos",
    stepsp:"¡Conectar tus herramientas es rápido y sencillo!",
    stepsh2:"Elige tus servicios",
    stepspp:"Explora los servicios disponibles — ChatGPT, Midjourney, TGStat, Canva, AdSpy y más — y añádelos al carrito.",
    stepsh22:"Ve al carrito",
    stepsppp:"En el carrito, elige: suscripción de prueba o plan mensual — sin compromiso.",
    stepsh222:"Paga de forma cómoda",
    stepspppp:"Realiza el pago. El acceso se activará automáticamente tras el pago.",
    who:"Quiénes somos",
    whop:"OpenChatters te da acceso inmediato a herramientas digitales de primera clase:  ChatGPT, Midjourney, TGStat, Canva, AdSpy, entre otras.Qué ofrecemos:  ✅ Suscripciones flexibles  ✅ Prueba gratuita  ✅ Activación rápidaNuestra misión: Hacer que las herramientas digitales estén al alcance de todos — de forma simple y económica.",
    promote:"Por qué elegir OpenChatters",
    promoteh3:"Acceso garantizado",
    promoteh33:"Precios flexibles",
    promoteh333:"Garantía de reembolso",
    promoteh3333:"Activación rápida",
    promoteh33333:"Soporte 24/7",
    promoteh333333:"Pagos seguros",
    promotepp:"Ofrecemos acceso rápido y confiable a ChatGPT, Midjourney, TGStat, Canva, AdSpy y más después del pago.",
    promoteppp:"Elige desde $1 para probar o suscríbete por un mes completo. Sin contratos ni compromisos.",
    promotepppp:"¿No recibiste el acceso a tiempo? Te devolvemos el dinero sin complicaciones.", 
    promoteppppp:"El acceso se activa automáticamente en pocos minutos.",
    promotepppppp:"Nuestro equipo está disponible todo el día, en inglés, ucraniano y ruso.",
    promoteppppppp:"Usamos sistemas de pago protegidos. Tus datos y dinero están seguros.",
    footer:"FOP Knysh Alla Oleksandrivna 08297, región de Kyiv, distrito de Bucha, ciudad de Bucha, Shose Nove, edificio 42",
    footerh3:"Pagos y devoluciones",
   footerh33:"Política de privacidad", 
   footerh333:"Condiciones de uso", 
   footerh3333:"Quiénes somos", 
   footerh33333:"Contactos",
    footerp:"OpenChatters 2025 © Todos los derechos reservados",
      footera :"Volver arriba", 
      "reviewTitle": "¡Tu satisfacción nos impulsa a crecer!",
  "alex_name": "Alex",
  "alex_text": "Acceso rápido, tal como prometieron. ¡Gracias por el servicio! 👍",
  "marina_name": "Marina",
  "marina_text": "Suscripción en un minuto. Muy fácil y sin complicaciones.",
  "ivan_name": "Iván",
  "ivan_text": "Excelentes precios y activación instantánea. ¡Ya estoy en el segundo mes! 🔥",
  "daria_name": "Daria",
  "daria_text": "¡No esperaba que fuera tan rápido! Acceso a Midjourney en 3 minutos.",
  "sergey_name": "Sergio",
  "sergey_text": "¡Servicio excelente! Todo transparente, acceso funcionando, soporte rápido. 👌",
  "julia_name": "Julia",
  "julia_text": "Me encantó la opción de prueba por 1 dólar. ¡Todo funciona perfecto! 😊",
  "nikita_name": "Nikita",
  "nikita_text": "Proceso sencillo: pagué y recibí acceso sin problemas. ¡Recomiendo!",
  "olga_name": "Olga",
  "olga_text": "La suscripción a ChatGPT se activó al instante. Muy satisfecha. 👍",
  "artem_name": "Artem",
  "artem_text": "La prueba gratuita me ayudó a decidir antes de comprar. ¡Respeto! 🙌",
  "katerina_name": "Katerina",
  "katerina_text": "Finalmente encontré una plataforma cómoda para suscripciones. ¡Ahora solo con ustedes!",
  "vladimir_name": "Vladimir",
  "vladimir_text": "Compré acceso a Canva — recibí los datos de acceso de inmediato. Rápido y sencillo. 😉",
  "alina_name": "Alina",
  "alina_text": "El soporte es muy amable y realmente ayuda, no solo respuestas automáticas.",
  "max_name": "Max",
  "max_text": "Pagué de noche y recibí acceso en 5 minutos. ¡Son los mejores! 🚀",
  "tatiana_name": "Tatiana",
  "tatiana_text": "Las instrucciones fueron claras, recibí el acceso sin errores.",
  "denis_name": "Denis",
  "denis_text": "¡Vale totalmente lo que cuesta! Gracias por el excelente servicio. 👏"
  }
}

function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
function toggleCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.toggle('active');
}

document.querySelector('.checkout-btn').addEventListener('click', () => {
  toggleCheckoutModal();
});
document.querySelector('.checkout-btn').addEventListener('click', () => {
  window.location.href = 'checkout.html';
});
document.querySelector('.checkout-btn').addEventListener('click', function () {
  const title = this.dataset.title;
  const price = parseFloat(this.dataset.price);
  const quantity = parseInt(this.dataset.quantity);

  // Сохраняем в localStorage
  localStorage.setItem('orderTitle', title);
  localStorage.setItem('orderPrice', price);
  localStorage.setItem('orderQuantity', quantity);

  // Переход на страницу Checkout
  window.location.href = 'checkout.html';
});

document.addEventListener("DOMContentLoaded", function () {
  const title = localStorage.getItem('orderTitle') || 'No item';
  const price = parseFloat(localStorage.getItem('orderPrice')) || 0;
  const quantity = parseInt(localStorage.getItem('orderQuantity')) || 1;
  const total = (price * quantity).toFixed(2);

  document.querySelector('.order-item p').innerText = `${title} × ${quantity}`;
  document.querySelector('.order-item div:last-child').innerText = `€ ${price.toFixed(2)}`;
  document.querySelector('.order-summary h3').innerText = `Total: € ${total}`;
});
document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".language-switcher select");
  const options = select.options;
  for (let i = 0; i < options.length; i++) {
    const flag = options[i].getAttribute("data-flag");
    if (flag && !options[i].textContent.includes(flag)) {
      options[i].textContent += ` ${flag}`;
    }
  }
});
const select = document.getElementById("languageSelect");
const selected = select.querySelector(".selected");
const optionsContainer = select.querySelector(".options");
const options = optionsContainer.querySelectorAll("div");

selected.addEventListener("click", () => {
  optionsContainer.style.display = optionsContainer.style.display === "flex" ? "none" : "flex";
});

options.forEach(option => {
  option.addEventListener("click", () => {
    selected.innerHTML = option.innerHTML;
    optionsContainer.style.display = "none";
    const langValue = option.getAttribute("data-value");
    changeLanguage(langValue); // Ваша функція зміни мови
  });
});
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
    dots[idx].classList.remove('active');
    if (idx === index) {
      slide.classList.add('active');
      dots[idx].classList.add('active');
    }
  });
}

dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    currentSlide = idx;
    showSlide(currentSlide);
  });
});

// Автопрокрутка
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 1000, // скорость перехода (мягкая анимация)
  autoplay: {
    delay: 2500,  // задержка между автопрокруткой (2.5 секунды)
    disableOnInteraction: false, // даже если пользователь нажимает мышкой
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
    1920: { slidesPerView: 4 },
  }
});

  


