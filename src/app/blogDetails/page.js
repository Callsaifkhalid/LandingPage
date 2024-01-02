"use client";
import React from "react";
import styles from "./blogdetails.module.css";

import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";

import Footer2 from "@/components/footer2/footer2";

export default function blogDetails() {
  const router = useRouter();

  let arr = [
    { id: 1, image: "./tourgoal1.png" },
    { id: 2, image: "./tourgoal2.png" },
    { id: 3, image: "./tourgoal3.png" },
    { id: 4, image: "./tourgoal4.png" },
  ];

  const BlogViewComponant = ({ item }) => {
    return (
      <div className={styles.blogViewRectangleContainerStyle}>
        <img
          src={item.image}
          className={styles.blogViewRectangleImageImageStyle}
        />
        <div className={styles.blogViewRectangleTextContainerSTyle}>
          Find a Loan from Reputable Lenders in Minutes
        </div>
      </div>
    );
  };

  return (
    <>
      <BlogNavbar />
      <div className={styles.BlogDetailMainContainer}>
        <div className={styles.blogDetailAndSideItemsContainer}>
          <div className={styles.BlogDetailCardContainer}>
            <div className={styles.BlogDetailContainerStyle}>
              <div
                onClick={() => {
                  router.push("/blogDetails");
                }}
                className={styles.HeadingStyleBlogDetail}
              >
                Can Prepaid Credit Cards Raise Your Credit Score?
              </div>
              <div className={styles.publishDateStyle}>
                Published September 2021
              </div>
              <div className={styles.socialIconContainer}>
                <div className={styles.sharethis}>
                  Share this :
                </div>
                <img src="./linkedinn.png" className={styles.socialLogoStyle} />
                <img
                  src="./twitterr.png"
                  className={styles.socialLogoStyletwitter}
                />
                <img src="./facebookk.png" className={styles.socialLogoStyle} />
                <img src="./maill.png" className={styles.socialLogoStylemail} />
              </div>
              <div className={styles.blogDetailDiscriptionAndImageContainer}>
                <div className={styles.blogDetailDescriptionStyle}>
                  A prepaid credit card is a “credit” card in name only. It
                  works similarly to a debit card, with the difference that it
                  does not require the holder to have a bank account linked to
                  it.When you buy a prepaid credit card, you buy the privilege
                  to use plastic instead of cash, mimicking the use of a regular
                  credit card. You can use prepaid credit cards for everything
                  you would otherwise handle with a regular credit or debit
                  card. You can use them for shopping, paying bills, making
                  online purchases, etc. In some cases, prepaid cards may even
                  grant you similar protection against credit card fraud,
                  unauthorized purchases, etc. The Electronic Fund Transfer Act
                  covers most prepaid credit cards, limiting your liability to
                  $50 and protecting your funds. The limit on your prepaid
                  credit cards is the amount of money you deposit onto them.
                  Every time you make a payment with such a card, you pay with
                  your own money. When you exhaust your balance, the shopping is
                  over. There is one thing prepaid credit cards do not do, and
                  that is to let you take on debt. Depending on how you look at
                  it, the lack of access to credit may be an advantage or a
                  shortcoming. Prepaid credit card users will stay out of credit
                  card debt. They will also find it easier to stick to their
                  budget and avoid shopping temptations.
                </div>
                <img src="./prepaid.jpg" className={styles.blogImageStyle} />
              </div>
              <div className={styles.blogDetailHeadingOne}>
                You Can’t Build Your Credit Score Using Prepaid Credit Cards
              </div>
              <p>
                When you buy a prepaid credit card, you buy the privilege to use
                plastic instead of cash, mimicking the use of a regular credit
                card. You can use prepaid credit cards for everything you would
                otherwise handle with a regular credit or debit card. You can
                use them for shopping, paying bills, making online purchases,
                etc. In some cases, prepaid cards may even grant you similar
                protection against credit card fraud, unauthorized purchases,
                etc. The Electronic Fund Transfer Act covers most prepaid credit
                cards, limiting your liability to $50 and protecting your funds.
                The limit on your prepaid credit cards is the amount of money
                you deposit onto them. Every time you make a payment with such a
                card, you pay with your own money. When you exhaust your
                balance, the shopping is over. There is one thing prepaid credit
                cards do not do, and that is to let you take on debt. Depending
                on how you look at it, the lack of access to credit may be an
                advantage or a shortcoming. Prepaid credit card users will stay
                out of credit card debt. They will also find it easier to stick
                to their budget and avoid shopping temptations.If you are
                already in credit card debt, call a ClearOne Certified Debt
                Specialist at 866-481-1597 and get a free savings estimate.
                Since they do not offer access to credit, prepaid credit cards
                wont raise your credit score. There is a myth about prepaid
                credit cards helping you build your credit score. We can now
                debunk that myth for good.
              </p>
              <div className={styles.relatedPostStyle}>Related Posts</div>
              <div className={styles.arrMapHolderContainerStyle}>
                {arr.map((item) => {
                  return <BlogViewComponant item={item} />;
                })}
              </div>
            </div>
          </div>

          <div className={styles.sideMenuMainContainer}>
            <div className={styles.BlogTopicHeadingStye}>Blog Topics</div>
            <div
              onClick={() => {
                router.push("/blogDetails");
              }}
              className={styles.blogTopicTextStyle}
            >
              Covid Debt Relief
            </div>
            <div
              onClick={() => {
                router.push("/blogDetails");
              }}
              className={styles.blogTopicTextStyle}
            >
              Credit Card Debt
            </div>
            <div
              onClick={() => {
                router.push("/blogDetails");
              }}
              className={styles.blogTopicTextStyle}
            >
              Debt Consolidation
            </div>
            <div
              onClick={() => {
                router.push("/blogDetails");
              }}
              className={styles.blogTopicTextStyle}
            >
              Financial Education
            </div>
            <div
              onClick={() => {
                router.push("/blogDetails");
              }}
              className={styles.blogTopicTextStyle}
            >
              Saving Money{" "}
            </div>

            <img src="./sideimage.png" className={styles.testImageStyle} />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
