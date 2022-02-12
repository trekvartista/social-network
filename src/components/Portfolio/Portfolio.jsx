import React from "react";
import s from "./Portfolio.module.css";
import frontendBlog from '../../images/frontend_blog.jpg'
import git from "../../images/github-transparent.png";
import linkedin from "../../images/linkedin-logo.png";
import vk from "../../images/vk-logo.png";

const Portfolio = () => {
    return (
        <div id={s.main}>
            <div id={s.left}></div>
            <div id={s.right}></div>
            <div id={s.center}>
                <img
                    id={s.img}
                    src={frontendBlog}
                    alt=""
                />
                <div id={s.info}>
                    <p>Hello</p>
                    <h1>I'm Iskender</h1>
                    <p id={s.jun}>Junior <u>Frontend Developer</u> </p>
                    <p style={{fontSize: "20px"}}> Find me on: </p>
                    <div>
                        <a target="_blank" rel="noreferrer"
                            href="https://github.com/trekvartista"
                        >
                            <img src={git} className={s.icon} alt="" />
                        </a>

                        <img src={linkedin} className={s.icon} alt="" />
                        <img src={vk} className={s.icon} alt="" />
                    </div>
                </div>
                <div className={s.dots}> </div>
                <div className={s.dots2}> </div>
            </div>
        </div>
    );
};

export default Portfolio;
