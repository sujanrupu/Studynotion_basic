import './Home.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className='total'>
            <div className="desc">
                Home
            </div>
            <Link to="/Login"><button className='login2'>Log in</button></Link>
            <Link to="/Signup"><button className="signup2">Sign up</button></Link>
            
        </div>
    );
}
export default Home;