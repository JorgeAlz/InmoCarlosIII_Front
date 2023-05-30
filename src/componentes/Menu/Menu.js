import { Link } from 'wouter';

function Home() {

    return (
        <nav className="bg-[#9D8972] p-0 list-none px-20 py-8 font-normal text-lg text-black mx-auto sticky top-0 z-50">
            <ul className="flex justify-between">
                <li>
                    <Link to="/viviendas">
                        Página 1
                    </Link>
                </li>
                <li>
                    <Link to="/viviendas">
                        Página 2
                    </Link>
                </li>
                <li>
                    <Link to="/viviendas">
                        Página 3
                    </Link>
                </li>
                <li>
                    <Link to="/viviendas">
                        Página 4
                    </Link>
                </li>
                <li>
                    <Link to="/viviendas">
                        Página 5
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Home;