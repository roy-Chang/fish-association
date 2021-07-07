import React, { PureComponent } from 'react'
import { jsx, css } from "@emotion/react";
//import { jsx } from "@emotion/react";
//css
import { Container, ShrimpCard, ShellCard, SquidCard, HoverBoard, FishCard } from './styled';


export default class Item extends PureComponent {
    

    render() {
        return (
            <Container>
              <figure>
                  <FishCard>
                    <HoverBoard className="board">
                        <div>
                            <p>魚類海鮮任你挑</p>
                        </div>
                    </HoverBoard>
                  </FishCard>
              </figure>
              <figure>
                  <ShrimpCard>
                    <HoverBoard className="board">
                        <div>
                            <p>蝦類海鮮任你挑</p>
                        </div>
                    </HoverBoard>
                  </ShrimpCard>
              </figure>
              <figure>
                  <ShellCard>
                    <HoverBoard className="board">
                        <div>
                            <p>貝類海鮮任你挑</p>
                        </div>
                    </HoverBoard>
                  </ShellCard>
              </figure>
              <figure>
                  <SquidCard>
                    <HoverBoard className="board">
                        <div>
                            <p>軟足類海鮮任你挑</p>
                        </div>
                    </HoverBoard>
                  </SquidCard>
              </figure>
            </Container>
        )
    }
}
