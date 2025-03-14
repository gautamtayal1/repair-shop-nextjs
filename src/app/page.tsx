import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img">
      <main className="flex justify-center items-center mx-auto h-dvh">

        <div className="text-white flex flex-col gap-6 p-12 rounded-xl bg-black">
          <h1 className="text-2xl font-bold">Dan&apos;s Computer </h1>
          <address>
            55 Main Street, Anytown, USA
          </address>
          <p>
            open 9-5 every weekday
          </p>
          <Link href="tel:+1234567890"
          className="hover:underline">Call Us</Link>
        </div>

      </main>
    </div>
  );
}
