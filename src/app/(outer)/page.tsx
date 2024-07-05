import Image from "next/image";

export default function Home() {
  return (
    <main className="container xl:h-[calc(100vh-90px)] pb-10">
      <div className="flex xl:flex-row flex-col items-center justify-between w-full gap-16 sm:gap-10">
        <div className="sm:w-[544px] text-center xl:text-left">
          <Image
            src="/outer/caution.png"
            alt="Logo"
            width={62}
            height={62}
            className="mx-auto xl:ml-0"
          />
          <h1 className="text-secondary text-[32px] sm:text-[64px] leading-none sm:leading-[80px] mt-10">
            SITE Under Construction
          </h1>
          <p className="text-secondary text-sm mt-10">
            <strong className="opacity-100">
              PROJECT INTELEGENCE AND QUALITY SERVICES LIMITED
            </strong>{" "}
            <span className="opacity-50">
              is a wholly owned Nigerian Company aimed at contributing
              positively to the Construction industry. <br />
              <br />
              We do not only deliver quality Projects, but also put our clients
              first with ideas to save money, time and quick products/services
              delivery. <br />
              <br /> Our Services includes; Building & Civil Engineering
              Construction, Construction Managementand Interior design. <br />
              <br /> For more information, send us an email or call
            </span>{" "}
            <span className="text-primary">+234 803 582 0726</span>
          </p>

          <a
            href="mailto:akinsnuel@gmail.com?Subject=Hello%20again"
            target="_blank"
            className="mt-10 mx-auto xl:ml-0 flex items-center bg-primary w-fit gap-4 px-4 py-2 rounded-full"
          >
            <p className="text-white text-xs">Send us an email</p>{" "}
            <Image
              width={24}
              height={24}
              src="/outer/messageIcon.svg"
              alt="send-icon"
            />
          </a>
        </div>
        <Image
          height={661}
          width={653}
          src="/outer/hero-img.png"
          alt="hero-img"
        />
      </div>
    </main>
  );
}
