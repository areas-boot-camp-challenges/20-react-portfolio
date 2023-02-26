// React.
import React from "react"

// Component.
function Navigation({ currentPage, setPage }) {
	// Page names.
	const pageNames = [
		"About",
		"Portfolio",
		"Contact",
		"Resume"
	]
	const navigationButtons = pageNames.map(pageName => (
		<button
			onClick={() => setPage(pageName)}
			key={pageName}
			className={currentPage === pageName
				? "text-2xl sm:text-4xl text-white bg-black w-32 sm:w-36 mb-0 sm:mb-5 lg:mt-5 py-1"
				: "text-2xl sm:text-4xl text-black bg-white w-32 sm:w-36 mb-0 sm:mb-5 lg:mt-5 py-1"
			}
		>
			{pageName}
		</button>
	))
	// JSX.
	return (
		<nav className="grid lg:col-span-2 grid-cols-1 sm:grid-cols-4 bg-white text-center lg:justify-self-end gap-2">
			{navigationButtons}
		</nav>
	)
}

export default Navigation
