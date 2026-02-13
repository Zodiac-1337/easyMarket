import type { CoreVocab } from "./en";

export const vocab: CoreVocab = {
  header: {
    searchBy: "Найти...",
    cart: "Корзина",
    login: "Войти",
  },

  main: {
    hello: "Привет",
  },

  footer: {
    about: {
      title: "О компании",
      aboutUs: "О нас",
      branches: "Наши филиалы",
      changelog: "История изменений",
    },

    quickLinks: {
      title: "Быстрые ссылки",
      faqs: "Вопросы и ответы",
      recipes: "Рецепты",
      contact: "Связаться с нами",
    },

    help: {
      title: "Помощь и поддержка",
      terms: "Условия и конфиденциальность",
      privacy: "Политика конфиденциальности",
      security: "Безопасность",
    },

    company: {
      title: "Компания",
      blog: "Блог",
      contact: "Контакты",
    },

    social: {
      title: "Социальные сети",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },

    copyright: "Все права защищены. © 2026 SpectreStudio",
  },

  pageLoader: {
    loading: "Загрузка...",
  },

  pageError: {
    title: "Что-то пошло не так",
    description:
      "Извините — произошла непредвиденная ошибка. Попробуйте обновить страницу или зайти позже.",
    reload: "Попробовать снова",
  },

  notFoundPage: {
    title: "Страница не найдена",
    description:
      "Страница, которую вы ищете, недоступна. Попробуйте выполнить поиск снова или воспользуйтесь кнопкой «Назад» ниже.",
    goBack: "Вернуться назад",
  },
};
