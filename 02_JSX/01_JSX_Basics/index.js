function getMood() {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid' ];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render() {
        // return (
        //     <div>
        //         <h1>Siberian Husky</h1>
        //         <img src="https://images.unsplash.com/photo-1573920953827-2ccafab952d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80" width="800"/>
        //     </div>
            
        // );
        // return React.createElement("h3", null, "I am an H3"); // from babeljs.io try now

        return (
            // <div>
            //     <h1>My number is: {2 * 8.4}</h1>
            // </div>

            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));