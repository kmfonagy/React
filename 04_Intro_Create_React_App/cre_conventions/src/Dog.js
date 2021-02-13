import React, {Component} from 'react';
import husky from './imgs/husky.jpg';
import './Dog.css';

class Dog extends Component {
    render() {
        return (
            <div className="Dog">
                <h2>Dog 🐕</h2>
                <img className="Dog-img" src={husky}></img>
            </div>
        )
    }
}

export default Dog;