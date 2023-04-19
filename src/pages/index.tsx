import MainLayout from "../components/layouts/MainLayout";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <MainLayout title="Home">
      <h1>Home Page</h1>
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
        Ir a <Link href="/about">About</Link>
      </h1>
    </MainLayout>
  );
}
