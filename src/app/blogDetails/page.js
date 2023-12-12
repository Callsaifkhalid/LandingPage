import React from "react";
import styles from "./blogdetails.module.css";
import Footer from "../screens/footer/page";
import Image from "next/image";
import BlogNavbar from "@/components/blogNavbar/blogNavbar";
export default function BlogDetail() {
  return (
    <div className={styles.wrapper}>
      <BlogNavbar/>
      <div className={styles.BlogDetailMainContainer}>
        <div className={styles.HeadingStyleBlogDetail}>
          ABHI and LIPTON Teas &quot;&&quot; Infusions Pakistan Collaborate to
          Financially Empower Employees
        </div>
        <div className={styles.ImageContainerStyleBlogDetail}>
        <img src={'../blogdetails.svg'} className={styles.ImageStyleBlogDetail} />
        </div>

        <div className={styles.BlogDetailUnderImageText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>

        <div className={styles.BlogDetailUnderImageText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <Footer/>
    </div>
  );
}
