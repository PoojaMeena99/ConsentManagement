"use client"
import React, { useState } from "react";
import "./user_form.css";

const User_form = function ({ formData, setFormData, setCurrentPage }) {

  const handleChangeId = (e) => {
    setFormData({ ...formData, id: e.target.value });
  }

  const handleChangeRedirectUri = (e) => {
    setFormData({ ...formData, redirectUri: e.target.value });
  }

  const handleChangePolicyVersion = (e) => {
    setFormData({ ...formData, policyVersion: e.target.value });
  }

  const handleChangePurpose = (e) => {
    setFormData({ ...formData, purpose: e.target.value });
  }

  const handleChangeScope = (e) => {
    setFormData({ ...formData, scope: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, "abc");
    setCurrentPage(2);
  }

  return (
    <div className='form_container'>
      <h2 className='details_hading'>Enter Consent Details</h2>
      <form onSubmit={handleSubmit} className="form_consent" >
        <div className='input_field'>
          <label for="customerId" className='label_text'>Customer ID
            <input
              type="text"
              name="customerId"
              id="customerId"
              value={formData.id}
              onChange={handleChangeId}
              required
            />
          </label>
          <label for="redirectUri" className='label_text'>Redirect URI
            <input
              type="text"
              name="redirectUri"
              id="redirectUri"
              value={formData.redirectUri}
              onChange={handleChangeRedirectUri}
              required
            />
          </label>
          <label for="policyVersion" className='label_text'>Policy Version
            <input
              type="text"
              name="policyVersion"
              id="policyVersion"
              value={formData.policyVersion}
              onChange={handleChangePolicyVersion}
              required
            />
          </label>
          <label for="purpose" className='label_text'>Purpose
            <input
              type="text"
              name="purpose"
              id="purpose"
              value={formData.purpose}
              onChange={handleChangePurpose}
              required
            />
          </label>
          <label for="scope" className='label_text'>Scope
            <input
              type="text"
              name="scope"
              id="scope"
              value={formData.scope}
              onChange={handleChangeScope}
              required
            />
          </label>
        </div>
        <div><button type="submit" className='button'>Request Consent</button></div>

      </form>

    </div>
  )
}

export default User_form
