"use client";
import React, { useState } from "react";
import styles from "./blogs.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";
import Footer from "../screens/footer/page";

export default function BlogList() {
  const router = useRouter();
  let data = [
    {
      id: 1,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 2,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 3,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 4,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 5,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 6,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 7,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 8,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
    {
      id: 9,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
    },
  ];
  // console.log

  return (
    <>
    <BlogNavbar/>
      <div className={styles.BlogListMainContainer}>
        <div className={styles.BlogHeadingStyle}>Blog</div>
        <div className={styles.arrayAndSideItemsContainer}>
          <div className={styles.BlogCardContainer}>
            {data.map((item) => {
              return (
                <div className={styles.BlogContainerStyle}>
                  <div
                    onClick={() => {
                      router.push("/blogDetails");
                    }}
                    className={styles.HeadingStyleBlogList}
                  >
                    Can Prepaid Credit Cards Raise Your Credit Score?
                  </div>
                  <div className={styles.publishDateStyle}>
                    Published September 2021
                  </div>
                  <div className={styles.socialIconContainer}>
                    <img
                      src={"./linkedinn.png"}
                      className={styles.socialLogoStyle}
                    />
                    <img src={"./twitterr.png"} className={styles.socialLogoStyletwitter} />
                    <img
                      src={"./facebookk.png"}
                      className={styles.socialLogoStyle}
                    />
                    <img src={"./maill.png"} className={styles.socialLogoStylemail}/>
                  </div>
                  <div className={styles.blogDiscriptionAndImageContainer}>
                    <div className={styles.blogDescriptionStyle}>
                      A prepaid credit card is a “credit” card in name only. It
                      works similarly to a debit card, with the difference that
                      it does not require the holder to have a bank account
                      linked to it.
                      <div
                        onClick={() => {
                          router.push("/blogDetails");
                        }}
                        className={styles.readMoreButton}
                      >
                        Read More
                      </div>
                    </div>
                    <img
                      src="./prepaid.jpg"
                      className={styles.blogImageStyle}
                    />
                  </div>
                  <div className={styles.blogTopicAndButtonContainer}>
                    <div>Topics:</div>
                    <div
                      onClick={() => {
                        router.push("/blogDetails");
                      }}
                      className={styles.creditCardDebtButton}
                    >
                      {" "}
                      Credit Card Debt
                    </div>
                  </div>
                </div>
              );
            })}
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
      <Footer/>
    </>
  );
}
