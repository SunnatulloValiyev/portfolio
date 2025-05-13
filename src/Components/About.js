import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sunnatulla Valiyev</b> and I am from Uzbekistan.
            I'm a <b>Frontend web developer</b> and passionate about creating beautiful and responsive websites. <br /><br />
            I love to learn new technologies, currently exploring <b>React</b>, <b>Next.js</b>, and <b>Typescript</b>.
            I enjoy working on projects that help me improve my skills and solve real-world problems. You can check out some of my works in the projects section.<br /><br />
            I am <b>open</b> to new collaborations, freelance work, or internship opportunities where I can grow and contribute.
            Feel free to connect with me, links are in the footer.<br />
            Apart from coding I also love photography, you can check out some of my shots here
            <a href="https://www.instagram.com/valiyev.o17/" target='_blank'> Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Typescript' />
        <Skills skill='Next' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Tailwind' />
        <Skills skill='SASS' />
        <Skills skill='Javascript' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
      </div>
    </>
  )
}

export default About