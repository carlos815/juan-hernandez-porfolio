import Link from "next/link";
import Image from 'next/image'
import { red } from "tailwindcss/colors";

export default function ProjectCard({ data }) {

    const { title, description, categories, role, years, thumbnailBgColor, thumbnailUrl, url } = data

    const imageWidth = 467
    const imageHeight = 315

    const image =
        <a className={`w-[${imageWidth}px] xl:w-[${imageHeight}px]`} >
            <Image crossOrigin="anonymous" src={thumbnailUrl} width={imageWidth} height={imageHeight} />
        </a>;


    return (
        <div className="w-full flex justify-between gap-8 xl:flex-row flex-col-reverse">
            <div className="xl:max-w-sm flex flex-col gap-4">
                <h2 className="font-display text-lg font-extrabold text-gray-100 leading-none">
                    {title}
                </h2>
                <p className="text-gray-300 font-body">{description}</p>

                <div className="flex gap-[11px]">
                    {categories.map((category => <div className="bg-gray-700 rounded px-2 text-sm text-black" key={category}>{category}</div>))}
                </div>
                <div><h3 className="font-body text-base font-bold text-black mb-2">Role</h3><p className="text-gray-300 font-body">{role}</p></div>
                <div><h3 className="font-body text-base font-bold text-black mb-2">Years</h3><p className="text-gray-300 font-body">{years}</p>
                </div>
                {
                    url &&
                    <Link href={url} passHref><a className="btn xl:w-fit">Ver Proyecto</a>
                    </Link>

                }

            </div>
            <div style={{ backgroundColor: thumbnailBgColor }} className="w-full flex items-center justify-center p-8">

                {
                    url ? <Link href={url} passHref>{image}</Link> : image
                }

            </div>


        </div>
    )
}
