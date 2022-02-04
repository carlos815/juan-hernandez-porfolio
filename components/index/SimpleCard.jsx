import Link from "next/link";
import Image from 'next/image'

export default function SimpleCard({ data }) {
    const thumbnail = data.snippet.thumbnails.medium

    return (

        <Link href={`https://www.youtube.com/watch?v=${data.id.videoId}`} passHref>
            <a className="bg-white w-full max-w-full cursor-pointer  hover:underline rounded overflow-hidden" >
                <div className={`w-full bg-gray-200 h-[${thumbnail.height}px] overflow-hidden`}>
                    <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} layout="responsive" />
                </div>
                <h3 className="text-black text-lg m-6 mt-4 font-semibold">{data.snippet.title}</h3>
            </a>
        </Link>
    )
}


const objectModel = {
    kind: "youtube#searchResult",
    etag: "kR2bnHqb8_K88_nphQjtyD7jwEc",
    id: {
        kind: "youtube#video",
        videoId: "Sf-6n_KjPLM",
    },
    snippet: {
        publishedAt: "2021-12-28T18:44:17Z",
        channelId: "UCl67IfKgGDTp9Ygc1M6qhyA",
        title: "Diseño de Plataforma de Livestreaming en Figma | (2/4)",
        description:
            "Ahora, veamos cómo, a partir de un boceto hecho a mano creamos el wireframe de baja fidelidad para identificar qué ...",
        thumbnails: {
            default: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/default.jpg",
                width: 120,
                height: 90,
            },
            medium: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/mqdefault.jpg",
                width: 320,
                height: 180,
            },
            high: {
                url: "https://i.ytimg.com/vi/Sf-6n_KjPLM/hqdefault.jpg",
                width: 480,
                height: 360,
            },
        },
        channelTitle: "Juan Hernández",
        liveBroadcastContent: "none",
        publishTime: "2021-12-28T18:44:17Z",
    },
}