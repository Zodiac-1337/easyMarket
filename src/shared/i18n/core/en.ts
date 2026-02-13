export const vocab = {
  header: {
    searchBy: "Search by...",
    cart: "Cart",
    login: "Login",
  },

  main: {
    hello: "Hello",
  },

  footer: {
    about: {
      title: "About",
      aboutUs: "About Us",
      branches: "Our Branches",
      changelog: "Changelog",
    },

    quickLinks: {
      title: "Quick Links",
      faqs: "FAQs",
      recipes: "Recipes",
      contact: "Contact Us",
    },

    help: {
      title: "Help & Support",
      terms: "Terms of Privacy",
      privacy: "Privacy Policy",
      security: "Security",
    },

    company: {
      title: "Company",
      blog: "Blog",
      contact: "Contact",
    },

    social: {
      title: "Social",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },

    copyright: "All rights reserved. © 2026 SpectreStudio",
  },

  pageLoader: {
    loading: "Loading...",
  },

  pageError: {
    title: "Something went wrong",
    description:
      "Sorry - an unexpected error occurred. Please try refreshing the page or come back later.",
    reload: "Try again",
  },

  notFoundPage: {
    title: "Page Not Found",
    description:
      "The page you're looking for isn't available. Try to search again or use the go back button below.",
    goBack: "Go back",
  },
};

export type CoreVocab = typeof vocab;
