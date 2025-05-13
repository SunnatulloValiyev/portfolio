import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Sunnatulloxon Valiyev</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am Sunnatulla Valiyev, a passionate and hardworking Frontend Developer.
            I enjoy turning creative ideas into responsive, user-friendly websites and interfaces.
            My goal is to continuously grow as a developer and work on projects that have real-world impact.
            <br /><br />
            I have solid experience in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and I am currently focusing on <b>React.js</b> and <b>Tailwind CSS</b>.
            I am also learning <b>Vite</b>, <b>GitHub</b>, to expand my frontend skills and work more efficiently.
            <br /><br />
            My future plan is to dive deeper into <b>Next.js</b> and master <b>TypeScript</b> to build modern, scalable web applications.
            <br /><br />
            Also, I enjoy exploring new technologies and contributing to open source projects while drinking <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home