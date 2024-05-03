import LoginPage from "../pages/LoginPage/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
    // props: (route) => ({ query: route.query.error }),
    name: "Login",
  },
];

export default routes;
