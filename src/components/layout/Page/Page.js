import React from "react";
import {Container} from "@material-ui/core";

const Page = props => {
    return (
        <div className="Page">
            <Container>
                <h1>{props.title}</h1>
                {
                    props.children
                }
            </Container>
        </div>
    )
}

export default Page;