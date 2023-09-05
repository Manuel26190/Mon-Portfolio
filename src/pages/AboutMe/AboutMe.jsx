import Terminal from "./Terminal";
import { info } from "../../info/info";
import './AboutMe.css';
import {Box} from "@mui/material";

function AboutMePage () { 
    //console.log('info', info.bio);
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className="">(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    };

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{color: info.baseColor}}>skills/tools <span
                className="">(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Proficient With</p>
            <ul className="">
                {info.skills.maitriseDe.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Exposed To</p>
            <ul className="">
                {info.skills.utilisationDe.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    };

    function diversText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{color: info.baseColor}}>hobbies/interests <span
                className="">(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    };     
       
    return (
        <div className="aboutMe-div">                        
            <Terminal
                text={aboutMeText()} />
            <Terminal
                text={skillsText()} />
            <Terminal
                text={diversText()} />
        </div>
    );
};

export default AboutMePage;