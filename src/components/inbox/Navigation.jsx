import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="border-general sticky top-0 z-40 border-b bg-violet-700 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/">
                        {/* <img className="h-10" src={logoImage} alt="Learn with Sumit" /> */}
                        <h1 className="text-2xl uppercase font-extrabold text-white">
                            Shubod Chat
                        </h1>
                    </Link>
                    <ul>
                        <li className="text-white">
                            <Link to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
