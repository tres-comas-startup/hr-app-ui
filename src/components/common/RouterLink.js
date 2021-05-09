import React from "react";
import {Link as ReactRouterLink} from 'react-router-dom';
import routes from "../../config/routes";
import Link from "@material-ui/core/Link";

const RouterLink = props => (
    <Link
        component={ReactRouterLink}
        variant="body2" {...props}
    />
);

export default RouterLink;