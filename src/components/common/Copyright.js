import Typography from "@material-ui/core/Typography";
import React from "react";
import {APP_NAME} from "../../constants/constants";
import RouterLink from "./RouterLink";
import routes from "../../config/routes";

const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <RouterLink color="inherit" to={routes.HOME.path}>
            {APP_NAME}
        </RouterLink>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

export default Copyright;