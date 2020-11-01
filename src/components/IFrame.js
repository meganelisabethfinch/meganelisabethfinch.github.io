import React from 'react';

const IFrame = (props) => {
    if (props.visible) {
        return (
            <iframe frameborder="0" src="https://itch.io/embed-upload/2916835?color=ffffff" allowfullscreen="" width="1100" height="750">
                <a href="https://imaginaryaround.itch.io/cosmic-taxi">Play Cosmic Taxi on itch.io</a>
            </iframe>
        );
    } else {
        return null;
    }
};

export default IFrame;