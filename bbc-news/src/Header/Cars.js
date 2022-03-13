import React from 'react'
import reactDom from 'react-dom'

ReactDOM.render(
    <>
    <div className="cards">
        <div className="card" >
            <img scr=""  alt="mypic" className="card_img"/>
            <div className="Card_info">
                <span className="card_catagory"></span>
                <h3 className="card_title"></h3>
                <a href="" target="_blank">
                    <button>watch Now</button>
                </a>
            </div>
        </div>
    </div>
    </>,
    document.getElementById("root")
);
