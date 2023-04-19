import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>
        <div className="center">
          <Image
            className="logo"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <h1 className="title">
          Ir a <Link href="/">Home</Link>
        </h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout title="About">
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
