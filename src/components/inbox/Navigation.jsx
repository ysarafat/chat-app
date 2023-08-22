import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLoggedOut } from '../../features/auth/authSlice';

export default function Navigation() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(userLoggedOut());
        localStorage.removeItem('auth');
    };
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
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
