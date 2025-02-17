import React from 'react';
import "./token_accepted.css";

function Token_accepted() {
  return (
    <div className="details_page">
      <div className='row'>
        <div className='col1'>consent Status</div>
        <button><img className='btn' src="accept_btn.png" /></button>
      </div>
      <div className='row'>
        <div className='col1'>
          Device Id
        </div>
        <div className='col2'>
          b9f8e2d4-9c3a-4571-ae84-3c9df20297a1
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          hashedUserId
        </div>
        <div className='col2'>
          b9f8e2d4-9c3a-4571-ae84-3c9df20297a1
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          timestamp
        </div>
        <div className='col2'>
          2024-06-12T14:35:22Z
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          ipAddress
        </div>
        <div className='col2'>
          192.168.1.15
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          Scope
        </div>
        <div className='col2'>
          facial scan, Location Access
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          Purpose
        </div>
        <div className='col2'>
          User onboarding and identity verification
          <br></br>
          Fraud prevention and compliance checks
        </div>
      </div>
      <div className='row'>
        <div className='col1'>
          Tenure
        </div>
      </div>
      <div className='row'>
        <div className='col1'>humanReadable</div>
        <div className='col2'>2025-06-12T14:35:22Z</div>
      </div>
    </div>
    // </div>

  )
}

export default Token_accepted
