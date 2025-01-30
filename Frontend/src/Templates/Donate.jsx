import React, { useEffect } from "react";
import "./css/Donate.css";
import { Link } from "react-router-dom";

const Donate = () => {
  useEffect(() => {
    const openPopup = document.getElementById("openPopup");
    const closePopup = document.getElementById("closePopup");
    const donateForm = document.getElementById("donateForm");
  
    const openDonateElements = document.getElementsByClassName("Donate_box1");
    const closeDonate = document.getElementById("closeDonate");
    const donateArea = document.getElementById("donateArea");
  
    const handleOpenPopup = () => donateForm?.classList.add("active");
    const handleClosePopup = () => donateForm?.classList.remove("active");
  
    const handleOpenDonate = () => donateArea?.classList.add("activity");
    const handleCloseDonate = () => donateArea?.classList.remove("activity");
  

    if (openPopup) openPopup.addEventListener("click", handleOpenPopup);
    if (closePopup) closePopup.addEventListener("click", handleClosePopup);
  
    if (openDonateElements.length > 0) {
      Array.from(openDonateElements).forEach((element) => {
        element.addEventListener("click", handleOpenDonate);
      });
    }
    
    if (closeDonate) closeDonate.addEventListener("click", handleCloseDonate);
  
    return () => {
      if (openPopup) openPopup.removeEventListener("click", handleOpenPopup);
      if (closePopup) closePopup.removeEventListener("click", handleClosePopup);
  
      if (openDonateElements.length > 0) {
        Array.from(openDonateElements).forEach((element) => {
          element.removeEventListener("click", handleOpenDonate);
        });
      }
  
      if (closeDonate) closeDonate.removeEventListener("click", handleCloseDonate);
    };
  }, []);
  
  return (
    <div className="Donate_body">
      <div className="Donate_back">
        <i className="fa-solid fa-arrow-left"></i>
        <h3>
          <Link to={"/main"} className="link">
            Back To Home
          </Link>
        </h3>
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
        <div className="Donate_box Donate_box1" id="donatebox" ></div>
        <div className="Donate_box Donate_box1"></div>
        <div className="Donate_box Donate_box1"></div>
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
          <label htmlFor="name" className="add_donation_labels">
            Name
          </label>
          <input type="text" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="donate" className="add_donation_labels">
            Reason for Donation
          </label>
          <input type="text" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="account_number" className="add_donation_labels">
            Bank Account No
          </label>
          <input type="number" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="amount" className="add_donation_labels">
            Amount
          </label>
          <input type="number" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="images" className="add_donation_labels">
            Upload Proofs
          </label>
          <input type="file" className="add_donation_input" required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="description" className="add_donation_labels">
            Description
          </label>
          <textarea className="add_donation_textarea"></textarea>
        </div>

        <div className="add_donation_buttons">
          <button className="apply">Apply</button>
          <button className="cancel" id="closePopup">
            Cancel
          </button>
        </div>
      </div>



      {/* donation area  */}
      <div className="donation_pay_area" id="donateArea">
        <div className="donation_pay_left_side">
          <h2 className="donation_want_reson">Help the --reason--</h2>
          <div className="donation_geter_image"></div>
          <div className="donation_geter_details">
            <h3 className="details">Details</h3>
            <p className="donation_geter_imfo">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatem ad at sint blanditiis quasi. Blanditiis neque aut
              nulla, iste velit unde ut eos optio quos harum architecto
              voluptatem ab dolor sed maxime molestias, aliquid hic quam rem
              aliquam porro perferendis. Soluta dolorum repellat temporibus ea,
              dicta facere. Soluta inventore, nam a natus nisi illo vel
              veritatis libero facilis, quis tenetur.
            </p>
          </div>
        </div>
        <div className="donation_pay_right_side">
          <div className="donate_icon_area">
            <i class="fa-solid fa-hand-holding-dollar"></i>
            <h3>Donate</h3>
          </div>
          <div className="donation_amount_raise">
            <h3>Amount Raise</h3>
            <div className="amounts">
              <p className="collect_amount">RS 8,34,000</p>
              <p>of</p>
              <p className="total_amount">RS 10,00,000</p>
            </div>
          </div>
          <button className="donatation_pay_area_btn">Donate Now</button>
          <div className="donation_qr">
          <p>Using card,Net-Banking and Cheque pickups</p>
            <div className="qr">
              <p>Scan & Pay</p>
            </div>
           
          </div>
          <div className="pay_netbanking">
            <div className="banking paytm"></div>
            <div className="banking gpay"></div>
            <div className="banking phonepe"></div>
            <div className="banking navi"></div>
          </div>
          <button className="donate_cancel_area" id="closeDonate">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
