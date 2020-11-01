import React from 'react';

const IFrame = (props) => {
    if (props.iframeData !== null && props.iframeData !== undefined) {
        return (
            <iframe frameborder="0" src={props.iframeData.src} allowfullscreen="" width={props.iframeData.width} height={props.iframeData.height}>
                <a href={props.iframeData.href}>Play Cosmic Taxi on itch.io</a>
            </iframe>
        );
    } else {
        return null;
    }
};

export default IFrame;