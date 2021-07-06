import React, { PureComponent } from 'react'
import { Square } from './styled';

export default class JoinCount extends PureComponent {
    render() {
        return (
            <Square>
                <p>目前報名人數</p>
                <p>19 / 20</p>
            </Square>
        )
    }
}
