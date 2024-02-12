import './Footer.css';
import { useLocation} from 'react-router-dom';

function Footer () {

    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <div className={currentPage === '/portfolio' || currentPage === '/about' ? 'footer-div-basic' : 'footer-div'}>
            <p>© Manu-dev-2023</p>
        </div>
    );
};

export default Footer;