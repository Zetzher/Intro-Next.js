import MainLayout from "../../components/layouts/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <MainLayout title="Pricing">
      <h1>Pricing Page</h1>
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
    </MainLayout>
  )
};
