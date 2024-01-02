import React from "react";
import styles from "./california.module.css";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
const CaliforniaPrivacy = () => {
  return (
    <div>
      <PolicyNavbar />
      <div className={styles.mainHeading}>
        <h1>PRIVACY STATEMENT-CALIFORNIA </h1>
      </div>
      <div className={styles.text}>
        <span>
          This PRIVACY NOTICE FOR CALIFORNIA RESIDENTS supplements the
          information contained in the Online Privacy Policy of Clear Credit AI,
          LLC. and its subsidiaries (collectively, “we,” “us,” or “our”) and
          applies solely to visitors, users, and others who reside in the State
          of California (“consumers” or “you”). We adopt this notice to comply
          with the California Consumer Privacy Act of 2018 (“CCPA”) and other
          California privacy laws. Any terms defined in the CCPA have the same
          meaning when used in this notice.
        </span>
      </div>
      <div className={styles.textSections}>
        <div>
          <h2>Information We Collect</h2>
          <span>
            We collect information that identifies, relates to, describes,
            references, is capable of being associated with, or could reasonably
            be linked, directly or indirectly, with a particular consumer or
            device (“personal information”). In particular, we have collected
            the following categories of personal information from consumers
            within the last twelve (12) months:
          </span>
          <span>Personal information does not include:</span>
          <ul>
            <li>Publicly available information from government records.</li>
            <li>De-identified or aggregated consumer information</li>
            <li>Information excluded from the CCPA’s scope, like: </li>
            <li>
              health or medical information covered by the Health Insurance
              Portability and Accountability Act of 1996 (HIPAA) and the
              California Confidentiality of Medical Information Act (CMIA) or
              clinical trial data;
            </li>
            <li>
              personal information covered by certain sector-specific privacy
              laws, including the Fair Credit Reporting Act (FRCA), the
              Gramm-Leach-Bliley Act (GLBA) or California Financial Information
              Privacy Act (FIPA), and the Driver’s Privacy Protection Act of
              1994.
            </li>
          </ul>
          <span>
            We obtain the categories of personal information listed above from
            the following categories of sources:
          </span>
          <ul>
            <li>
              Directly from our customers/visitors or their agents. For example,
              from documents that our customers/visitors provide to us related
              to the services for which they engage us.
            </li>
            <li>
              Indirectly from our customers/visitors or their agents. For
              example, through information we collect from our
              customers/visitors in the course of providing services to them.
            </li>
            <li>
              Directly and indirectly from activity on our website
              ( www.clearcredit.ai ). For example, from submissions through our
              website portal or website usage details collected automatically.
            </li>
            <li>
              From third-parties that interact with us in connection with the
              services we perform.
            </li>
          </ul>
          <h2>Use of Personal Information</h2>
          <span>
            We may use or disclose the personal information we collect for one
            or more of the following business purposes:
          </span>
          <ul>
            <li>
              To fulfill or meet the reason for which the information is
              provided. For example, if you provide us with personal information
              in order for us to provide a loan, we will use that information.
            </li>
            <li>
              To provide you with information, products or services that you
              request from us.
            </li>
            <li>
              To provide you with email alerts, event registrations and other
              notices concerning our products or services, or events or news,
              that may be of interest to you.
            </li>
            <li>
              To carry out our obligations and enforce our rights arising from
              any contracts entered into between you and us, including for
              billing and collections.
            </li>
            <li>To improve our website and present its contents to you.</li>
            <li>For testing, research, analysis and product development.</li>
            <li>
              As necessary or appropriate to protect the rights, property or
              safety of us, our clients or others.
            </li>
            <li>
              To respond to law enforcement requests and as required by
              applicable law, court order, or governmental regulations.
            </li>
            <li>
              As described to you when collecting your personal information or
              as otherwise set forth in the CCPA.
            </li>
            <li>
              To evaluate or conduct a merger, divestiture, restructuring,
              reorganization, dissolution, or other sale or transfer of some or
              all of our assets, whether as a going concern or as part of
              bankruptcy, liquidation, or similar proceeding, in which personal
              information held by us is among the assets transferred.
            </li>
          </ul>
          <span>
            We will not collect additional categories of personal information or
            use the personal information we collected for materially different,
            unrelated, or incompatible purposes without providing you notice.{" "}
          </span>
          <h2>Sharing Personal Information</h2>
          <span>
            We may disclose your personal information to a third party for a
            business purpose. When we disclose personal information for a
            business purpose, we enter a contract that describes the purpose and
            requires the recipient to both keep that personal information
            confidential and not use it for any purpose except performing the
            contract.
            <br />
            <br /> In the preceding twelve (12) months, we have disclosed the
            following categories of personal information for a business purpose:
          </span>
          <span>
            We disclose your personal information for a business purpose to the
            following categories of third parties:
          </span>
          <ul>
            <li>Our affiliates.</li>
            <li>Our affiliates.</li>
            <li>
              Third parties to whom you or your agents authorize us to disclose
              your personal information in connection with products or services
              we provide to you.
            </li>
          </ul>
          <span>
            In the preceding twelve (12) months, we have not sold any personal
            information.
          </span>
          <h2>Your Rights and Choices </h2>
          <span>
            The CCPA provides consumers (California residents) with specific
            rights regarding their personal information. This section describes
            your CCPA rights and explains how to exercise those rights. Access
            to Specific Information and Data Portability Rights You have the
            right to request that we disclose certain information to you about
            our collection and use of your personal information over the past 12
            months. Once we receive and confirm your verifiable consumer
            request, we will disclose to you:
          </span>
          <ul>
            <li>
              The categories of personal information we collected about you.
            </li>
            <li>
              The categories of sources for the personal information we
              collected about you.
            </li>
            <li>
              Our business or commercial purpose for collecting or selling that
              personal information.
            </li>
            <li>
              The categories of third parties with whom we share that personal
              information.
            </li>
            <li>
              The specific pieces of personal information we collected about you
              (also called a data portability request).
            </li>
            <li>
              If we sold or disclosed your personal information for a business
              purpose, two separate lists disclosing:
            </li>
            <li>
              sales, identifying the personal information categories that each
              category of recipient purchased; and
            </li>
            <li>
              disclosures for a business purpose, identifying the personal
              information categories that each category of recipient obtained.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaliforniaPrivacy;
