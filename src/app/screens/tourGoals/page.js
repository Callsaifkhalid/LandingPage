"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./tour.module.css";
import { useRouter } from "next/navigation";
import { getAllBlogs } from "@/app/api/blogs/repo";
import { ErrorCodes } from "@/utils/error-codes";
import { BASE_URL } from "@/utils/constantVariables";
import { InputContext } from "@/app/context/inputContext";
import Link from "next/link";
const TourGoals = () => {
  const router = useRouter();
  const [BlogData, setBlogData] = useState([]);
  const [ErrMsg, setErrMsg] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const { setblogid } = useContext(InputContext);
  const FeaturedBlogs = BlogData.filter((blog) => blog.is_featured === 1);
  const handleLearnMore = (id) => {
    router.push("/blogDetails");
    setblogid(id);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
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
        console.log(err);
      });
  }
  const GotoBlogs = () => {
    router.push("./blogs");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.howcircle}>
        <img src="./howcircle.png" />
      </div>
      <div className={styles.headings}>
        <h3>For all tour goals</h3>
        <h1>
          Get a personal loan for all your
          <br /> financial needs
        </h1>
      </div>
      <div className={styles.cardz}>
        <div className={styles.cards}>
          {FeaturedBlogs.map((blog) => (
            <div className={styles.card1}>
              <div className={styles.card1box1}>
                <div className={styles.card1box1img}>
                  <img src={BASE_URL + blog?.thumbnail} />
                </div>
                <div className={styles.card1box1content}>
                  <h3>{blog?.title}</h3>
                  <span>
                    Description: {blog?.description.substring(0, 100) + "..."}
                  </span>
                  <h4>
                    <Link
                      href={{
                        pathname: "/blogDetails",
                        query: { blogid: blog?.id },
                      }}
                      style={{
                        color: "#05C8E8",
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          {/* {FeaturedBlogs.slice(2).map((blog) => (
            <div className={styles.card1}>
              <div className={styles.card1box1}>
                <div className={styles.card1box1img}>
                  <img src={BASE_URL + blog?.thumbnail} />
                </div>
                <div className={styles.card1box1content}>
                  <h3>{blog?.title}</h3>
                  <span style={{ color: "#8B8B8B", fontSize: "12px" }}>
                    Description: {blog?.description.substring(0, 100) + "..."}
                  </span>
                  <h4>
                    <Link
                      href={{
                        pathname: "/blogDetails",
                        query: { blogid: blog?.id },
                      }}
                      style={{
                        color: "#05C8E8",
                        fontSize: "13px",
                        textDecoration: "none",
                      }}
                    >
                      Learn More
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <div className={styles.viewmorebutton}>
        <button onClick={GotoBlogs}>View More</button>
      </div>
    </div>
  );
};

export default TourGoals;
