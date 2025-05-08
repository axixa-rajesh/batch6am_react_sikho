import { Link } from 'react-router-dom';
function NavBar(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
            &nbsp; &nbsp;
            <Link to='/login'>Login</Link>
            &nbsp; &nbsp;
            <Link to='/about'>About</Link>
        </div>
    );
}

export default NavBar;