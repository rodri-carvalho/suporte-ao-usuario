import { useState } from "react";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

    

	return (
		<div>
			<h1>Register</h1>
		</div>
	);
}

export default Register;
