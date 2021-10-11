import React from "react";
import s from "./Portfolio.module.css";
import sticker from "../../images/Sticker_1.png";
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
                    src={sticker}
                    width="450px"
                    height="500px"
                    alt=""
                />
                <div id={s.info}>
                    <p>Hello</p>
                    <h1>I'm Iskender</h1>
                    <p id={s.jun}>Junior Frontend Developer</p>
                    <p id={s.find}> Find me on: </p>
                    <div>
                        <a
                            href="https://github.com/trekvartista"
                            target="_blank"
                        >
                            <img src={git} width="40px" height="40px" alt="" />
                        </a>

                        <img src={linkedin} width="40px" height="40px" alt="" />
                        <img src={vk} width="40px" height="40px" alt="" />
                    </div>
                </div>
                <div className={s.dots}> </div>
                <div className={s.dots2}> </div>
            </div>
        </div>
    );
};

export default Portfolio;
