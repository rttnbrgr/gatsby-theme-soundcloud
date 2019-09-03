import React from "react";

const Track = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Created: {props.createdAt}</p>
            <p>
                <a href={props.streamUrl}>Stream it</a>
            </p>
        </div>
    );
};

export default Track;
