"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./blogdetails.module.css";

import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";

import Footer2 from "@/components/footer2/footer2";
import { getBlogDetails } from "../api/blogDetails/repo";
import { ErrorCodes } from "@/utils/error-codes";
import { InputContext } from "../context/inputContext";
import { BASE_URL } from "@/utils/constantVariables";

export default function blogDetails() {
  const [BlogData, setBlogData] = useState([]);
  const [ErrMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const { blogid } = useContext(InputContext);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    setIsLoading(true);
    getBlogDetails(blogid)
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
        console.log(err);
      });
  }
console.log(BlogData)
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
          {/* {BlogData?.map((blog) => ( */}
            <div className={styles.BlogDetailCardContainer}>
              <div className={styles.BlogDetailContainerStyle}>
                <div
                  onClick={() => {
                    router.push("/blogDetails");
                  }}
                  className={styles.HeadingStyleBlogDetail}
                >
                 
                  {BlogData.title}
                </div>
                <div className={styles.publishDateStyle}>
                  Published {BlogData.created_at}
                </div>
                <div className={styles.socialIconContainer}>
                  <div className={styles.sharethis}>Share this :</div>
                  <img
                    src="./linkedinn.png"
                    className={styles.socialLogoStyle}
                  />
                  <img
                    src="./twitterr.png"
                    className={styles.socialLogoStyletwitter}
                  />
                  <img
                    src="./facebookk.png"
                    className={styles.socialLogoStyle}
                  />
                  <img
                    src="./maill.png"
                    className={styles.socialLogoStylemail}
                  />
                </div>
                <div className={styles.blogDetailDiscriptionAndImageContainer}>
                  <div className={styles.blogDetailDescriptionStyle}>
                    {BlogData.description}
                  </div>
                  <img src={BASE_URL + BlogData.thumbnail} className={styles.blogImageStyle} />
                </div>
               
                <div className={styles.relatedPostStyle}>Related Posts</div>
                <div className={styles.arrMapHolderContainerStyle}>
                  {arr.map((item) => {
                    return <BlogViewComponant item={item} />;
                  })}
                </div>
              </div>
            </div>
          {/* ))} */}

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
