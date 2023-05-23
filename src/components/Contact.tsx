import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import config from "../configuration/config.json";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
	const [processing, setProcessing] = useState<boolean>(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		telephone: "",
		message: "",
	});

	function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setFormData({ ...formData, [event.currentTarget.id]: event.currentTarget.value });
	}

	async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setProcessing(true);

		axios
			.post<typeof formData>(config.FormspreeURL, { ...formData })
			.then(() => {
				setFormData({
					name: "",
					email: "",
					telephone: "",
					message: "",
				});

				toast.success("Thank you for contacting me.", {
					position: "bottom-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			})
			.catch((error) => {
				toast.error(`An error [${error.message}] occured`, {
					position: "bottom-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			})
			.finally(() => setProcessing(false));
	}

	return (
		<>
			<section id="contact" className="pb-10 px-5 md:px-36">
				<h1 className="text-center text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">CONTACT</h1>

				<form onSubmit={handleFormSubmit} className="w-[100%] md:w-[50%] mx-auto mt-10 p-5 rounded-lg bg-white bg-opacity-30 text-white ">
					<div className="w-full lg:w-12/12 px-3">
						<label className="block text-xs font-bold mb-2" htmlFor="name">
							NAME <span className="text-orange-600"> *</span>
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
							EMAIL <span className="text-orange-600"> *</span>
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
							MESSAGE <span className="text-orange-600"> *</span>
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
						<button
							type="submit"
							className={`py-2 w-full rounded-md bg-gradient-to-r from-orange-600 to-purple-600 text-white font-semibold ${
								processing ? "hover:cursor-not-allowed" : ""
							}`}
						>
							{processing ? (
								<div className="loading-dots">
									<span className="dot"></span>
									<span className="dot"></span>
									<span className="dot"></span>
								</div>
							) : (
								"SUBMIT"
							)}
						</button>
					</div>
				</form>
			</section>

			<ToastContainer />
		</>
	);
}

export default Contact;
