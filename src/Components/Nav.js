import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SingUp"




function Navbar() {
    return (
        <div>
            <nav>
                <div className="Nav">
                    <Link className="items" to="/"><h1>JHC TEST</h1></Link>
                    <div className="Nav-Items">
                        <ul>
                            <Link className="items" to='/'><li>Home</li></Link>
                            <Link className="items" to='/about'><li>About</li></Link>
                            <Link className="items" to='/contact'><li>Contact</li></Link>
                        </ul>
                    </div>
                    <div className="Nav-Btns">
                        <Link className="items" to='/SignIn'><button>Sign In</button></Link>
                        <Link className="items" to='/SignUp' ><button>Sign Up</button></Link>

                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/SignIn" element={<SignIn />}></Route>
                <Route path="/SignUp" element={<SignUp />}></Route>

            </Routes>
        </div>
    );
}

export default Navbar;