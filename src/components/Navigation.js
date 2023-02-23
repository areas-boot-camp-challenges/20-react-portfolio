// React.
import React from "react"

// Component.
function Navigation({ pageNames }) {
	// Navigation links.
	const navLinks = pageNames.map((pageName, index) => {
		return (
			<a
				className="text-2xl sm:text-4xl text-white bg-black w-28 sm:w-36 mb-0 sm:mb-5 lg:mt-5 py-1"
				href={"#" + pageName.toLowerCase()}
				key={index}>
					{pageName}
			</a>
		)
	})

	// JSX.
	return (
		<nav
			className="grid lg:col-span-2 grid-cols-1 sm:grid-cols-4 bg-white text-center lg:justify-self-end gap-2">
				{navLinks}
		</nav>
	)
}

export default Navigation
