import React from "react";
import styles from "./california.module.css";
import PolicyNavbar from "@/components/policyNavbar/policynavbar";
import Footer2 from "@/components/footer2/footer2";
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
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.tablehead}>Category</th>
                <th className={styles.tablehead}>Examples</th>
                <th className={styles.tablehead}>Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.tablecol1}>Identifiers</td>
                <td className={styles.tablecol2}>
                  A real name, alias, postal address, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, account name, Social Security number, driver’s
                  license number, passport number, or other similar identifiers
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Personal information categories listed in the California
                  Customer Records statute (Cal. Civ. Code § 1798.80(e))
                </td>
                <td className={styles.tablecol2}>
                  A name, signature, Social Security number, physical
                  characteristics or description, address, telephone number,
                  passport number, driver’s license or state identification card
                  number, insurance policy number, education, employment,
                  employment history, bank account number, credit card number,
                  debit card number, or any other financial information, medical
                  information, or health insurance information. Some personal
                  information included in this category may overlap with other
                  categories
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Protected classification characteristics under California or
                  federal law
                </td>
                <td className={styles.tablecol2}>
                  Age (40 years or older), race, color, ancestry, national
                  origin, citizenship, religion or creed, marital status,
                  medical condition, physical or mental disability, sex
                  (including gender, gender identity, gender expression,
                  pregnancy or childbirth and related medical conditions),
                  sexual orientation, veteran or military status, genetic
                  information (including familial genetic information)
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Commercial information</td>
                <td className={styles.tablecol2}>
                  Records of personal property, products or services purchased,
                  obtained, or considered, or other purchasing or consuming
                  histories or tendencies
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Biometric information</td>
                <td className={styles.tablecol2}>
                  Genetic, physiological, behavioral, and biological
                  characteristics, or activity patterns used to extract a
                  template or other identifier or identifying information, such
                  as, fingerprints, faceprints, and voiceprints, iris or retina
                  scans, keystroke, gait, or other physical patterns, and sleep,
                  health, or exercise data
                </td>
                <td className={styles.tablecol3}>NO</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Internet or other similar network activity
                </td>
                <td className={styles.tablecol2}>
                  Browsing history, search history, information on a consumer’s
                  interaction with a website, application, or advertisement
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Geolocation data</td>
                <td className={styles.tablecol2}>
                  Physical location or movements
                </td>
                <td className={styles.tablecol3}>NO</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Sensory data</td>
                <td className={styles.tablecol2}>
                  Audio, electronic, visual, thermal, olfactory, or similar
                  information
                </td>
                <td className={styles.tablecol3}>NO</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Professional or employment-related information
                </td>
                <td className={styles.tablecol2}>
                  Current or past job history or performance evaluations
                </td>
                <td className={styles.tablecol3}>YES</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Non-public education information (per the Family Educational
                  Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R.
                  Part 99))
                </td>
                <td className={styles.tablecol2}>
                  Education records directly related to a student maintained by
                  an educational institution or party acting on its behalf, such
                  as grades, transcripts, class lists, student schedules,
                  student identification codes, student financial information,
                  or student disciplinary records
                </td>
                <td className={styles.tablecol3}>NO</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>
                  Inferences drawn from other personal information
                </td>
                <td className={styles.tablecol2}>
                  Profile reflecting a person’s preferences, characteristics,
                  psychological trends, predispositions, behavior, attitudes,
                  intelligence, abilities, and aptitudes
                </td>
                <td className={styles.tablecol3}>NO</td>
              </tr>
            </tbody>
          </table>
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
              Directly and indirectly from activity on our website (
              <a href="http://www.clearcredit.ai" target="_blank">
                www.clearcredit.ai
              </a>). For example, from submissions through our website portal or
              website usage details collected automatically.
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
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.tablecol1}>Category A:</td>
                <td className={styles.tablecol2}>Identifiers.</td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Category B:</td>
                <td className={styles.tablecol2}>
                  California Customer Records personal information categories.
                </td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Category C:</td>
                <td className={styles.tablecol2}>
                  Protected classification characteristics under California or
                  federal law
                </td>
              </tr>
              <tr>
                <td className={styles.tablecol1}>Category D:</td>
                <td className={styles.tablecol2}>Commercial Information</td>
              </tr>
            </tbody>
          </table>
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
              Sales, identifying the personal information categories that each
              category of recipient purchased; and
            </li>
            <li>
              Disclosures for a business purpose, identifying the personal
              information categories that each category of recipient obtained.
            </li>
          </ul>
          <h2>Deletion Request Rights</h2>
          <span>
            You have the right to request that we delete any of your personal
            information that we collected from you and retained, subject to
            certain exceptions. Once we receive and confirm your verifiable
            consumer request, we will delete (and direct our service providers
            to delete) your personal information from our records, unless an
            exception applies.
            <br />
            <br /> We may deny your deletion request if retaining the
            information is necessary for us or our service providers to:
          </span>
          <ol style={{ lineHeight: "2.5em" }}>
            <li>
              Complete the transaction for which we collected the personal
              information, provide a good or service that you requested, take
              actions reasonably anticipated within the context of our ongoing
              business relationship with you, or otherwise perform our contract
              with you.
            </li>
            <li>
              Detect security incidents, protect against malicious, deceptive,
              fraudulent, or illegal activity, or prosecute those responsible
              for such activities.
            </li>
            <li>
              Debug products to identify and repair errors that impair existing
              intended functionality.
            </li>
            <li>
              Exercise free speech, ensure the right of another consumer to
              exercise their free speech rights, or exercise another right
              provided for by law.
            </li>
            <li>
              Comply with the California Electronic Communications Privacy Act
              (Cal. Penal Code § 1546 seq. ).
            </li>
            <li>
              Engage in public or peer-reviewed scientific, historical, or
              statistical research in the public interest that adheres to all
              other applicable ethics and privacy laws, when the information’s
              deletion may likely render impossible or seriously impair the
              research’s achievement, if you previously provided informed
              consent.
            </li>
            <li>
              Enable solely internal uses that are reasonably aligned with
              consumer expectations based on your relationship with us.
            </li>
            <li>Comply with a legal obligation</li>
            <li>
              Make other internal and lawful uses of that information that are
              compatible with the context in which you provided it.
            </li>
          </ol>
          <span>
            <span style={{ fontWeight: "700" }}>Opt-out right</span> <br />
            <br />
            You have the right to request that Clear Credit no longer sell your
            personal information. To exercise that right, please click here:{" "}
            <a href="">Do Not Sell my personal information</a> or Calling us
            toll-free during business hours at: 1-844-208-1100
            <br />
            <br />
          </span>
          <span>
            Exercising Access, Data Portability, and Deletion Rights
            <br />
            <br /> To exercise the access, data portability, and deletion rights
            described above, please submit a verifiable consumer request to us
            by either:
            <br />
            <br />
            Calling: 1-844-208-1100
            <br /> Email: service@clearcredit.ai 
          </span>
          <h2>Filling out the California Consumer Request form</h2>
          <span>
            Only you or a person registered with the California Secretary of
            State that you authorize to act on your behalf, may make a
            verifiable consumer request related to your personal information.
            You may also make a verifiable consumer request on behalf of your
            minor child.
            <br />
            <br /> You may only make a verifiable consumer request for access or
            data portability twice within a 12-month period. The verifiable
            consumer request must:
          </span>
          <ul>
            <li>
              Provide sufficient information that allows us to reasonably verify
              you are the person about whom we collected personal information or
              an authorized representative.
            </li>
            <li>
              Describe your request with sufficient detail that allows us to
              properly understand, evaluate, and respond to it.
            </li>
          </ul>
          <span>
            We cannot respond to your request or provide you with personal
            information if we cannot verify your identity or authority to make
            the request and confirm the personal information relates to you.
            Making a verifiable consumer request does not require you to create
            an account with us. We will only use personal information provided
            in a verifiable consumer request to verify the requestor’s identity
            or authority to make the request.
          </span>
          <h2>Response Timing and Format</h2>
          <span>
            We endeavor to respond to a verifiable consumer request within 45
            days of its receipt. If we require more time (up to 90 days), we
            will inform you of the reason and extension period in writing. If
            you have an account with us, we will deliver our written response to
            that account. If you do not have an account with us, we will deliver
            our written response by mail or electronically, at your option. Any
            disclosures we provide will only cover the 12-month period preceding
            the verifiable consumer request’s receipt. The response we provide
            will also explain the reasons we cannot comply with a request, if
            applicable. For data portability requests, we will select a format
            to provide your personal information that is readily useable and
            should allow you to transmit the information from one entity to
            another entity without hindrance.
            <br />
            <br />
            We do not charge a fee to process or respond to your verifiable
            consumer request unless it is excessive, repetitive, or manifestly
            unfounded. If we determine that the request warrants a fee, we will
            tell you why we made that decision and provide you with a cost
            estimate before completing your request.
          </span>
          <h2>Non-Discrimination</h2>
          <span>
            We will not discriminate against you for exercising any of your CCPA
            rights. Unless permitted by the CCPA, we will not:
          </span>
          <ul>
            <li>Deny you goods or services.</li>
            <li>
              Charge you different prices or rates for goods or services,
              including through granting discounts or other benefits, or
              imposing penalties.
            </li>
            <li>
              Provide you a different level or quality of goods or services
            </li>
            <li>
              Suggest that you may receive a different price or rate for goods
              or services or a different level or quality of goods or services.
            </li>
          </ul>
          <h2>California Online Privacy Protection Act</h2>
          <p>
            In response to California law, we will automatically treat
            individuals with California addresses or telephone numbers (when
            disclosed to us) as if you requested us to not share your
            information with nonaffiliated third parties except as permitted by
            the applicable California law. We will also limit the sharing of
            information about you with our affiliates to comply with California
            privacy laws that apply to us.
          </p>
          <h2>California Do Not Track Disclosures</h2>
          <span>
            How do we respond to Web browser “do not track” signals or other
            mechanisms that provide consumers the ability to exercise choice
            regarding the collection of personally identifiable information
            about an individual consumer’s online activities over time and
            across third-party websites or online services?
          </span>
          <ul>
            <li style={{ color: "#8b8b8b" }}>
              We currently do not respond to DNT signals in browsers because we
              do not track individual users across the web.
            </li>
          </ul>
          <span>Does our site allow third party behavioral tracking?</span>
          <ul>
            <li style={{ color: "#8b8b8b" }}>
              Yes, we allow third party behavioral tracking.
            </li>
          </ul>
          <span>
            May other parties collect personally identifiable information about
            an individual consumer’s online activities over time and across
            different websites when they visit <a href="http://www.clearcredit.ai" target="_blank">www.clearcredit.ai</a> ?
          </span>
          <ul>
            <li style={{ color: "#8b8b8b" }}>No</li>
          </ul>
          <h2>Changes to Our Privacy Notice</h2>
          <span>
            We reserve the right to amend this privacy notice at our discretion
            and at any time. When we make changes to this privacy notice, we
            will notify you by email or through a notice on our website
            homepage.
          </span>
          <h2>Contact Information</h2>
          <span>
            If you have any questions or comments about this notice, our Privacy
            Statement, the ways in which we collect and use your personal
            information, your choices and rights regarding such use, or wish to
            exercise your rights under California law, please do not hesitate to
            contact us at:
            <br />
            <br /> Phone: 1-844-208-1100
            <br />
            <br /> Website: <a href="http://www.clearcredit.ai" target="_blank">www.clearcredit.ai</a>
            <br />
            <br /> Email: service@clearcredit.ai  <br />
            <br /> Postal Address:  Clear Credit AI, LLC. 1400 112TH Ave SE
            Suite 100, Bellevue, WA 98004
          </span>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default CaliforniaPrivacy;
