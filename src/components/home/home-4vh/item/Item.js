import React, { PureComponent } from 'react'
import { Container, ShrimpCard, ShellCard, SquidCard, HoverBoard, FishCard } from './styled';
import { Link } from 'react-router-dom'

export default class Item extends PureComponent {
    

    render() {
        return (
            <Container>
                <figure>
                    <Link to="/products">
                        <FishCard>
                            <HoverBoard className="board">
                                <div>
                                    <p>魚類海鮮任你挑</p>
                                </div>
                            </HoverBoard>
                        </FishCard>
                    </Link>
              </figure>
              <figure>
                <Link to="/products">
                    <ShrimpCard>
                        <HoverBoard className="board">
                            <div>
                                <p>蝦類海鮮任你挑</p>
                            </div>
                        </HoverBoard>
                    </ShrimpCard>
                </Link>
              </figure>
              <figure>
                <Link to="/products">
                    <ShellCard>
                        <HoverBoard className="board">
                            <div>
                                <p>貝類海鮮任你挑</p>
                            </div>
                        </HoverBoard>
                    </ShellCard>
                </Link>
              </figure>
              <figure>
                <Link to="/products">
                    <SquidCard>
                        <HoverBoard className="board">
                            <div>
                                <p>軟足類海鮮任你挑</p>
                            </div>
                        </HoverBoard>
                    </SquidCard>
                </Link>
              </figure>
            </Container>
        )
    }
}

