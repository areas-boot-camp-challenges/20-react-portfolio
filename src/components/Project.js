// React.
import React from "react"

// Component.
function Project({ title, url, github, githubUrl, image }) {
	// JSX.
	return (
		<article className="relative mb-6">
			<a href={url} alt="">
				<img src={image} alt="" />
				<div className="absolute bottom-6 sm:bottom-10 md:bottom-14 bg-white py-1 pl-2 pr-6 sm:py-2 sm:pl-3 sm:pr-10 opacity-90">
					<h3 className="text-xl sm:text-4xl font-bold">
						{title}
					</h3>
					<p className="text-sm sm:text-xl font-thin">
						<a href={githubUrl} className="text-blue-400" alt="">{github}</a>
					</p>
				</div>
			</a>
		</article>
	)
}

export default Project
