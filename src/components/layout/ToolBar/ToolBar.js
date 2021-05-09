import React from "react";
import {Button} from "@material-ui/core";

const ToolBar = props => {
    return (
        <div className="ToolBar">
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    )
}

export default ToolBar