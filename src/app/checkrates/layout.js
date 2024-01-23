import Head from "next/head";

export const metadata = {
  title: "Clear Credit: Check Your Debt Consolidation Rates Instantly",
  description:
    "Take the first step towards a debt-free future with Clear Credit's transparent and reliable consolidation services",
};

export default function Layout({ children }) {
  return (
    <section>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </section>
  );
}
