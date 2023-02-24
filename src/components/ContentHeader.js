// React.
import React from "react"

// Component.
function ContentHeader({ headerName }) {
	// JSX.
	return (
		<header className="lg:justify-self-end">
			<h2 className="text-3xl sm:text-5xl border-b-4 lg:border-b-0 border-black px-16 py-1 lg:px-0">{headerName}</h2>
		</header>
	)
}

export default ContentHeader
