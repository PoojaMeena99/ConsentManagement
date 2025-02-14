import React from 'react'

function Validate_token() {
    return (
        <div className='validate_token_box'>
            <div className='input_div'>
                <div>
                    <span for="token_value" className='label_text'>Token</span>
                </div>
                <input
                    type="text"
                    name="customerId"
                    id="token_value"
                    placeholder='<Token Value>'
                />
            </div>
            <div className="validation_button_div">
                <button className="validation_button_div">Validate Token</button>
            </div>
        </div>
    )
}

export default Validate_token
