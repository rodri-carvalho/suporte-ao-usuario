import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { name, email, password, passd2 } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("As senhas não correspondem");
		}
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Register
				</h1>
				<p>Por favor, crie uma conta</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							id="name"
							name="name"
							value={name}
							onChange={onChange}
							placeholder="Insira seu nome"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							onChange={onChange}
							placeholder="Insira seu email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							onChange={onChange}
							placeholder="Insira uma senha"
							required
						/>
					</div>
					<div className="form-group">
						<input
							type="password2"
							className="form-control"
							id="password2"
							name="password2"
							value={password2}
							onChange={onChange}
							placeholder="Confirme a senha"
							required
						/>
					</div>
					<div className="form-group">
						<button className="btn btn-block">Registrar</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
