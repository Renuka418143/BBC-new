import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="main-header">
                <div className="bbc">
                    <h1>B</h1>
                    <h1>B</h1>
                    <h1>C</h1>
                </div>
                <div className="signin"> <h6>Sign in</h6></div>
                <div className="list">
                    <p>Home</p>
                    <p>News</p>
                    <p>Sport</p>
                    <p>Reel</p>
                    <p>Worklife</p>
                    <p>Travel</p>
                    <p>Future</p>
                    <p>Culture</p>
                    <p>Music</p>
                    <p>More</p>


                </div>
            </div>
            <hr className="line" />
            <div className="second-header">
                <div className="news "><h1>NEWS</h1></div>
                <div >
                    <ul className="ui-list">
                        <li>Home</li>|<li>War in Ukraine</li>
                        <li>Caronavirus</li>|
                        <li>Climate</li>|
                        <li>Video</li>|
                        <li>World</li>|
                        <li>Asia</li>|
                        <li>UK</li>|
                        <li>Business</li>|
                        <li>Tech</li>|
                        <li>Science</li>|
                        <li>Stories</li>|
                        <li>Health</li>|
                        <li>More</li>|



                    </ul>
                </div>
            </div>
        <div></div>
        </div>

    )



}


export default Header