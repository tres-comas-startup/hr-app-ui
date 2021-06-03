import SignInPage from "../components/pages/SignInPage";
import SignUpPage from "../components/pages/SignUpPage";
import ResetPasswordPage from "../components/pages/ResetPasswordPage";
import HomePage from "../components/pages/HomePage";

const routes = Object.freeze({
    HOME: {
        path: '/',
        component: HomePage,
        isPrivate: false
    },

    SIGN_IN: {
        path: '/signIn',
        component: SignInPage,
        isPrivate: false
    },

    SIGN_UP: {
        path: '/signUp',
        component: SignUpPage,
        isPrivate: false
    },

    RESET_PASSWORD: {
        path: '/resetPassword',
        component: ResetPasswordPage,
        isPrivate: true
    },

    SETTINGS: {
        path: '/settings'
    }
});

export default routes;