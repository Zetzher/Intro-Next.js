import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = ({
  children,
  title,
}: {
  children: JSX.Element|JSX.Element[];
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>{title} - Julián</title>
        <meta name="description" content={`${title} Page`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
      <h2 className="title">s</h2>
    </>
  );
};

export default MainLayout;
