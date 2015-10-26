import React from 'react'
import ReactDOMServer from 'react-dom/server'

class MyComponet extends React.Component {
	render() {
		return(
			<div>{this.props.text}</div>
		);
	}
}

console.log(
	ReactDOMServer.renderToString(
		<MyComponet text="Hello World" />
	)
)