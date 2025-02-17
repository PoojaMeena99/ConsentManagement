import React from 'react'
import "./user_collected_details.css"

function User_collected_details({ formData, setCurrentPage }) {
    console.log(formData, "pooja");
    return (
        <div className='user_details_container'>
            <div className='email_section'>
                <div className='logo_section'><img className="logo" src="logo.png" /></div>
                <div className='email'>
                    <span className='email_name'>Johndoe@gmail.com</span><br></br>
                    <span className='version'>Policy Version</span>
                </div>
            </div>
            <div className='email_details'>
                <div className='checkbox_div'>
                    <span className='details_text'>The following details will be collected from you by </span> <br />
                    <div className="checkbox_item1">
                        <input type="checkbox" id="access_1" name="vehicle1" value="access" checked="checked" />
                        <label htmlFor="access_1"> Facial scan</label>
                    </div>
                    <div className="checkbox_item2">
                        <input type="checkbox" id="access_2" name="vehicle1" value="access" checked="checked" />
                        <label htmlFor="access_2"> Location access</label>
                    </div>
                </div>
                <div className='purpose_div'>
                    <div className='div_1'>Purpose</div>
                    <div className='div_2'>Fraud prevention and compliance checks</div>
                    <div className='div_3'>Fraud prevention and compliance checks</div>
                    <br></br>
                    <div className='row1'>
                        <div className='row_col1'>User Id</div>
                        <div className='row_col2'>{formData.id}</div>
                    </div>
                    <div className='row1'>
                        <div className='row_col1'>User redirectUri</div>
                        <div className='row_col2'>{formData.redirectUri}</div>
                    </div>
                    <div className='row1'>
                        <div className='row_col1'>User policyVersion</div>
                        <div className='row_col2'>{formData.policyVersion}</div>
                    </div>
                    <div className='row1'>
                        <div className='row_col1'>User purpose</div>
                        <div className='row_col2'>{formData.purpose}</div>
                    </div>
                    <div className='row1'>
                        <div className='row_col1'>User scope</div>
                        <div className='row_col2'>{formData.scope}</div>
                    </div>
                </div>
                <div className='allow_infromation'>
                    <div className='infromation'>
                        By clicking Allow, you allow the app to use your information in accordance to their respective <span className='color_change'>terms of serve</span> and<span className='color_change'> privacy policies </span>.
                    </div>
                    <div className='btn_div'>
                        <button
                            className='deny_btn'
                            onClick={() => setCurrentPage(1)}
                        >Deny</button>

                        <button
                            className='allow_btn'
                            onClick={() => setCurrentPage(3)}
                        >Allow</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User_collected_details
