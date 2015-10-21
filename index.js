import React from 'react'
import ReactDOMServer from 'react-dom/server'

class MyComponet extends React.Component {
	render() {
		return(
			<div>Hello World</div>
		);
	}
}

console.log(
	ReactDOMServer.renderToString(
		<MyComponet />
	)
)