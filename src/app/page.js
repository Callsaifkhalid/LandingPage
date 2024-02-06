"use client";
import styles from "./landingpage.module.css";
import { FaPhone, FaCheck } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdUnlock } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsCreditCardFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import WaitingPage from "@/components/waitingPage/waitingPage";
import ApplyCallPage from "@/components/applyCallPage/applyCallPage";
import CallSchedule from "@/components/callSchedule/callSchedule";

const OfferPage = () => {
  const handleScrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 200,
      behavior: "smooth", // Adds smooth scrolling animation
    });
  };

  const [click, setClick] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [checkemail, setcheckemail] = useState(false);
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputValue);
    setIsValidEmail(isValid);
    setEmail(inputValue);
    setcheckemail(isValid);
  };
  const phoneNumber = "+1-844-208-1100";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const pointers = [
    {
      title: "Unlock Financing Up To $100,000",
      icon: <IoMdUnlock />,
    },
    {
      title: "Pay down your high-interest debt",
      icon: <BiSolidDollarCircle />,
    },
    {
      title: "Explore Offers Without Any Impact on Your Credit Score",
      icon: <BsCreditCardFill />,
    },
  ];

  const Styles = {
    control: (provided, state) => ({
      display: "flex",
      height: "40px",
      border: "none",
      placeholder: "State",
      alignItems: "center",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#05c8e8",
      ":hover": {
        color: "#05c8e8",
      },
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
      maxHeight: "200px",
    }),
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src="/logo.png" alt="logo" className={styles.mainLogo} />
        <div className={styles.callbutton} onClick={handleCall}>
          <FaPhone />
          1-844-208-1100
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainChild}>
          <div className={styles.divWidth}>
            <h1 className={styles.headingTop}>
              {" "}
              Cut Your Credit Card Debt in Half - Start Saving Now!
            </h1>
            <p>
              Consolidate your debts into one manageable payment and save up to
              50% on your current credit card balances
            </p>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <FaArrowRight size={12} />
              </div>
              <div>
                <p className={styles.para}>Simple, fast all online</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <FaArrowRight size={12} />
              </div>
              <div>
                <p className={styles.para}>
                  Sorted by an accredited accountant
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <FaArrowRight size={12} />
              </div>
              <div>
                <p className={styles.para}>HMRC-authorised</p>
              </div>
            </div>
          </div>
          <div className={styles.imgHide}>
            <img src="/mainImageFront.jpg" className={styles.familyphoto} />
          </div>
          <div className={styles.content}>
            {click === 1 && (
              <div className={styles.inputcontainer}>
                <div className={styles.inputfields}>
                  <p style={{}}>Let's get started</p>

                  <input
                    type="text"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      paddingLeft: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      paddingLeft: "10px",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                      border: !isValidEmail ? "2px solid red" : "",
                      paddingLeft: "10px",
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      paddingLeft: "10px",
                    }}
                  />

                  <button
                    className={
                      !checkemail
                        ? styles.disabledbutton
                        : name === ""
                        ? styles.disabledbutton
                        : lastName === ""
                        ? styles.disabledbutton
                        : phone === ""
                        ? styles.disabledbutton
                        : styles.startnowbutton
                    }
                    onClick={() => setClick(2)}
                    disabled={
                      !checkemail
                        ? true
                        : name === ""
                        ? true
                        : lastName === ""
                        ? true
                        : phone === ""
                        ? true
                        : false
                    }
                  >
                    Start Now
                  </button>
                </div>
              </div>
            )}
            {click === 2 && <WaitingPage click={setClick} />}
            {click === 3 && <ApplyCallPage click={setClick} />}
            {click === 4 && <CallSchedule click={setClick} />}

            {/* {click && (
              <div className={styles.inputcontainer2}>
                <div className={styles.inputfieldsform2}>
                  <span style={{ fontSize: "1.5rem" }}>
                    Confirm your information
                  </span>
                  <input type="text" placeholder="First name" />
                  <input type="text" placeholder="Last Name" />
                  <input type="text" placeholder="Address" />
                  <input type="text" placeholder="City" />
                  <Select
                    options={options}
                    styles={Styles}
                    placeholder="State"
                    className={styles.statedropdown}
                  />
                  <input type="text" placeholder="Email" />
                  <input type="number" placeholder="Phone Number" />

                  <button className={styles.startnowbutton}>Submit</button>
                  <div className={styles.assistancebox}>
                    <p className={styles.assistance}>
                      By clicking submit I agree that I will be contacted by
                      Clear Credit via text message, email, or phone call. Clear
                      Credit <span style={{ fontWeight: "700" }}>IS NOT</span> a
                      marketing agency and your contact info{" "}
                      <span style={{ fontWeight: "700" }}>WILL NOT</span> be
                      sold. Your contact information will{" "}
                      <span style={{ fontWeight: "700" }}>ONLY</span> be used by
                      Clear Credit for the express and sole purpose of offering
                      a loan or other financial products.
                    </p>
                  </div>
                </div>
              </div>
            )} */}
            {/* {!click && (
          <div className={styles.callbox} onClick={handleCall}>
            <div className={styles.phoneandtext}>
              <div className={styles.pulse}>
                <FaPhoneVolume style={{ fontSize: "3rem" }} />
              </div>
              <div className={styles.text}>
                <span>
                  CLICK TO SPEAK TO A <strong>LIVE AGENT</strong> NOW
                </span>
                <p>
                  Monday-Friday 8:00 AM - 7:00 PM PST <br />
                  Saturday: 9:00 AM - 3:00 PM PST
                </p>
              </div>
            </div>
          </div>
        )} */}
          </div>
        </div>
      </div>
      {/* <div className={styles.pointers}>
        {pointers.map((pointer, index) => (
          <div key={index} className={styles.pointer}>
            <span>{pointer.icon}</span>
            <p>{pointer.title}</p>
          </div>
        ))}
      </div> */}

      <h1 className={styles.heading}>How it works</h1>

      <div className={styles.mainContent}>
        <div className={styles.mainContentChild}>
          <div className={styles.mainContentChildSub}>
            <div>
              <img src="/oneImage.png" className={styles.imgStyle6} />
            </div>
            <div className={styles.divChild}>
              <h2 className={styles.oneHeading}>
                Drowning in Multiple Debt Payments?
              </h2>
              <p className={styles.onePara}>
                Struggling to keep track of numerous debts? Our consolidation
                plan simplifies your finances into one easy payment, giving you
                peace of mind and financial control.
              </p>
            </div>
          </div>

          <div className={styles.imgSide}>
            <img src="/textRowImage.jpg" className={styles.imgStyle} />
          </div>
        </div>

        <div className={styles.mainContentChild2}>
          <div className={styles.imgSide}>
            <img src="/mainSideImage3.jpg" className={styles.imgStyle} />
          </div>

          <div className={styles.mainContentChildSub}>
            <div className={styles.midDiv}>
              <img src="/twoImage.jpg" className={styles.imgStyle7} />
            </div>
            <div className={styles.divSecond}>
              <h2 className={styles.oneHeading}>
                Feel Like Debt Freedom is a Distant Dream?
              </h2>
              <p className={styles.onePara}>
                Accelerate your journey to a debt-free life. With our
                strategies, you could be free of debt up to 5X faster, avoiding
                years of stress and high interest.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.mainContentChild3}>
          <div className={styles.mainContentChildSub}>
            <div>
              <img src="/threeImage.png" className={styles.imgStyle8} />
            </div>
            <div className={styles.divChild2}>
              <h2 className={styles.oneHeading}>
                Join Thousands Who Trust Us - A+ BBB Rated
              </h2>
              <p className={styles.onePara}>
                We've earned the trust of thousands by delivering real debt
                relief solutions. Our A+ BBB rating reflects our commitment to
                integrity and customer satisfaction.
              </p>
            </div>
          </div>

          <div className={styles.imgSide}>
            <img src="/textRowImage3.jpg" className={styles.imgStyle} />
          </div>
        </div>
      </div>

      <div className={styles.mainContainer}>
        <h1 className={styles.mainContainerHead}>
          Let's get your Self Assessment sorted today
        </h1>
        <p style={{ fontSize: "14px" }}>Taxes as they should be done</p>
        <button className={styles.btn} onClick={handleScrollToTop}>
          Get Started
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.divWidth}>
          <h1 className={styles.headingMid}>
            Overwhelmed by Debt and Don't Know Where to Start?
          </h1>
          <p>
            Our free, no-obligation consultation will guide you through your
            options and help you understand the best path to financial freedom.
          </p>
        </div>
        {/* i am here  */}
        <div className={styles.imgDiv}>
          <img src="/bottomSideImage.jpg" className={styles.imgStyle4} />
        </div>
      </div>

      <div className={styles.containerMid}>
        <div className={styles.imgDiv}>
          {" "}
          <img src="/bottomSideImage2.jpg" className={styles.imgStyle4} />{" "}
        </div>
        <div className={styles.divWidth}>
          <h1 className={styles.headingMid}>
            Your Debt Relief, Personalized for You
          </h1>
          <p>
            Every financial situation is unique. We'll create a tailored plan
            that fits your budget and lifestyle, ensuring a stress-free debt
            relief process.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.divWidth}>
          <h1 className={styles.headingMid}>
            Feeling Trapped in Endless Debt Cycles?
          </h1>
          <p>
            Break free from the endless cycle of debt. Our proven methods can
            help you regain financial independence in as little as 24-48 months.
          </p>
        </div>
        <div className={styles.imgDiv}>
          <img src="/bottomSideImage3.jpg" className={styles.imgStyle4} />
        </div>
      </div>

      <div className={styles.containerSecond}>
        <div className={styles.containerSecondChild}>
          <div className={styles.divWidth}>
            <h1 className={styles.headingSecond}>
              Take the First Step Towards a Debt-Free Life
            </h1>
            <p style={{ fontSize: "14px" }}>
              Your path to financial freedom is just a click away. Contact us
              now for your free, no-obligation consultation and start your
              journey today
            </p>
            <button className={styles.btn} onClick={handleScrollToTop}>
              Get Started Now
            </button>
          </div>

          <div className={styles.imgDiv}>
            {" "}
            <img src="/bottomLastImage.jpg" className={styles.imgStyle4} />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <span>
          © 2024 <strong>Clear Credit</strong> All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default OfferPage;
