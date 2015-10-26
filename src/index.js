import React from 'react'
import ReactDOMServer from 'react-dom/server'

class MyComponet extends React.Component {
	render() {
		return(
			<div>{this.props.myProp}</div>
		);
	}
}

console.log(
	ReactDOMServer.renderToString(
		<MyComponet myProp="My prop value" />
	)
)  