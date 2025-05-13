import React from 'react'; 
import { FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaSass } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiVercel, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Next: <SiNextdotjs />,
        Typescript: <SiTypescript />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Tailwind: <SiTailwindcss />,
        SASS: <FaSass />,
        Vercel: <SiVercel />,
        Npm: <FaNpm />,
        Figma: <FaFigma />
    };
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <span>{skill}</span>}
        </div>
    );
};

export default Skills;
