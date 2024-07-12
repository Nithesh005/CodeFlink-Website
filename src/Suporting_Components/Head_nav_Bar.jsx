import { Link } from 'react-router-dom';
import CFlogo from '../assets/CFlogo.png';
import './style.css'

const Head_nav_Bar = () => {
    return (
        <div className="appbar">
            <a href="#">
                <img src={CFlogo} alt="CFlogo" height={50} width={50} />
                <div className='cmpnyName'>CODEFLINK</div>
            </a>
            <div className="brnfName">

            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/Service">Service</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
            </ul>
        </div>
    )
}
export default Head_nav_Bar;