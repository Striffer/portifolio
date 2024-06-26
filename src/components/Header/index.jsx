import { Link } from 'react-router-dom'
import { MdMenu } from "react-icons/md";
import style from './style.module.css'

export default function Header({ onMenuToggle, marginRight }) {
    const openTag = "<"
    const closeTag = " />"

    return (
        <>
            <header className={style.header}>
                <nav>
                    <Link to={"/portfolio"}><h1><span>{openTag}</span>PedroLima<span>{closeTag}</span></h1></Link>

                    <ul>
                        <Link to={"/portfolio"}><li>Home</li></Link>
                        <Link to={"/portfolio/about"}><li>Sobre</li></Link>
                        <Link to={"/portfolio/skills"}><li>Habilidades</li></Link>
                        <Link to={"/portfolio/projects"}><li>Projetos</li></Link>
                    </ul>

                    <MdMenu 
                        onClick={onMenuToggle}
                        style={{marginRight: marginRight}}
                    />
                </nav>
            </header>
        </>
    )
}