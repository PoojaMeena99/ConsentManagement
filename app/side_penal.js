import React from 'react';
import "./side_penal.css";

function Side_penal() {
  return (
    <div className='side_penal'>
      <h2 className='ConsentHeading'>Consent Manager</h2>
      <div className='penal_list'>
        <div className='penal_item penal_item_image_1' ><img className='penal_item_image ' src="demo_logo.png" />Demo</div>
        <div className='penal_item'><img className='penal_item_image' src="setting_logo.png" />Configurations</div>
        <div className='penal_item'><img className='penal_item_image' src="search_logo.png" />Search</div>
      </div>
    </div>
  )
}

export default Side_penal
