import Link from "next/link";
import Image from 'next/image'

export default function SimpleCard({ data }) {
    const thumbnail = data.snippet.thumbnails.medium

    return (

        <Link href={`https://www.youtube.com/watch?v=${data.id.videoId}`} passHref>
            <a className="bg-white w-full max-w-full cursor-pointer  hover:underline rounded overflow-hidden hover:shadow-md hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300" >
                <div>
                    <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} layout="responsive" alt={`${data.snippet.title} thumbnail`} />
                </div>
                <h3 className="text-black text-lg m-6 mt-4 font-semibold">{data.snippet.title}</h3>
            </a>
        </Link>
    )
}