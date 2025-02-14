import React from 'react';

function Main_menu() {
    return (
        <div className="main_menu">
            <div className="image imageA">
                <img id="image1" src="hv_logo.png" alt="HV Logo" />
            </div>
            <div className="image imageB">
                <img id="image2" src="home.png" alt="Home Icon" />
                <div className="text">Home</div>
            </div>
            <div className="image imageC">
                <img id="image3" src="applications.png" alt="Applications Icon" />
                <div className="text">Applications</div>
            </div>
            <div className="image imageC">
                <img id="image4" src="anlaytics.png" alt="Analytics Icon" />
                <div className="text">Analytics</div>
            </div>
            <div className="image imageC">
                <img id="image5" src="workflow.png" alt="Workflow Icon" />
                <div className="text">Workflows</div>
            </div>
            <div className="image imageC">
                <img id="image6" src="dev_hub.png" alt="Dev Hub Icon" />
                <div className="text">Dev Hub</div>
            </div>
            <div className="image imageC">
                <img id="image7" src="account.png" alt="Account Icon" />
                <div className="text">Account</div>
            </div>
            <div className="image imageD">
                <img id="image8" src="consent.png" alt="Consent Manager Icon" />
                <div className="text">Consent Manager</div>
            </div>
        </div>
    );
}

export default Main_menu;
