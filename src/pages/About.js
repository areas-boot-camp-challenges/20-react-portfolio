// React.
import React from "react"

// Child components.
import ContentWrapper from "../components/ContentWrapper"
import ContentHeader from "../components/ContentHeader"
import ContentSectionWrapper from "../components/ContentSectionWrapper"

// Component.
function About() {
	const headerName = "About"
	// JSX.
	return (
		<ContentWrapper>
			<ContentHeader headerName={headerName} />
			<ContentSectionWrapper>
				<img className="max-w-xs sm:max-w-md rounded-full" src="/images/christian.jpeg" alt="" />
				<p className="text-3xl sm:text-5xl px-5 py-1 font-bold">Hello 👋🏽</p>
				<p className="text-2xl sm:text-4xl px-5 py-1">My name’s Christian</p>
				<p className="text-xl sm:text-2xl px-5 py-1 font-thin">I’m a <span className="underline">Senior Technical Writer</span> <em>(and aspiring, full-stack web developer)</em>.</p>
			</ContentSectionWrapper>
		</ContentWrapper>
	)
}

export default About
