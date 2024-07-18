import { useState } from "react";
import { FaUser } from "react-icons/fa";

function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Por favor, crie uma conta</p>
			</section>

            <section className="form">
                <form action=""></form>
            </section>
		</>
	);
}

export default Register;
