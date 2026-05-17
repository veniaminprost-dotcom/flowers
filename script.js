document.documentElement.classList.add("reveal-ready");

const bouquets = [
  ["bouquet-01.jpg", "Пионовое облако", "от 4 900 ₽"],
  ["bouquet-02.jpg", "Нежный рассвет", "от 3 700 ₽"],
  ["bouquet-03.jpg", "Садовая акварель", "от 5 200 ₽"],
  ["bouquet-04.jpg", "Blush Muse", "от 4 400 ₽"],
  ["bouquet-05.jpg", "Сливочная роза", "от 3 900 ₽"],
  ["bouquet-06.jpg", "Тихая нежность", "от 4 100 ₽"],
  ["bouquet-07.jpg", "Свадебный шепот", "от 6 800 ₽"],
  ["bouquet-08.jpg", "Астра в пудре", "от 4 600 ₽"],
  ["bouquet-09.jpg", "Персиковый день", "от 3 800 ₽"],
  ["bouquet-10.jpg", "Молочный букет", "от 4 300 ₽"],
  ["bouquet-11.jpg", "Sage Romance", "от 5 500 ₽"],
  ["bouquet-12.jpg", "Для нее", "от 3 500 ₽"],
  ["bouquet-13.jpg", "Воздушная классика", "от 4 900 ₽"],
  ["bouquet-14.jpg", "Мягкий комплимент", "от 3 300 ₽"],
  ["bouquet-15.jpg", "Белый сад", "от 5 900 ₽"],
  ["bouquet-16.jpg", "Пудровый вечер", "от 4 700 ₽"],
  ["bouquet-17.jpg", "Летняя встреча", "от 3 900 ₽"],
  ["bouquet-18.jpg", "Astra Signature", "от 6 200 ₽"],
];

const grid = document.querySelector("#bouquetGrid");
const phone = "77777777777";

if (grid) {
  grid.innerHTML = bouquets
    .map(([image, title, price], index) => {
      const message = encodeURIComponent(`Hello, I want to order ${title}`);

      return `
        <article class="bouquet-card reveal" style="transition-delay: ${Math.min(index * 35, 260)}ms">
          <div class="bouquet-card__media">
            <img src="images/bouquets/${image}" alt="${title}" loading="lazy">
          </div>
          <div class="bouquet-card__body">
            <h3>${title}</h3>
            <p class="bouquet-card__price">${price}</p>
            <a class="bouquet-card__button" href="https://wa.me/${phone}?text=${message}" target="_blank" rel="noreferrer">
              Заказать
            </a>
          </div>
        </article>
      `;
    })
    .join("");
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px" },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}, 900);
