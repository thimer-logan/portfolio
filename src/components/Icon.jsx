import React from "react";
import {SiCplusplus, SiJava, SiPython, SiMongodb} from "react-icons/si";
import {VscCode} from "react-icons/vsc"
import {GiArtificialIntelligence} from "react-icons/gi"

function Icon(props) {
    switch (props.name) {
        case "C++":
            return <SiCplusplus className={props.className}/>
        case "Java":
            return <SiJava className={props.className}/>
        case "Python":
            return <SiPython className={props.className}/>
        case "MongoDB":
            return <SiMongodb className={props.className}/>
        case "Web Development":
            return <VscCode className={props.className}/>
        case "Artificial Intelligence":
            return <GiArtificialIntelligence className={props.className}/>
    
        default:
            break;
    }
}

export default Icon;