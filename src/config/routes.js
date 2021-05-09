import SignInPage from "../components/pages/SignInPage/SignInPage";
import SignUpPage from "../components/pages/SignUpPage/SignUpPage";
import ResetPasswordPage from "../components/pages/ResetPasswordPage/ResetPasswordPage";
import HomePage from "../components/pages/HomePage";

const routes = Object.freeze({
    HOME: {
        path: '/',
        component: HomePage
    },

    SIGN_IN: {
        path: '/signIn',
        component: SignInPage
    },

    SIGN_UP: {
        path: '/signUp',
        component: SignUpPage
    },

    RESET_PASSWORD: {
        path: '/resetPassword',
        component: ResetPasswordPage
    }
});

export default routes;