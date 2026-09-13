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
    gallery_sub: "Από καταρράκτες και σαφάρι μέχρι το Βόρειο Σέλας — ζήστε στιγμές που μένουν ανεξίτηλες.",
    trip_btn: "Εκδήλωση Ενδιαφέροντος",
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
    gallery_sub: "From wild safaris and waterfalls to the Northern Lights — experience moments that last a lifetime.",
    trip_btn: "Inquire Now",
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
