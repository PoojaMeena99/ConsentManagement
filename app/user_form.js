import React from 'react'

function Consent_details() {
  return (
    <div className='form'>
      <h2 className='details_hading'>Enter Consent Details</h2>
      <form className="form_consent">
        <label for="customerId" className='label_text'>Customer ID
          <input
            type="text"
            name="customerId"
            id="customerId"
          />
        </label>
        <label for="redirectUri" className='label_text'>Redirect URI
          <input
            type="text"
            name="redirectUri"
          />
        </label>
        <label for="policyVersion" className='label_text'>Policy Version
          <input
            type="text"
            name="policyVersion"
          />
        </label>
        <label for="purpose" className='label_text'>Purpose
          <input
            type="text"
            name="purpose"
          />
        </label>
        <label for="scope" className='label_text'>Scope
          <input
            type="text"
            name="scope"
            placeholder="Scope"
          />
        </label>
        <button type="submit">Request Consent</button>
      </form>

    </div>
  )
}

export default Consent_details
