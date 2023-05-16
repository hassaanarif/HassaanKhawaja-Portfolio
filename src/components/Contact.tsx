import { ChangeEvent, FormEvent, useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		telephone: "",
		message: "",
	});

	console.log(formData);
	function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setFormData({ ...formData, [event.currentTarget.id]: event.currentTarget.value });
	}

	function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const email = "hassaanarif.ha@gmail.com";
		const subject = "Contact Form Submission";
		const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${formData.message}`)}`;

		window.location.href = mailtoUrl;
	}

	return (
		<section id="contact" className="my-20 mx-5 md:mx-36">
			<h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">CONTACT</h1>

			<form onSubmit={handleFormSubmit} className="w-[100%] md:w-[50%] mx-auto mt-10 p-5 rounded-lg bg-white bg-opacity-20 text-white ">
				<div className="w-full lg:w-12/12 px-3">
					<label className="block text-xs font-bold mb-2" htmlFor="name">
						NAME
					</label>
					<input
						id="name"
						required
						type="text"
						autoComplete="off"
						className=" px-3 py-3 text-black font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-100"
						placeholder="Name"
						value={formData.name}
						onChange={handleInputChange}
					/>
				</div>
				<div className="w-full  my-5 px-3">
					<label className="block text-xs font-bold mb-2" htmlFor="email">
						EMAIL
					</label>
					<input
						id="email"
						required
						autoComplete="off"
						type="email"
						className=" px-3 py-3 text-black font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-100"
						placeholder="Email"
						value={formData.email}
						onChange={handleInputChange}
					/>
				</div>
				<div className="w-full my-5 px-3">
					<label className="block text-xs font-bold mb-2" htmlFor="telephone">
						TELEPHONE
					</label>
					<input
						id="telephone"
						required
						autoComplete="off"
						type="tel"
						className=" px-3 py-3 text-black font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-100"
						placeholder="Telephone"
						value={formData.telephone}
						onChange={handleInputChange}
					/>
				</div>
				<div className="w-full my-5 px-3">
					<label className="block text-xs font-bold mb-2" htmlFor="message">
						MESSAGE
					</label>
					<textarea
						id="message"
						required
						autoComplete="off"
						maxLength={2000}
						rows={6}
						className="resize-none px-3 py-3 text-black font-semibold rounded-md focus:outline-none focus:ring w-full ease-linear transition-all duration-100"
						placeholder="Message"
						value={formData.message}
						onChange={handleInputChange}
					/>
				</div>
				<div className="w-full my-5 px-3 text-center">
					<button type="submit" className="py-2 w-full rounded-md bg-orange-400 text-black font-semibold">
						SUBMIT
					</button>
				</div>
			</form>
		</section>
	);
}

export default Contact;
