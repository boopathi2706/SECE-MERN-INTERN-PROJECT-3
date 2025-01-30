import React, { useEffect } from "react";
import "../css/Donate.css";

const Donate = () => {
  useEffect(() => {
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const donateForm = document.getElementById("donateForm");

    if (openPopup && closePopup && donateForm) {
      openPopup.addEventListener("click", () => {
        donateForm.classList.add("active");
      });

      closePopup.addEventListener("click", () => {
        donateForm.classList.remove("active");
      });
    }


    return () => {
      if (openPopup && closePopup) {
        openPopup.removeEventListener("click", () => {
          donateForm.classList.add("active");
        });

        closePopup.removeEventListener("click", () => {
          donateForm.classList.remove("active");
        });
      }
    };
  }, []); 
  return (
    <div className="Donate_body">
      <div className="Donate_back">
        <i className="fa-solid fa-arrow-left"></i>
        <h3>Back To Home</h3>
      </div>

      <div className="Donate_title">
        <h3>Thousands are fundraising online on GiveTogether</h3>
        <div className="Donate_design">
          <hr />
          <div className="very_small_circle"></div>
          <div className="small_circle"></div>
          <div className="big_circle"></div>
          <div className="small_circle"></div>
          <div className="very_small_circle"></div>
          <hr />
        </div>
      </div>

      <div className="Donate_fillters">
        <div className="Donate_fillter">
          <i className="fa-solid fa-hospital"></i>
          <h3>Hospital</h3>
        </div>
        <div className="Donate_fillter">
          <i className="fa-solid fa-bowl-food"></i>
          <h3>Food Donate</h3>
        </div>
        <div className="Donate_fillter">
          <i className="fa-solid fa-lightbulb"></i>
          <h3>Donate for Ideas</h3>
        </div>
        <div className="Donate_fillter">
          <i className="fa-solid fa-bars"></i>
          <h3>Others</h3>
        </div>
      </div>

      <div className="Donate_box_container">
        <div className="Donate_box"></div>
        <div className="Donate_box"></div>
        <div className="Donate_box"></div>
        <div className="Donate_box">
          <h3 className="seemore">See More</h3>
          <div className="add_donate">
            <h3>You want Donation Add Your Details</h3>
            <button id="openPopup">ADD</button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <div className="add_donate_container" id="donateForm">
        <h2>Donation Form</h2>
        <div className="add_donation_input">
          <label htmlFor="name" className="add_donation_labels">Name</label>
          <input type="text" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="donate" className="add_donation_labels">Reason for Donation</label>
          <input type="text" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="account_number" className="add_donation_labels">Bank Account No</label>
          <input type="number" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="amount" className="add_donation_labels">Amount</label>
          <input type="number" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="images" className="add_donation_labels">Upload Proofs</label>
          <input type="file" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="description" className="add_donation_labels">Description</label>
          <textarea className="add_donation_textarea"></textarea>
        </div>

        <div className="add_donation_buttons">
          <button className="apply">Apply</button>
          <button className="cancel" id="closePopup">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
