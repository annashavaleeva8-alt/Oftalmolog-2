const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("site-nav");
const appointmentForm = document.getElementById("appointment-form");
const formStatus = document.getElementById("form-status");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

if (appointmentForm && formStatus) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(appointmentForm);
    const age = Number(formData.get("age"));

    if (!Number.isInteger(age) || age < 0 || age > 100) {
      formStatus.textContent = "Пожалуйста, укажите корректный возраст от 0 до 100 лет.";
      formStatus.style.color = "#b22222";
      return;
    }

    formStatus.textContent =
      "Спасибо! Заявка отправлена. Администратор свяжется с вами в ближайшее время.";
    formStatus.style.color = "#1d7f52";
    appointmentForm.reset();
  });
}

// FAQ accordion: открываем/закрываем ответ по клику на вопрос
const faqItems = document.querySelectorAll(".faq-item");
if (faqItems.length) {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((q) => {
    q.style.userSelect = "none";
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      if (!item) return;

      const isActive = item.classList.contains("active");
      // Закрываем другие ответы, чтобы открывался один вопрос за раз
      faqItems.forEach((it) => it.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}
