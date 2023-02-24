// React.
import React from "react"

// Component.
function ContentWrapper({ children }) {
	// JSX.
	return (
		<section>
			<article className="grid grid-cols-1 lg:grid-cols-5 justify-items-center lg:justify-items-start gap-5 m-5">
				{children}
			</article>
		</section>
	)
}

export default ContentWrapper
