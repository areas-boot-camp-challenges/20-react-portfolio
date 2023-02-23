// React.
import React from "react"

function Mode() {
	let darkMode = true
	// let mode = "Turn On Light Mode"
	
	function toggleDarkMode() {
		darkMode = !darkMode
		console.log(darkMode)
	}
	return (
		<>
			<button onClick={toggleDarkMode}>
				{darkMode ? "Turn On Light Mode" : "Turn On Dark Mode"}
			</button>
		</>
	)
}

export default Mode
