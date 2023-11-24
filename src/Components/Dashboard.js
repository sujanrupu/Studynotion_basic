import './Dashboard.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Dashboard() {
    const handleLogin = () => {
        toast.success("Logged out", {
            position: toast.POSITION.TOP_CENTER,
            className: "toast-message",
        });
    }
    return (
        <div>
            <div className="dash_desc">
                Welcome to StudyNotion!
            </div>
            <Link to="/Login"><button className='signout'onClick={() => {
                            handleLogin();
                    }
                    }>Log Out</button></Link>
            <button className="dashboard">Dashboard</button>
        </div>

    );
}
export default Dashboard;