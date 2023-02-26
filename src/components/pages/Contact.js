// React.
import React, { useState } from "react"

// Component.
function Contact() {
	// Input values.
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	
	// Error messages.
	const [nameErrorMessage, setNameErrorMessage] = useState("")
	const [emailErrorMessage, setEmailErrorMessage] = useState("")
	const [messageErrorMessage, setMessageErrorMessage] = useState("")
	
	// Set the input value.
	function setInputValue(e) {
		const inputName = e.target.name
		const inputValue = e.target.value
		
		if (inputName === "name") {
			setName(inputValue)
		} else if (inputName === "email") {
			setEmail(inputValue)
		} else if (inputName === "message") {
			setMessage(inputValue)
		}
	}
	
	// Validate name input.
	function validateNameInput() {
		if (!name) {
			setNameErrorMessage("You must enter a name.")
		} else {
			setNameErrorMessage("")
		}
	}

	// Validate email.
	function validateEmail(email) {
		const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regEx.test(String(email).toLowerCase())
	}

	// Validate email input.
	function validateEmailInput() {
		if (!email) {
			setEmailErrorMessage("You must enter an email.")
		} else if (!validateEmail(email)) {
			setEmailErrorMessage("You must enter a valid email.")
		} else {
			setEmailErrorMessage("")
		}
	}

	// Validate message input.
	function validateMessageInput() {
		if (!message) {
			setMessageErrorMessage("You must enter a message.")
		} else {
			setMessageErrorMessage("")
		}
	}

	// JSX.
	return (
	<>
		<p className="font-thin pb-3">
			Send me a message:
		</p>
		<form>
			<input
				name="name"
				type="text"
				placeholder="Enter your name."
				value={name}
				onChange={setInputValue}
				onBlur={validateNameInput}
				className="block w-full border border-gray-300 rounded-lg font-thin mb-2 p-4"
			/>
			{nameErrorMessage && (
				<p className="text-sm italic text-red-500 px-4 pb-3">
					{nameErrorMessage}
				</p>
			)}
			<input
				name="email"
				type="email"
				placeholder="Enter your email."
				value={email}
				onChange={setInputValue}
				onBlur={validateEmailInput}
				className="block w-full border border-gray-300 rounded-lg font-thin mb-2 p-4"
			/>
			{emailErrorMessage && (
				<p className="text-sm italic text-red-500 px-4 pb-3">
					{emailErrorMessage}
				</p>
			)}
			<textarea
				name="message"
				placeholder="Enter your message."
				value={message}
				onChange={setInputValue}
				onBlur={validateMessageInput}
				className="block w-full border border-gray-300 rounded-lg font-thin mb-2 p-4"
			>
			</textarea>
			{messageErrorMessage && (
				<p className="text-sm italic text-red-500 px-4 pb-3">
					{messageErrorMessage}
				</p>
			)}
			<button
				type="button"
				className="block w-full border rounded-lg border-black font-medium mb-2 p-4"
			>
				Submit
			</button>
		</form>
	</>
	)
}

export default Contact
