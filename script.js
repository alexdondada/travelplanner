const translations = {
  el: {
    nav_about: "Γιατί Εμάς",
    nav_gallery: "Εμπειρίες",
    nav_how: "Πώς Λειτουργεί",
    nav_trips: "Πακέτα Ταξιδιών",
    nav_cta: "Σχεδιάστε το Ταξίδι",
    hero_badge: "Εξατομικευμένος Σχεδιασμός Ταξιδιών",
    hero_title: "Ανεπαναληπτα Ταξιδια.<br>Χωρις Αγχος Προγραμματισμου.",
    hero_sub: "Αναλαμβάνουμε τα πάντα — από ξενοδοχεία και ιδιωτικές μεταφορές μέχρι μοναδικές δραστηριότητες. Εσείς απλά ετοιμάστε τις αποσκευές σας.",
    hero_btn1: "Ξεκινήστε Τώρα",
    hero_btn2: "Δείτε Ταξίδια",
    about_title: "Ταξιδέψτε Χωρίς Ταπεινώσεις & Αβεβαιότητα",
    about_sub: "Γλιτώστε δεκάδες ώρες αναζήτησης. Σχεδιάζουμε το ταξίδι ακριβώς στα μέτρα και στον προϋπολογισμό σας.",
    gallery_title: "Στιγμιότυπα Από Τους Ταξιδιώτες Μας",
    gallery_sub: "Αυθεντικές στιγμές από μοναδικούς προορισμούς σε όλο τον κόσμο.",
    trips_title: "Δημοφιλή Πακέτα & Προτάσεις",
    trips_sub: "Ενδεικτικές τελικές τιμές ανά άτομο με διαθέσιμες ημερομηνίες αναχώρησης.",
    trip_btn: "Εκδήλωση Ενδιαφέροντος",
    more_trips_btn: "Δείτε Περισσότερα Ταξίδια",
    reviews_title: "Εμπειρίες Ταξιδιωτών Μας",
    form_title: "Έτοιμοι Για Το Επόμενο Ταξίδι;"
  },
  en: {
    nav_about: "Why Us",
    nav_gallery: "Experiences",
    nav_how: "How It Works",
    nav_trips: "Trip Packages",
    nav_cta: "Plan My Trip",
    hero_badge: "Tailored Travel Planning",
    hero_title: "Unforgettable Trips.<br>Zero Planning Stress.",
    hero_sub: "We manage everything — from curated hotels and private transfers to unique activities. You just pack and go.",
    hero_btn1: "Start Planning",
    hero_btn2: "Explore Packages",
    about_title: "Travel Without the Hassle",
    about_sub: "Save dozens of hours of searching. We design your journey tailored strictly to your pace and budget.",
    gallery_title: "Moments Captured By Our Travelers",
    gallery_sub: "Authentic moments captured in stunning destinations around the world.",
    trips_title: "Featured Packages & Ideas",
    trips_sub: "Estimated total pricing per person with available departure dates.",
    trip_btn: "Inquire Now",
    more_trips_btn: "Explore More Trips",
    reviews_title: "Real Traveler Stories",
    form_title: "Ready For Your Next Journey?"
  },
  ru: {
    nav_about: "Почему мы",
    nav_gallery: "Впечатления",
    nav_how: "Как это работает",
    nav_trips: "Пакеты туров",
    nav_cta: "Спланировать тур",
    hero_badge: "Индивидуальный дизайн путешествий",
    hero_title: "Незабываемые поездки.<br>Без стресса и хлопот.",
    hero_sub: "Мы берем на себя всё: от отелей и трансферов до уникальных экскурсий. Вам остается только собрать чемодан.",
    hero_btn1: "Начать планирование",
    hero_btn2: "Смотреть туры",
    about_title: "Путешествуйте без хлопот",
    about_sub: "Сэкономьте десятки часов поиска. Мы создадим маршрут под ваш темп и бюджет.",
    gallery_title: "Моменты от наших путешественников",
    gallery_sub: "Подлинные моменты из потрясающих уголков мира.",
    trips_title: "Популярные пакеты и идеи",
    trips_sub: "Ориентировочная стоимость на человека с доступными датами.",
    trip_btn: "Запросить тур",
    more_trips_btn: "Посмотреть еще туры",
    reviews_title: "Отзывы путешественников",
    form_title: "Готовы к новому путешествию?"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll handler for anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Contact form submission
  const form = document.getElementById("trip-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      formMessage.style.color = "#16a34a";
      formMessage.textContent = `Ευχαριστούμε ${name}! Λάβαμε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.`;
      form.reset();
    });
  }
});    reviews_title: "Real Traveler Stories",
    form_title: "Ready For Your Next Journey?"
  },
  ru: {
    nav_about: "Почему мы",
    nav_gallery: "Впечатления",
    nav_how: "Как это работает",
    nav_trips: "Пакеты туров",
    nav_cta: "Спланировать тур",
    hero_badge: "Индивидуальный дизайн путешествий",
    hero_title: "Незабываемые поездки.<br>Без стресса и хлопот.",
    hero_sub: "Мы берем на себя всё: от отелей и трансферов до уникальных экскурсий. Вам остается только собрать чемодан.",
    hero_btn1: "Начать планирование",
    hero_btn2: "Смотреть туры",
    about_title: "Путешествуйте без хлопот",
    about_sub: "Сэкономьте десятки часов поиска. Мы создадим маршрут под ваш темп и бюджет.",
    gallery_title: "Моменты от наших путешественников",
    gallery_sub: "От водопадов и сафари до Северного сияния — живите яркими моментами.",
    trip_btn: "Запросить тур",
    reviews_title: "Отзывы путешественников",
    form_title: "Готовы к новому путешествию?"
  }
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trip-form");
  const formMessage = document.getElementById("form-message");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      formMessage.style.color = "#16a34a";
      formMessage.textContent = `Ευχαριστούμε ${name}! Λάβαμε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.`;
      form.reset();
    });
  }
});
