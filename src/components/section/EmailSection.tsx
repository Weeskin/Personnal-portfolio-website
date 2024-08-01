"use client";
import GithubIcon from "../../assets/images/github-icon.svg";
import LinkedinIcon from "../../assets/images/linkedin-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SuccessPopup from "../SuccessPopup";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default function EmailSection() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
	const [successMessage, setSuccessMessage] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	const validateForm = (): boolean => {
		const errors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			errors.name = "Le nom est requis.";
		}
		if (!formData.email.trim()) {
			errors.email = "L'email est requis.";
		}
		if (!formData.subject.trim()) {
			errors.subject = "Le sujet est requis.";
		}
		if (!formData.message.trim()) {
			errors.message = "Le message est requis.";
		}

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const response = await fetch("/api/handler", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			});

			if (response.ok) {
				setSuccessMessage(true);
				setErrorMessage("");
				resetForm();
			} else {
				throw new Error("Error sending email");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			setErrorMessage(
				"Une erreur s'est produite lors de l'envoi du formulaire."
			);
		}
	};

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: ""
		});
	};

	return (
		<section
			id="contact"
			className="mx-12 px-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 my-12 py-24 gap-4 relative bg-[#18191E] rounded-lg shadow-lg p-8 xl:mx-60 xl:py-16"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full md:h-80 md:w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Restons en contact
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					Actuellement en recherche de nouvelles opportunités, n&apos;hésitez
					pas à me joindre via le formulaire de contact, je n&apos;hésiterai pas
					à vous répondre!
				</p>
				<p className="text-[#ADB7BE] mb-4 max-w-md">2 Rue Marius Charles</p>
				<p className="text-[#ADB7BE] mb-4 max-w-md">38420 Domène, France</p>
				<p className="text-[#ADB7BE] mb-4 max-w-md">[0]7 61 17 94 62</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/Weeskin">
						<Image
							src={GithubIcon}
							alt="Github Icon"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/pierre-sourice/">
						<Image
							src={LinkedinIcon}
							alt="Linkedin Icon"
						/>
					</Link>
				</div>
			</div>
			<div>
				<form
					className="flex flex-col"
					onSubmit={handleSubmit}
				>
					<div className="mb-6">
						<label
							htmlFor="name"
							className="text-white block text-sm mb-2 font-medium"
						>
							Votre nom *
						</label>
						<input
							name="name"
							type="text"
							id="name"
							value={formData.name}
							onChange={handleChange}
							className={`bg-[#18191E] border ${
								formErrors.name ? "border-red-500" : "border-[#33353F]"
							} placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
							placeholder="Toto Dupont"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium"
						>
							Votre email *
						</label>
						<input
							name="email"
							type="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							className={`bg-[#18191E] border ${
								formErrors.email ? "border-red-500" : "border-[#33353F]"
							} placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
							placeholder="jacob@google.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block text-sm mb-2 font-medium"
						>
							Sujet *
						</label>
						<input
							name="subject"
							type="text"
							id="subject"
							value={formData.subject}
							onChange={handleChange}
							className={`bg-[#18191E] border ${
								formErrors.subject ? "border-red-500" : "border-[#33353F]"
							} placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
							placeholder="Votre sujet"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm mb-2 font-medium"
						>
							Message
						</label>
						<textarea
							name="message"
							id="message"
							value={formData.message}
							onChange={handleChange}
							className={`bg-[#18191E] border ${
								formErrors.message ? "border-red-500" : "border-[#33353F]"
							} placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5`}
							placeholder="Bonjour, je suis intéressé par votre travail..."
							rows={4}
						/>
					</div>
					<button
						type="submit"
						className="bg-violet-500 hover:bg-violet-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Envoyer
					</button>
					{errorMessage && <p className="text-red-500 mt-6">{errorMessage}</p>}
					<SuccessPopup
						show={successMessage}
						onClose={() => setSuccessMessage(false)}
					/>
				</form>
			</div>
		</section>
	);
}
