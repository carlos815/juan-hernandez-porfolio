import Link from "next/link";
import Image from 'next/image'

export default function SimplererCard({ data }) {
    const { url, image } = data

    return (

        <Link href={url} passHref>
            <a className="bg-white w-full max-w-full cursor-pointer  hover:underline rounded overflow-hidden " >
                <div >
                    <Image src={image} width={800} height={600} layout="responsive" alt="Dribbble image" />
                </div>
            </a>
        </Link>
    )
}