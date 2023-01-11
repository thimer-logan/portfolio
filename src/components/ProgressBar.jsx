import React from "react";

function ProgressBar(props) {
    return (
        <div className="progress-bar">
        <h5 className="progress-title">{props.title}</h5>
            <div className="progress">
                <div className={"progress-value "} style={{"--per": props.percent, "--c": props.color}}></div>
            </div>
        </div>
    );
}

export default ProgressBar;
