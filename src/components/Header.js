// React.
import React from "react"

// Child components.
import Navigation from "./Navigation"

// Component.
function Header({ pageNames }) {
	// JSX.
	return (
		<header
			className="grid grid-cols-1 lg:grid-cols-3 bg-white justify-items-center gap-2">
			<a
				className="text-5xl sm:text-7xl text-black lg:justify-self-start mt-5 lg:mt-0 px-5 py-1"
				href="/">
					areas.me
			</a>
			<Navigation pageNames={pageNames} />
		</header>
  )
}

export default Header
