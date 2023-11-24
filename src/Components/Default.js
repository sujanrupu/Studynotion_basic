import './Default.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Default() {
        return (
            <div className='blank'>
                <Link to="/Login"><button className='login1'>Log in</button></Link>
                <Link to="/Signup"><button className="signup1">Sign up</button></Link>
            </div>
        );
}
export default Default;