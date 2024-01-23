import { Inter } from "next/font/google";
import "./globals.css";
import InputProvider from "./context/inputContext";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Company For Debt Consolidation Solution- Clear Credit",
  description:
    "Explore the best debt consolidation options with Clear Credit. Visit our site tocheck rates and discover tailored solutions to simplify your finances",
  metadata:
    "Debt consolidation, consolidate, consolidation loans, debt consolidation loan, debt, how to get out of debt, unsecured debt, debt, personal loans, personal loan",
};

const clarityCode = `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "kj3s2qcy7x");`;

const googleTagManager = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P48NRBMV');`;

const googleTagManagerPushScript = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QGXCCHWWWS');`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="clarity-script" strategy="lazyOnload">
        {clarityCode}
      </Script>

      <Script id="google-tag-manager-script" strategy="lazyOnload">
        {googleTagManager}
      </Script>

      <Script
        id="google-tag-manager-script-second"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-QGXCCHWWWS"
      />

      <Script id="google-tag-manager-push-script" strategy="lazyOnload">
        {googleTagManagerPushScript}
      </Script>

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
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P48NRBMV"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <body className="main">
        <InputProvider>{children}</InputProvider>
      </body>
    </html>
  );
}
