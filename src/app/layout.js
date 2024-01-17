import { Inter } from "next/font/google";
import "./globals.css";
import InputProvider from "./context/inputContext";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Debt Consolidation Loan | ClearCredit",
//   description: "Consolidating debt can help you simplify and take control of your finances. Combine balances and make one set monthly payment with a debt consolidation loan.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Debt Consolidation Loan | ClearCredit</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Consolidating debt can help you simplify and take control of your finances. Combine balances and make one set monthly payment with a debt consolidation loan."
        />
        <meta
          name="keywords"
          content="Debt consolidation, consolidate, consolidation loans, debt consolidation loan, debt, how to get out of debt, unsecured debt, debt, personal loans, personal loan"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.wellsfargo.com/personal-loans/debt-consolidation/"
        />
        <link
          rel="alternate"
          href="https://www.wellsfargo.com/personal-loans/debt-consolidation/"
          hreflang="en-us"
        />

        <meta
          property="og:title"
          content="Debt Consolidation Loan | Clear Credit"
        />
        <meta
          property="og:description"
          content="Consolidating debt can help you simplify and take control of your finances. Combine balances and make one set monthly payment with a debt consolidation loan."
        />
        <meta
          property="og:image"
          content="https://www.wellsfargo.com/assets/images/photography/lifestyle/970x462/large_marquee_desktop_woman_at_laptop_reclining_970x462.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.wellsfargo.com/personal-loans/debt-consolidation/"
        />
        <meta property="og:site_name" content="Wells Fargo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ClearCredit" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script>
{function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
}}
(window,document,'script','dataLayer','GTM-P48NRBMV');
</script>

<script type="text/javascript">
    {function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    }}(window, document, "clarity", "script", "kj3s2qcy7x");
</script>


        {/* <Script>
          {function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          }}
          (window,document,'script','dataLayer','GTM-P48NRBMV');
        </Script> */}
        
      </Head>

      <body className="main">
        <InputProvider>{children}</InputProvider>
      </body>
    </html>
  );
}
