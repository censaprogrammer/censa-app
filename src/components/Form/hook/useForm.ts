import { useState } from "react";

const useForm = () => {
	const [form, setForm] = useState({
		name: "",
		account: "",
		password: "",
		color: "#0b69a0"
	});

	const handleField = (key: string, value: string) => {
		setForm({ ...form, [key]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ form });
	};

	return { form, handleField, handleSubmit }
}

export default useForm
