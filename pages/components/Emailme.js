import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "react-modal";
import "../styles/ContactUs.css";
Modal.setAppElement("#root");

export default function ContactUs(props) {
	function sendEmail(e) {
		e.preventDefault();

		const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
		const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
		const USER_ID = process.env.REACT_APP_USER_ID;

		emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	const [open, setOpen] = useState(props.email);
	return (
		<div>
			<Modal
				isOpen={open}
				onRequestClose={() => setOpen(false)}
				className="contact-modal"
				overlayClassName="overlay"
			>
				<form className="form" onSubmit={sendEmail}>
					<input type="hidden" name="contact_number" />
					<label>Name</label>
					<input type="text" name="user_name" />
					<label>Email</label>
					<input type="email" name="user_email" />
					<label>Message</label>
					<textarea name="message" />
					<div className="functionality">
						<input className="send" type="submit" value="Send" />
						<button
							onClick={() => {
								setOpen(false);
								console.log(open);
							}}
						>
							X
						</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}
