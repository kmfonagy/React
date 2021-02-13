class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton" 
                    hobbies={['Piano', 'Singing', 'Dancing']} 
                />
                <Friend 
                    name="John"
                    hobbies={['Fishing', 'Drinking']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))