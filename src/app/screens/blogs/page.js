"use client";
import React from "react";
import styles from "./blogs.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiClock2} from "react-icons/ci";
import { GrPowerCycle } from "react-icons/gr";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Footer from "../footer/page";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";

const Blogs = () => {
  const router = useRouter();
  let [hovered, sethovered] = useState(0);
  let data = [
    {
      id: 1,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img : '../blogdetails.svg'
    },
    {
      id: 2,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 3,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 4,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 5,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 6,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 7,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 8,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
    {
      id: 9,
      title:
        "Mark  Teas & Infusions Pakistan Collaborate to Financially Empower Employees",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      datetime: "June 21, 2023",
      img : '../blogdetails.svg'
    },
  ];
  return (
    <div className={styles.wrapper}>
      <BlogNavbar/>
      <div className={styles.BlogListMainContainer}>
        <div className={styles.HeadingStyleBlogList}>
          Stories about financial wellness and newtech products to make your
          life better
        </div>

        <div className={styles.BlogCardContainer}>
          {data.map((item) => {
            return (
              <div
                onClick={() => {
                  router.push("/screens/blogsDetails");
                }}
                onMouseOver={() => {
                  sethovered((hovered = item.id));
                }}
                onMouseOut={() => {
                  sethovered((hovered = null));
                }}
                key={item.id}
                style={{ backgroundImage: `url(${item.img})` }}
                className={styles.BlogListingCardStyle}
              >
                <div className={styles.OverImageContainerWrapper}>
                 <BsArrowUpRightCircle className={item.id == hovered? styles.ArrowStyling : styles.ArrowStyling1}/>
                  {item.id == hovered ? (
                    <>
                      <div className={styles.onHoverTitleStyle}>
                        {item.title}
                      </div>
                      <div className={styles.onHoverDescription}>
                        {item.desc.length > 200
                          ? item.desc.substring(0, 220) + "..."
                          : item.desc}
                      </div>
                    </>
                  ) : (
                    <div className={styles.BlogCardsTitleStyle}>
                      {item.title}
                    </div>
                  )}

                  <div className={styles.TitleAndBottomContainer}>
                    <div className={styles.DtateTimeContainer}>
                      <CiClock2 className={styles.clockStyle} />
                      Dec 21, 2023
                    </div>
                    <div className={styles.updateContainer}>
                      <GrPowerCycle className={styles.updateStyle} />
                      Updates
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Blogs;
