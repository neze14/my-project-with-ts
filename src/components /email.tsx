import React, { useState } from 'react'; // This line imports React and useState from  react for use in the codes below

type Props = {
    name?: string;
    other?: string;
}

const Email: React.FC<Props> = () => { // This line sets the function Email as a constant which can be used. In this case it is exported for use in App.js
    const QRCode = require('qrcode.react'); 

    const [mail, setMail] = useState(''); // Declares a new state variable called 'mail'. This adds React state to the function's components.
    const [subject, setSubject] = useState(''); // Declares a new state variable called 'subject'.
    const [body, setBody] = useState(''); // Declares a new state variable called 'body'.
    const [hide, setHide] = useState('no'); // Declares a new state variable called 'hide'.

    // This function sets mail to display the value as it is being typed.
    const ShowMail = (event) => {
        setMail(event.target.value)
    }

    // This function sets subject of the mail to display the value as it is being typed.
    const ShowSubject = (event) => {
        setSubject(event.target.value)
    }

    // This function sets body of the mail to display the value as it is being typed.
    const ShowBody = (event) => {
        setBody(event.target.value)
    }

    // This function changes the value of 'hide' when it is called.
    const GenerateCode = () => {
        if (hide === "no") {
            setHide("")
        }
    }

    return (
        <div>
            {/**For Email */}

            {/**This give the component a style when called in App.ts */}
            <div className="tile is-parent" >
                <article className="tile is-child notification is-info has-background-danger-dark">
                    <p className="title">Email Generator</p>
                    <p className="subtitle">...create your own!</p>
                    <figure className="image is-3by3">
                        <div >
                            {/** This sets the qr code to display with the colour black */}
                            <QRCode hidden={hide} value={`mailto:${mail}?subject=${subject}&body=${body}.`} size={256} />
                        </div>
                    </figure>

                    <div className="field">
                        <label className="label">Mail To</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="e.g someone@email.com" onInput={ShowMail} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Subject</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Enter subject" onInput={ShowSubject} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Body</label>
                        <div className="control">
                            <textarea className="textarea" placeholder="Type mail" onInput={ShowBody}></textarea>
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

export default Email; // This exports the function Email for use in App.js