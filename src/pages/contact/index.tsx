import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <MainLayout title="Contact">
      <h1>Contact Page</h1>
      <div className={"center"}>
        <Image
          className={"logo"}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </MainLayout>
  );
};

export default ContactPage;
