import Terminal from "./Terminal";
import { info } from "../../info/info";
import './AboutMe.css';

function AboutMePage () {     
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{color: info.baseColor}}>about{firstName} <span
                className="">(main)</span> $ <br/></span>
                {info.bio}
            </p>
        </>;
    };

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd Compétences/Outils
            </p>
            <p><span style={{color: info.baseColor}}>compétences/outils <span
                className="">(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> Compétent en</p>
            <ul className="terminal skillsText-ul-first">
                {info.skills.competentEn.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Familiarisé avec</p>
            <ul className="terminal skillsText-ul-last">
                {info.skills.familiariseAvec.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    };

    function diversText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
            Loisirs/Centres d'intérêt</p>
            <p><span style={{color: info.baseColor}}>Loisirs/Centres d'intérêt <span
                className="">(main)</span> $</span> ls</p>
            <ul className="terminal diversText-ul">
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><div component={'span'} mr={'1rem'}>{hobby.emoji}</div>{hobby.label}</li>
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