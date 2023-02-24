// React.
import React from "react"

// Component.
function ContentSectionWrapper({ children }) {
	// JSX.
	return (
		<section className="lg:col-span-4 text-center lg:text-left lg:border-l-4 lg:border-black lg:pl-5">
			{children}
		</section>
	)
}

export default ContentSectionWrapper
