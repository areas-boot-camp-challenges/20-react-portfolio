// React.
import React from "react"

// Component.
function About() {
	// JSX.
	return (
		<div className="text-center lg:text-left ">			
			<img className="mx-auto lg:mx-0 max-w-xs sm:max-w-md rounded-full" src="/images/christian.jpeg" alt="" />
			<p className="text-3xl sm:text-5xl px-5 py-1 font-bold">
				Hello 👋🏽
			</p>
			<p className="text-2xl sm:text-4xl px-5 py-1">
				My name’s Christian
			</p>
			<p className="text-xl sm:text-2xl px-5 py-1 font-thin">
				I’m a <span className="underline">Senior Technical Writer</span> and aspiring, full-stack, web developer.
			</p>			
		</div>
	)
}

export default About
