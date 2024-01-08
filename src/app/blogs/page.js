"use client";
import React, { useEffect, useState } from "react";
import styles from "./blogs.module.css";
import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";
import Footer2 from "@/components/footer2/footer2";
import { ErrorCodes } from "@/utils/error-codes";
import { getAllBlogs } from "../api/blogs/repo";

export default function BlogList() {
  const router = useRouter();
  const [BlogData, setBlogData] = useState([]);
  const [ErrMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(()=>{
    fetchAllData()
  },[])
  function fetchAllData() {
    setIsLoading(true);
    getAllBlogs()
      .then(({ data }) => {
        console.log("data blog", data);
        setIsLoading(false);
        switch (data.error_code) {
          case ErrorCodes.success:
            setBlogData(data.result);
            break;
          case ErrorCodes.failed:
            setErrMsg("Oops! Some server error occued.");

            break;
          case ErrorCodes.not_exist:
            setBlogData([]);
            break;

          default:
            setErrMsg("Oops! Some error occued. EC: " + data.error_code);

            break;
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err)
       
      });
  }
  return (
    <>
      <BlogNavbar />
      <div className={styles.BlogListMainContainer}>
        <div className={styles.BlogHeadingStyle}>Blog</div>
        <div className={styles.arrayAndSideItemsContainer}>
          <div className={styles.BlogCardContainer}>
            {BlogData.map((blog) => {
              return (
                <div className={styles.BlogContainerStyle}>
                  <div
                    onClick={() => {
                      router.push("/blogDetails");
                    }}
                    className={styles.HeadingStyleBlogList}
                  >
                    {blog?.title}
                  </div>
                  <div className={styles.publishDateStyle}>
                    Published September 2021
                  </div>
                  <div className={styles.socialIconContainer}>
                    <img
                      src={"./linkedinn.png"}
                      className={styles.socialLogoStyle}
                    />
                    <img
                      src={"./twitterr.png"}
                      className={styles.socialLogoStyletwitter}
                    />
                    <img
                      src={"./facebookk.png"}
                      className={styles.socialLogoStyle}
                    />
                    <img
                      src={"./maill.png"}
                      className={styles.socialLogoStylemail}
                    />
                  </div>
                  <div className={styles.blogDiscriptionAndImageContainer}>
                    <div className={styles.blogDescriptionStyle}>
                     {blog?.description}
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
      <Footer2 />
    </>
  );
}
