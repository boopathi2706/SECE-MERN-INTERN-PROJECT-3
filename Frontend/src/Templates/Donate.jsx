import React, { useEffect } from "react";
import "./css/Donate.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import medical1 from './image/medical1.avif'
import medical2 from './image/medical2.jpg'
import medical3 from './image/medical3.avif'
import poor1 from './image/poor1.jpg'
import poor2 from './image/poor2.jpg'
import poor3 from './image/poor3.jpg'
import startup1 from './image/startup1.jpeg'
import startup2 from './image/startup2.jpeg'
import startup3 from './image/startup3.png'
const Donate = () => {
  var [image1Url,setImage1]=useState(medical1);
  var [image2Url,setImage2]=useState(medical2);
  var [image3Url,setImage3]=useState(medical3);
  const Medical = [
    {
      topic: "eye operation",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "8,34,000",
      endAmount: "10,00,000"
    },
    {
      topic: "heart surgery",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "7,00,000",
      endAmount: "20,00,000"
    },
    {
      topic: "cancer",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "3,00,000",
      endAmount: "12,00,000"
    }
  ];





  const show_medical=()=>{
    var topic=document.getElementById("donate_box_topic1");
    var start=document.getElementById("donate_start_amount1");
    var end=document.getElementById("donate_end_amount1");
    var content=document.getElementById("donate_content1");

    topic.textContent=Medical[0].topic;
    setImage1(medical1);
    start.textContent=Medical[0].startAmount;
    end.textContent=Medical[0].endAmount;
    content.textContent=Medical[0].content;


    var topic1=document.getElementById("donate_box_topic2");
    var start1=document.getElementById("donate_start_amount2");
    var end1=document.getElementById("donate_end_amount2");
    var content1=document.getElementById("donate_content2");

    topic1.textContent=Medical[1].topic;
    setImage2(medical2)
    start1.textContent=Medical[1].startAmount;
    end1.textContent=Medical[1].endAmount;
    content1.textContent=Medical[1].content;




    var topic2=document.getElementById("donate_box_topic3");
    var start2=document.getElementById("donate_start_amount3");
    var end2=document.getElementById("donate_end_amount3");
    var content2=document.getElementById("donate_content3");

    topic2.textContent=Medical[2].topic;
    setImage3(medical3);
    start2.textContent=Medical[2].startAmount;
    end2.textContent=Medical[2].endAmount;
    content2.textContent=Medical[2].content;

  }


const Food = [
    {
      topic: "Orphanage",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "50,000",
      endAmount: "1,50,000"
    },
    {
      topic: "oldage home (madurai)",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "70,000",
      endAmount: "2,00,000"
    },
    {
      topic: "oldage home (chennai)",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "30,000",
      endAmount: "1,00,000"
    }
  ];
  

  const idea = [
    {
      topic: "axz startup",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "5,00,000",
      endAmount: "1,00,50,000"
    },
    {
      topic: "yevs startup",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "70,00,000",
      endAmount: "2,00,00,000"
    },
    {
      topic: "xyz startup",
      content: "Lorem Ipsum is simply dummy text of the printing.",
      startAmount: "3,00,000",
      endAmount: "10,00,000"
    }
  ];



  const show_food=()=>{
    var topic=document.getElementById("donate_box_topic1");
    var start=document.getElementById("donate_start_amount1");
    var end=document.getElementById("donate_end_amount1");
    var content=document.getElementById("donate_content1");

    topic.textContent=Food[0].topic;
    setImage1(poor1);
    start.textContent=Food[0].startAmount;
    end.textContent=Food[0].endAmount;
    content.textContent=Food[0].content;


    var topic1=document.getElementById("donate_box_topic2");
    var start1=document.getElementById("donate_start_amount2");
    var end1=document.getElementById("donate_end_amount2");
    var content1=document.getElementById("donate_content2");

    topic1.textContent=Food[1].topic;
    setImage2(poor2)
    start1.textContent=Food[1].startAmount;
    end1.textContent=Food[1].endAmount;
    content1.textContent=Food[1].content;




    var topic2=document.getElementById("donate_box_topic3");
    var start2=document.getElementById("donate_start_amount3");
    var end2=document.getElementById("donate_end_amount3");
    var content2=document.getElementById("donate_content3");

    topic2.textContent=Food[2].topic;
    setImage3(poor3);
    start2.textContent=Food[2].startAmount;
    end2.textContent=Food[2].endAmount;
    content2.textContent=Food[2].content;

  }

  const show_idea=()=>{
    var topic=document.getElementById("donate_box_topic1");
    var start=document.getElementById("donate_start_amount1");
    var end=document.getElementById("donate_end_amount1");
    var content=document.getElementById("donate_content1");

    topic.textContent=idea[0].topic;
    setImage1(startup1);
    start.textContent=idea[0].startAmount;
    end.textContent=idea[0].endAmount;
    content.textContent=idea[0].content;


    var topic1=document.getElementById("donate_box_topic2");
    var start1=document.getElementById("donate_start_amount2");
    var end1=document.getElementById("donate_end_amount2");
    var content1=document.getElementById("donate_content2");

    topic1.textContent=idea[1].topic;
    setImage2(startup2)
    start1.textContent=idea[1].startAmount;
    end1.textContent=idea[1].endAmount;
    content1.textContent=idea[1].content;




    var topic2=document.getElementById("donate_box_topic3");
    var start2=document.getElementById("donate_start_amount3");
    var end2=document.getElementById("donate_end_amount3");
    var content2=document.getElementById("donate_content3");

    topic2.textContent=idea[2].topic;
    setImage3(startup3);
    start2.textContent=idea[2].startAmount;
    end2.textContent=idea[2].endAmount;
    content2.textContent=idea[2].content;

  }








  const navigate=useNavigate();
  var [name,setname]=useState("");
  var [reason,setReason]=useState("");
  var [account_no,setAccount_no]=useState("");
  var [amount,setAmount]=useState("");
  var [image,setImage]=useState("");
  var [discription,setDiscription]=useState("");
  const handleSubmit=async (event) => {
      event.preventDefault();
      try {
        const req = await axios.post("https://sece-mern-intern-project-3.onrender.com/donate", {
          name: name,
          reason:reason,
          account_no: account_no,
          amount:amount,
          image:"hello",
          discription:discription,
        });
        console.log(image);
        alert(req.data.message);
        if (req.data.DonateStatus ) {
          navigate("/main");
        }
      } catch (e) {
        alert("Donate upload Unsuccessful");
      }
    };
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
        <div className="Donate_fillter" onClick={show_medical}>
          <i className="fa-solid fa-hospital"></i>
          <h3>Hospital</h3>
        </div>
        <div className="Donate_fillter" onClick={show_food}>
          <i className="fa-solid fa-bowl-food"></i>
          <h3>Food Donate</h3>
        </div>
        <div className="Donate_fillter" onClick={show_idea}>
          <i className="fa-solid fa-lightbulb"></i>
          <h3>Donate for Ideas</h3>
        </div>
        <div className="Donate_fillter">
          <i className="fa-solid fa-bars"></i>
          <h3>Others</h3>
        </div>
      </div>

      <div className="Donate_box_container">
        <div className="Donate_box Donate_box1">
              <h3 className="donate_box_topic" id="donate_box_topic1">eye operation</h3>
              <img className="donate_box_image" id="donate_box_image1" src={image1Url} />

              {/* </div> */}
              <div className="donate_box_amount">
                <p className="donate_start_amount" id="donate_start_amount1">8,34,000</p>of
                <p className="donate_end_amount" id="donate_end_amount1">10,00,000</p>            
              </div>
              <div className="donate_content" id="donate_content1">
              Lorem Ipsum is simply dummy text of the printing

              </div>
        </div>

        <div className="Donate_box Donate_box1">
        <h3 className="donate_box_topic" id="donate_box_topic2">heart surgery</h3>
              <img className="donate_box_image" id="donate_box_image2" src={image2Url}/>
              <div className="donate_box_amount">
                <p className="donate_start_amount" id="donate_start_amount2">7,00,000</p>of
                <p className="donate_end_amount" id="donate_end_amount2">20,00,000</p>            
              </div>
              <div className="donate_content" id="donate_content2">
              Lorem Ipsum is simply dummy text of the printing
              </div>
        </div>
        <div className="Donate_box Donate_box1">
        <h3 className="donate_box_topic" id="donate_box_topic3">cancer</h3>
              <img className="donate_box_image" id="donate_box_image3" src={image3Url} />
              <div className="donate_box_amount">
                <p className="donate_start_amount" id="donate_start_amount3">3,00,000</p>of
                <p className="donate_end_amount" id="donate_end_amount3">20,00,000</p>            
              </div>
              <div className="donate_content" id="donate_content3">
              Lorem Ipsum is simply dummy text of the printing
              </div>
        </div>
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
          <input type="text" className="add_donation_input" onChange={(e)=>{setname(e.target.value)}} required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="donate" className="add_donation_labels">
            Reason for Donation
          </label>
          <input type="text" className="add_donation_input" onChange={(e)=>{setReason(e.target.value)}} required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="account_number" className="add_donation_labels">
            Bank Account No
          </label>
          <input type="number" className="add_donation_input" onChange={(e)=>{setAccount_no(e.target.value)}} required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="amount" className="add_donation_labels">
            Amount
          </label>
          <input type="number" className="add_donation_input" onChange={(e)=>{setAmount(e.target.value)}} required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="images" className="add_donation_labels">
            Upload Proofs
          </label>
          <input type="file" className="add_donation_input"  accept="image/*"  onChange={(e)=>{setImage(e.target.files[0])}} required />
        </div>

        <div className="add_donation_input">
          <label htmlFor="description" className="add_donation_labels">
            Description
          </label>
          <textarea className="add_donation_textarea" onChange={(e)=>{setDiscription(e.target.value)}}></textarea>
        </div>

        <div className="add_donation_buttons">
          <button className="apply" type="submit" onClick={handleSubmit}>Apply</button>
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
            <i className="fa-solid fa-hand-holding-dollar"></i>
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
