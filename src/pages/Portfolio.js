// React.
import React from "react"

// Child components.
import ContentWrapper from "../components/ContentWrapper"
import ContentHeader from "../components/ContentHeader"
import ContentSectionWrapper from "../components/ContentSectionWrapper"
import Project from "../components/Project"

// Component.
function Portfolio() {
	const headerName = "Portfolio"
	// JSX.
	return (
		<ContentWrapper>
			<ContentHeader headerName={headerName} />
			<ContentSectionWrapper>
				<Project
					title="Karaoke Finder"
					url="https://areas-boot-camp-projects.github.io/karaoke/"
					github="areas-boot-camp-projects/karaoke"
					githubUrl="https://github.com/areas-boot-camp-projects/karaoke/"
					image="/images/karaoke-app.jpg"
				/>
				<Project
					title="Safe Travels"
					url="https://safe-travels.herokuapp.com"
					github="areas-boot-camp-projects/safe-travels"
					githubUrl="https://github.com/areas-boot-camp-projects/safe-travels"
					image="/images/safe-travels.png"
				/>
			</ContentSectionWrapper>
		</ContentWrapper>
	)
}

export default Portfolio
