import React from "react";
import RouterLink from "../common/RouterLink";
import routes from "../../config/routes";

const HomePage = () => (
    <div>
        <RouterLink to={routes.SIGN_IN.path}>
            Авторизиция
        </RouterLink>

        <hr/>

        <RouterLink to={routes.SIGN_UP.path}>
            Регистрация
        </RouterLink>
    </div>
);

export default HomePage;