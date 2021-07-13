import { PureComponent } from "react";

//first floor components
import TitleContent from './title/TitleContent';
import Weather from './Weather/Weather';
import Fishmann from "./fishman/FishManAni";

class FirstFloor extends PureComponent {
    render() {
        return (
            <>
               <Fishmann/>
               <TitleContent />
               <Weather />
            </>
        )
    }
}

export default FirstFloor;