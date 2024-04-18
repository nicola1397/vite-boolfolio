import { reactive } from "vue";
export const api = {
serverURI: "http://127.0.0.1:8000/api"};

export const store = reactive({
  projects:[],
  pagination:[],


  navLinks: [
    {
      label: "Front End",
      url: "#",
      active: false,
    },
    {
      label: "Back End",
      url: "#",
      active: false,
    },
    {
      label: "Full Stack",
      url: "#",
      active: false,
    },
  ],

  logo: "./src/assets/img/boolean-logo.png",


  footerLegalLinks: [
    {
      label: "Informazioni legali",
      url: "#",
    },
    {
      label: "Informativa sulla privacy",
      url: "#",
    },
    {
      label: "Diritto di recesso",
      url: "#",
    },
  ],

  footerSocialLinks: [
    {
      label: "bi bi-twitter",
      url: "#",
    },
    {
      label: "bi bi-facebook",
      url: "#",
    },
    {
      label: "bi bi-instagram",
      url: "#",
    },
    {
      label: "bi bi-linkedin",
      url: "#",
    },
    {
      label: "bi bi-youtube",
      url: "#",
    },
    {
      label: "bi bi-github",
      url: "#",
    },
  ],
});
