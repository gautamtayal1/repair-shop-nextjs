import Image from "next/image";

export const metadata = {
  title: "Page not found"
}

export default function NotFound() {
    return (
        <div className="px-2 w-full flex flex-col items-center justify-center h-screen gap-4">
            <h2 className="text-2xl font-bold">Page not found</h2>
            <Image src="/images/nf.png" alt="404" width={500} height={500} />
        </div>
    )
}