import Image from 'next/image'
import { Link } from 'react-scroll'

export default function Header({ data }) {

    return (
        <div>
            <nav className='flex w-full'>
                <ul className='flex w-full justify-center py-6 space-x-6  uppercase text-black text-base'>
                    <li>
                        <Link className="hover:cursor-pointer" to="proyectos" activeClass='font-bold' spy={true} smooth={true} >Proyectos</Link>
                    </li>
                    <li>
                        <Link className="hover:cursor-pointer" to="videos" activeClass='font-bold' spy={true} smooth={true} >Videos</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

