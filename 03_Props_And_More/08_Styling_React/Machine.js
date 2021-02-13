function getNum1(){
    return Math.floor(Math.random() * 3) + 1;
}

function getNum2(){
    return Math.floor(Math.random() * 3) + 1;
}

function getNum3(){
    return Math.floor(Math.random() * 3) + 1;
}

class Machine extends React.Component {
    render() {
        const num1 = getNum1();
        const num2 = getNum2();
        const num3 = getNum3();
        let slot1;
        let slot2;
        let slot3;
        if(num1 === 1){
            slot1 = this.props.s1;
        } else if(num1 === 2) {
            slot1 = this.props.s2;
        } else {
            slot1 = this.props.s3;
        }
        if(num2 === 1){
            slot2 = this.props.s1;
        } else if(num2 === 2) {
            slot2 = this.props.s2;
        } else {
            slot2 = this.props.s3;
        }
        if(num3 === 1){
            slot3 = this.props.s1;
        } else if(num3 === 2) {
            slot3 = this.props.s2;
        } else {
            slot3 = this.props.s3;
        }

        const winner = (num1 === num2) && (num2 === num3);

        return (
            <div className="Machine">
                <p style={{fontSize: '50px', backgroundColor: 'red', width: '175px'}}>
                    {slot1} {slot2} {slot3}
                </p>
                <p className={winner ? 'win' : 'lose'}>
                    {winner ? 'Winner!' : 'Loser!'}
                </p>
            </div>
        );
    }
 }