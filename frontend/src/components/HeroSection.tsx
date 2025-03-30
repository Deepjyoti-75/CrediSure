import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-[2.5rem] lg:max-w-[40%] font-bold text-center mt-[2rem]">
                <span>Analyze thoroughly, and </span>
                <br />
                <span className="text-[#F25F30]">ensure secure lending.</span>
            </h1>

            <p className="text-[1.15rem] max-w-[75%] lg:max-w-[40%] text-center mt-[1rem]">
                Leverage accurate credit analysis to make confident lending decisions and minimize financial risk.
            </p>

            <button className="bg-[#F25F30] text-white px-3 py-1 rounded-md font-bold mt-[2rem]">Try Now</button>

            <Image
                src="/hero-img-sm.png"
                alt="dashboard"
                className="block md:hidden"
                height={600}
                width={400}
            />
            <Image
                src="/hero-img-lg.png"
                alt="dashboard"
                className="hidden md:block mt-[1.5rem]"
                height={500}
                width={700}
            />
        </div>
    )
}