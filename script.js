
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
        choose_service: "Choose your service"
      },
      ru: {
        service: "Сервис",
        faq: "ЧаВо",
        blog: "Блог",
        about: "О нас",
        account: "Мой аккаунт",
        main_heading: "Открой доступ к топовым инструментам — быстро и выгодно!",
        main_description: "OpenChatters — твой простой способ получить подписку на популярные онлайн-сервисы, такие как ChatGPT, Midjourney, TGStat, Canva, AdSpy и другие. Тестируй перед покупкой, выбирай удобный тариф и начинай пользоваться уже сегодня!",
        choose_service: "Выберите свой сервис"
      },
      uk: {
        service: "Сервіс",
        faq: "FAQ",
        blog: "Блог",
        about: "Про нас",
        account: "Мій аккаунт",
        main_heading: "Відкрий доступ до топових інструментів — швидко та вигідно!",
        main_description: "OpenChatters — твій простий спосіб отримати підписку на популярні онлайн-сервіси, такі як ChatGPT, Midjourney, TGStat, Canva, AdSpy та інші. Тестуй перед покупкою, обирай зручний тариф та починай користуватись вже сьогодні!",
        choose_service: "Виберіть свій сервіс"
      },
      zh: {
        service: "服务",
        faq: "常见问题",
        blog: "博客",
        about: "关于我们",
        account: "我的账户",
        main_heading: "快速实惠地访问顶级工具！",
        main_description: "OpenChatters 是您订阅流行在线服务（如 ChatGPT、Midjourney、TGStat、Canva、AdSpy 等）的简便方式。购买前可试用，选择合适的计划，今天就开始使用！",
        choose_service: "选择您的服务"
      },
      es: {
        service: "Servicio",
        faq: "Preguntas frecuentes",
        blog: "Blog",
        about: "Sobre nosotros",
        account: "Mi cuenta",
        main_heading: "¡Accede a las mejores herramientas — rápido y económico!",
        main_description: "OpenChatters es tu manera sencilla de suscribirte a servicios populares en línea como ChatGPT, Midjourney, TGStat, Canva, AdSpy y más. Prueba antes de comprar, elige un plan conveniente y empieza hoy mismo.",
        choose_service: "Elige tu servicio"
      }
    };

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
 
    
    
