import { ReactElement } from "react";
import "../styles/Tab.css"


interface Tabprops{
    text:string;
    svg:ReactElement;
    link:string

}
function Tab({text,svg,link}:Tabprops){
    return(
        <div>
            <a href={link}>
            <div className="Tab-div">
              <div className="Tab-div-inner">
                <div className="icon-div">{svg}</div>
                <div className="text-div"><p>{text}</p></div>
              </div>
            </div>
            </a>
            

        </div>
    )
}

export default Tab