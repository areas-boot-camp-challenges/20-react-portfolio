// React.
import React from "react"

// Component.
function Resume() {
	// JSX.
	return (
		<>
			<a className="font-thin text-blue-500 pb-3" href="Christian Areas.pdf">Download my resume.</a>
			<h3 className="text-2xl">Front-End Skills</h3>
			<ul className="font-thin list-disc pl-5 pt-2 pb-5">
				<li>HTML</li>
				<li>CSS</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>Tailwind CSS</li>
			</ul>
			<h3 className="text-2xl">Back-End Skills</h3>
			<ul className="font-thin list-disc pl-5 pt-2">
				<li>Node.js</li>
				<li>Express.js</li>
				<li>MySQL</li>
				<li>Sequelize</li>
				<li>MongoDB</li>
				<li>Mongoose</li>
				<li>GraphQL</li>
			</ul>
		</>
	)
}

export default Resume
