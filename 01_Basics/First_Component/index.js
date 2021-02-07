// class Hello extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello there!</h1>
// 				<h3>Hello there!</h3>
// 				<h5>Hello there!</h5>
// 			</div>
// 		);
// 	}
// }

function Hello() {
	// "dumb component," not as useful as class components until Hooks
	return (
		<div>
			<h1>Hello there!</h1>
			<h3>Hello there!</h3>
			<h5>Hello there!</h5>
		</div>
	);
}

ReactDOM.render(<Hello />, document.getElementById('root'));
