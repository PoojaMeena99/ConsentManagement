import React from 'react'

function User_collected_details() {
    return (
        <div className='User_collected_details'>
            <div className='email_section'>
                <div className='logo_section'><img id="logo" src="logo.png" /></div>
                <div className='email'>
                    <span className='email_name'>Johndoe@gmail.com</span><br></br>
                    <span className='version'>Policy Version</span>
                </div>
            </div>
            <div className='email_details'>
                <div className='checkbox_div'>
                    <span>The following details will be collected from you by pppppp...</span><br></br>
                    <input type="checkbox" id="access_1" name="vehicle1" value="access" checked="checked" />
                    <label for="access_1"> Facial scan</label><br></br>
                    <input type="checkbox" id="access_2" name="vehicle1" value="access" checked="checked" />
                    <label for="access_2"> Location access</label>
                    <br></br>
                </div>
                <div className='purpose_div'>
                    <div className='div_1'>Purpose</div>
                    <div className='div_2'>Fraud prevention and compliance checks</div>
                    <div className='div_3'>Fraud prevention and compliance checks</div>
                </div>
                <div className='allow_infromation'>
                    <div className='infromation'>
                        By clicking Allow, you allow the app to use your information in accordance to their respective <span className='color_change'>terms of serve</span> and<span className='color_change'> privacy policies </span>.
                    </div>
                    <div className='btn_div'>
                        <button className='deny_btn'>Deny</button>
                        <button className='allow_btn'>Allow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User_collected_details
