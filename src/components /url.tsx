import React, { useState } from 'react'; // This line imports React and useState from  react for use in the codes below

type Props = {
    name?: string;
    other?: string;
}

const URL: React.FC<Props> = () => { // This line sets the function URL as a constant which can be used. In this case it is exported for use in App.js
    const QRCode = require('qrcode.react'); 

    const [url, setUrl] = useState(''); // Declares a new state variable called 'url'. This adds React state to the function's components.
    const [hide, setHide] = useState('no'); // Declares a new state variable called 'hide'.

    // This function sets url to display the value as it is being typed.
    const ShowURL = (event) => { 
        setUrl(event.target.value)
    }

    // This function changes the value of 'hide' when it is called.
    const GenerateCode = () => {
        if (hide === "no") {
            setHide("")
        }
    }

    return (
        <div>
            {/**For URL */}

            {/**This give the component a style when called in App.ts */}
            <div className="tile is-parent">
                <article className="tile is-child notification is-info has-background-danger-dark">
                    <p className="title">URL Generator</p>
                    <p className="subtitle">...create your own!</p>
                    <figure className="image is-3by3">
                        <div>
                            {/** This sets the qr code to display with the colour black */}
                            <QRCode hidden={hide} value={url} size={256} fgColor="black" />
                        </div>
                    </figure>

                    {/** This sets the qr code to display with the colour black */}
                    <div className="field">
                        <label className="label">URL</label>
                        <div className="control">
                            <input className="input is-link" type="text" placeholder="Link input" onInput={ShowURL} />
                        </div>
                    </div>

                    {/** This button shows the QR code that has been generated */}
                    <div>
                        <button className="button is-info is-rounded" onClick={GenerateCode}> Generate </button>
                    </div>
                </article>
            </div>

        </div>

    )
}

export default URL; // This exports the function URL for use in App.js