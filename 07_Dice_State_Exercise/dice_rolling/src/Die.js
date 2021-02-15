import React, { Component } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { fsDiceOne } from '@fortawesome/free-solid-svg-icons';
import "./Die.css";

//const element = <FontAwesomeIcon icon={faDiceOne} />

class Die extends Component {
    render() {
        let cls = `Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'DieRolling' : ''}`
        return (
            <div>
                <i className={cls} />
            </div>
        )
    }
}

export default Die;