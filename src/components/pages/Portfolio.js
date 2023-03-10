// React.
import React from "react"

// Child components.
import Project from "../Project"

// Component.
function Portfolio() {
	// JSX.
	return (
		<>
			<Project
				title="Cheat Leaf"
				url="https://cheat-leaf.herokuapp.com"
				github="areas-boot-camp-projects/cheat-leaf"
				githubUrl="https://github.com/areas-boot-camp-projects/cheat-leaf"
				image="./images/cheat-sheet.jpg"
			/>
			<Project
				title="Safe Travels"
				url="https://safe-travels.herokuapp.com"
				github="areas-boot-camp-projects/safe-travels"
				githubUrl="https://github.com/areas-boot-camp-projects/safe-travels"
				image="./images/safe-travels.png"
			/>
			<Project
				title="Karaoke Finder"
				url="https://areas-boot-camp-projects.github.io/karaoke/"
				github="areas-boot-camp-projects/karaoke"
				githubUrl="https://github.com/areas-boot-camp-projects/karaoke/"
				image="./images/karaoke-app.jpg"
			/>
		</>
	)
}

export default Portfolio
