import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/index/Hero";
import ProjectCard from "../components/index/ProjectCard";
import SimpleCard from "../components/index/SimpleCard";
import SimplererCard from "../components/index/SimplererCard";
import { getYoutubeData } from "../fetchData/GetYoutubeData";

export async function getStaticProps() {
  const youtubeData = await getYoutubeData();
  return {
    props: {
      youtubeData,
    },
    revalidate: 43200, //12 hours
  };
}

export default function Home({ youtubeData }) {
  const proyectsData = [
    {
      title: "Datup Design System",
      description:
        "Este fue uno de mis proyecto más importantes del 2021, es un sistema de diseño,para Datup, una startup colombiana",
      categories: ["Figma", "UI Design", "Design System"],
      role: "Design System Manager",
      years: "2021-2022",
      thumbnailUrl: "/assets/images/datup_design_system.png",
      thumbnailBgColor: "#6600FF",
      url: "",
      id: "1",
    },
    {
      title: "Las Lucas",
      description:
        "Las Lucas es un proyecto, que hice en conjunto con un desarrollador Front-end; actualmente tiene un tráfico de 1500 visitas diarias.",
      categories: ["Figma", "UI Design", "UX Research"],
      role: "UX / UI Designer",
      years: "2021-2022",
      thumbnailUrl: "/assets/images/laslucas.png",
      thumbnailBgColor: "#034686",
      url: "https://www.behance.net/gallery/126423359/Las-Lucas-Web-App",
      id: "2",
    },
  ];
  const dribbbleImageData = [
    {
      url: "https://dribbble.com/shots/17243980-Livestreaming-Platform-Tutorial",
      image: "/assets/images/dri1.jpg",
      id: "1",
    },
    {
      url: "https://dribbble.com/shots/16355168-Finance-Mobile-Interface",
      image: "/assets/images/dri2.png",
      id: "2",
    },
    {
      url: "https://dribbble.com/shots/16376658-Pricing-Cards",
      image: "/assets/images/dri3.png",
      id: "3",
    },
  ];

  const HomeSection = ({ children, title, description, className, name }) => (
    <section className={`w-full max-w-7xl mb- ${className}`} name={name}>
      <h3 className=" text-xl text-black font-display font-bold mb-6 ">
        {title}
      </h3>
      {description && (
        <p className="text-gray-300 font-body mb-12 xl:mb-8 xl:max-w-3xl">
          {description}
        </p>
      )}

      {children}
    </section>
  );

  return (
    <div className="flex flex-col  animate-fade-in">
      <Head>
        <title>Juan Hernández | Diseñador UI</title>
      </Head>

      <Header />
      <main className="px-18 flex flex-col items-center gap-y-20 xl:gap-y-28 mb-8">
        <section>
          <Hero />
        </section>

        <HomeSection title="Proyectos" name="proyectos">
          <div className="flex flex-col xl:gap-y-[151px] gap-y-12">
            {proyectsData.map((projectData) => (
              <ProjectCard data={projectData} key={projectData.id} />
            ))}
          </div>
        </HomeSection>

        <HomeSection
          title="Videos"
          description="Además, en mi tiempo libre le dedico tiempo a mi canal de Youtube, en el que hago videos a fin de documentar mi proceso creativo. "
          className="flex flex-col"
          name="videos"
        >
          <div className="gap-y-6 gap-x-6 grid xl:grid-cols-3 mb-12">
            {youtubeData?.items
              ?.sort((a, b) => {
                let da = new Date(a.snippet.publishedAt),
                  db = new Date(b.snippet.publishedAt);
                return db - da;
              })
              .filter((item) => item.id.kind === "youtube#video")
              .map((item, index) => {
                if (index > 2) return;

                return <SimpleCard data={item} key={item.etag} />;
              })}
          </div>

          <Link
            href="https://www.youtube.com/channel/UCl67IfKgGDTp9Ygc1M6qhyA"
            passHref
          >
            <a className="btn max-w-fit self-center">Ir a Youtube</a>
          </Link>
        </HomeSection>

        <HomeSection
          title="Últimos shots en Dribbble"
          description="Y aquí algunos shots de Dribbble. "
          className="flex flex-col "
        >
          <div className="grid xl:grid-cols-3 gap-y-6 gap-x-6 mb-12">
            {dribbbleImageData.map((imageData) => (
              <SimplererCard data={imageData} key={imageData.id} />
            ))}
          </div>
          <Link href="https://dribbble.com/jraulhernandezb" passHref>
            <a className="btn max-w-fit self-center">Ir a Dribbble</a>
          </Link>
        </HomeSection>
      </main>
      <footer className="w-full flex flex-col  px-18 justify-center place-items-center mb-8 font-body">
        <div className="flex flex-col items-center text-center gap-y-4 xl:flex-row xl:justify-between max-w-7xl w-full">
          <div className="flex flex-col gap-y-3">
            <p className=" font-bold ">Juan Hernández</p>
            <p className="text-gray-300">UI Designer</p>
            <div className="flex gap-x-4 justify-center">
              <a href="https://www.youtube.com/channel/UCl67IfKgGDTp9Ygc1M6qhyA">
                <Image
                  src="/assets/icons/youtube-brands.svg"
                  alt="youtube-logo"
                  height={10.5 * 1.5}
                  width={15.17 * 1.5}
                />
              </a>
              <a href="https://www.linkedin.com/in/jraulhernandezb/">
                <Image
                  src="/assets/icons/linkedin-in-brands.svg"
                  alt="linkedin logo"
                  height={13.999 * 1.2}
                  width={13.977 * 1.2}
                />
              </a>
            </div>
          </div>
          <div>
            Desarrollado por{" "}
            <a
              href="https://carlos815.github.io/portfolio/"
              className="font-bold underline"
            >
              Carlos Hernández
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
