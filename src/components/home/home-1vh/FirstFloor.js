import { PureComponent } from "react";

//first floor components
import TitleContent from './title/TitleContent';
import Weather from './Weather/Weather';


class FirstFloor extends PureComponent {
    render() {
        return (
            <>
               <TitleContent />
               <Weather />
            </>
        )
    }
}

export default FirstFloor;