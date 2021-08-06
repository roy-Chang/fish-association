import React, { PureComponent } from 'react'
import { Shap } from './styled';
//crown
//import { ReactComponent as Crown } from '../../../../../assets/img/rank-svg/crown.svg'

export default class Unit extends PureComponent {
    render() {
        return (
            <Shap color={this.props.color}>
                <p>1</p>
                <div>{this.props.text}</div>
            </Shap>
        )
    }
}
