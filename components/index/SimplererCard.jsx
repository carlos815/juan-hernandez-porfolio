import Link from "next/link";
import Image from 'next/image'
import { red } from "tailwindcss/colors";

export default function SimplererCard({ data }) {
    const { url, image } = data

    return (

        <Link href={url} passHref>
            <a className="bg-white w-full max-w-full cursor-pointer  hover:underline rounded overflow-hidden " >
                <div className={`w-full  h-[${600}px] overflow-hidden `}>
                    <Image src={image} width={800} height={600} layout="responsive" alt="Dribbble image" />
                </div>
            </a>
        </Link>
    )
}