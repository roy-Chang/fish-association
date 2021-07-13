import { PureComponent } from "react";
import { Container, TitleWrapper, FigureLogo, Title } from './styled';
//logo
import fishLogo from '../../../../assets/img/logo.png';

class TitleContent extends PureComponent {
    render() {
        return (
            <Container>
                <TitleWrapper>
                    <FigureLogo>
                        <img src={fishLogo} alt="logo"/>
                    </FigureLogo>
                    <Title>
                        <h1>跳躍吧漁會</h1>
                        <hr />
                        <p>本漁會創立的初衷為 "傳達北海岸的美麗", 活絡漁業的同時, 也喚醒大家對於海洋的熱愛</p>
                    </Title>
                </TitleWrapper> 
            </Container> 
        )
    }
}

export default TitleContent;

 