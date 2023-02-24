// React.
import React from "react"

// Child components.
import ContentWrapper from "../components/ContentWrapper"
import ContentHeader from "../components/ContentHeader"
import ContentSectionWrapper from "../components/ContentSectionWrapper"

// Component.
function Contact() {
	const headerName = "Contact"
	// JSX.
	return (
		<ContentWrapper>
			<ContentHeader headerName={headerName} />
			<ContentSectionWrapper>
				{/* todo: center text no matter the viewport size (using padding right now, which isn’t the best) */}
				<a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="http://linkedin.com/in/christianareas">LinkedIn</a>
				<a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="https://github.com/christianareas">GitHub</a>
				<a className="text-lg sm:text-3xl text-blue-400 underline px-5 lg:px-16 xl:px-28" href="mailto:me@areas.me">Email</a>				
			</ContentSectionWrapper>
		</ContentWrapper>
	)
}

export default Contact
