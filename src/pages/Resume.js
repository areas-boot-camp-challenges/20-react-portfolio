// React.
import React from "react"

// Child components.
import ContentWrapper from "../components/ContentWrapper"
import ContentHeader from "../components/ContentHeader"
import ContentSectionWrapper from "../components/ContentSectionWrapper"

// Component.
function Resume() {
	const headerName = "Resume"
	// JSX.
	return (
		<ContentWrapper>
			<ContentHeader headerName={headerName} />
			<ContentSectionWrapper>
				
			</ContentSectionWrapper>
		</ContentWrapper>
	)
}

export default Resume
