
import React, { useState, useEffect } from 'react';
import "./validate_token.css";
import Token_accepted from "./token_accepted";

function Validate_token() {
    const [showDetails, setShowDetails] = useState(false);
    const [randomNumber, setRandomNumber] = useState(0); 
    useEffect(() => {
        const generatedNumber = Math.floor(Math.random() * 9 * 10 ** 15);
        console.log("Generated Number:", generatedNumber); 
        setRandomNumber(generatedNumber);
    }, []); 

    return (
        <div className='token_accepted_container'>
            <div className='validate_token'>
                <div className='input_div'>
                    <div>
                        <span className='label_text'>Token</span>
                    </div>
                    <input
                        type="text"
                        value={randomNumber || ''} 
                        placeholder='<Token Value>'
                         id="token_value"
                    />
                </div>
                <div className="validation_button_div">
                    <button
                        className="validation_button_div"
                        onClick={() => setShowDetails(true)}
                    >Validate Token</button>
                </div>
            </div>

            {showDetails && <Token_accepted />}
        </div>
    );
}

export default Validate_token;