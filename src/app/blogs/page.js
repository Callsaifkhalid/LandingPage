"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./blogs.module.css";
import { useRouter } from "next/navigation";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";
import Footer2 from "@/components/footer2/footer2";
import { ErrorCodes } from "@/utils/error-codes";
import { getAllBlogs } from "../api/blogs/repo";
import { BASE_URL } from "@/utils/constantVariables";
import { InputContext } from "../context/inputContext";
import { getCategoryBlogs } from "../api/blogCategory/repo";
import { format } from "date-fns";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BlogList() {
  const router = useRouter();
  const [BlogData, setBlogData] = useState([]);
  const [ErrMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const { setblogid } = useContext(InputContext);
  const [blogcat, setblogcat] = useState(0);
  const [blogCategory, setBlogCategory] = useState([]);
  const handleHeadingContinue = (id) => {
    router.push("/blogDetails");
    setblogid(id);
  };
  useEffect(() => {
    fetchAllData();
    fetchAllCategory();
  }, []);
  function fetchAllData(id) {
    setIsLoading(true);
    getAllBlogs(id)
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

  function fetchAllCategory() {
    setIsLoading(true);
    getCategoryBlogs()
      .then(({ data }) => {
        console.log("data blog", data);
        setIsLoading(false);
        switch (data.error_code) {
          case ErrorCodes.success:
            setBlogCategory(data.result);
            break;
          case ErrorCodes.failed:
            setErrMsg("Oops! Some server error occued.");

            break;
          case ErrorCodes.not_exist:
            setBlogCategory([]);
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

  return (
    <>
      <BlogNavbar />
      <div className={styles.BlogListMainContainer}>
        <div className={styles.BlogHeadingStyle}>Blog</div>
        <div className={styles.arrayAndSideItemsContainer}>
          <div className={styles.BlogCardContainer}>
          {IsLoading ? (
              <Skeleton height={150} count={3} />
            ) : (
              BlogData.map((blog) => {
              return (
                <div className={styles.BlogContainerStyle} key={blog?.id}>
                  <div
                    onClick={() => {
                      handleHeadingContinue(blog?.id);
                    }}
                    className={styles.HeadingStyleBlogList}
                  >
                    {blog?.title}
                  </div>
                  <div className={styles.publishDateStyle}>
                    Published {" : "}
                    {format(
                      blog?.created_at ? blog?.created_at : null,
                      "MM-dd-yyyy HH:mm"
                    )}
                  </div>
                  {/* <div className={styles.socialIconContainer}>
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
                  </div> */}
                  <div className={styles.blogDiscriptionAndImageContainer}>
                    <div className={styles.blogDescriptionStyle}>
                      {blog?.description.substring(0, 200) + "..."}
                      <div
                        onClick={() => {
                          handleHeadingContinue(blog?.id);
                        }}
                        className={styles.readMoreButton}
                      >
                        Read More
                      </div>
                    </div>
                    <img
                      src={BASE_URL + blog?.thumbnail}
                      className={styles.blogImageStyle}
                    />
                  </div>
                  <div className={styles.blogTopicAndButtonContainer}>
                    <div>Topics:</div>
                    <div
                      onClick={() => {
                        fetchAllData(blog?.blog_category);
                      }}
                      className={styles.creditCardDebtButton}
                    >
                      {blog?.blog_category_name}
                    </div>
                  </div>
                </div>
              );
            })
            )}
          </div>

          <div className={styles.sideMenuMainContainer}>
            <div className={styles.BlogTopicHeadingStye}>Blog Topics</div>
            {blogCategory.map((cat) => (
              <div
                onClick={() => {
                  fetchAllData(cat?.id);
                }}
                className={styles.blogTopicTextStyle}
              >
                {cat?.name}
              </div>
            ))}

            <img src="./sideimage.png" className={styles.testImageStyle} />
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}
