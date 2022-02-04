import Link from "next/link";
import Image from 'next/image'

export default function SimpleCard({ data }) {
    const thumbnail = data.snippet.thumbnails.medium

    return (

        <Link href={`https://www.youtube.com/watch?v=${data.id.videoId}`} passHref>
            <a className="bg-white w-full max-w-full cursor-pointer  hover:underline rounded overflow-hidden" >
                <div className={`w-full bg-gray-200 h-[${thumbnail.height}px] overflow-hidden`}>
                    <Image crossOrigin="anonymous" src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} layout="responsive" />
                </div>
                <h3 className="text-black text-lg m-6 mt-4 font-semibold">{data.snippet.title}</h3>
            </a>
        </Link>
    )
}