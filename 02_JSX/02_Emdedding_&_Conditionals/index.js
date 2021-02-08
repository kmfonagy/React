function getNum(){
    return Math.floor(Math.random() * 20) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if(num === 17){
            msg = <div>
                <h3>Congrats!</h3>
                <img src="https://media.giphy.com/media/fdVqYL0tDBFAbWZEWY/giphy.gif" width="400" />
            </div>
        } else {
            msg = <p>Unlucky!</p>
        }
        return (
            <div>
                <h1>Your number is... {num}</h1>
                {msg}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));