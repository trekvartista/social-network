import React from "react";
import s from "./Portfolio.module.css";
import git from "../../images/github-logo.png";
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
                    src="https://s18798.pcdn.co/dispatch/wp-content/uploads/sites/8960/2020/07/productivity-tools.jpg"
                    width="600px"
                    height="400px"
                    alt=""
                />
                <div id={s.info}>
                    <p>Hello</p>
                    <h1>I'm Iskender</h1>
                    <p id={s.jun}>Junior <u>Frontend Developer</u> </p>
                    <p id={s.find}> Find me on: </p>
                    <div>
                        <a
                            href="https://github.com/trekvartista"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={git} width="30px" height="30px" alt="" />
                        </a>

                        <img src={linkedin} width="30px" height="30px" alt="" />
                        <img src={vk} width="30px" height="30px" alt="" />
                    </div>
                </div>
                <div className={s.dots}> </div>
                <div className={s.dots2}> </div>
            </div>
        </div>
    );
};

export default Portfolio;
