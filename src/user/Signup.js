import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signup = () => {
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		error: "",
		success: false,
	});

	const { name, email, password, error, success } = values;

	const signUpForm = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
						<div className="form-group">
							<label className="text-light">Name</label>
							<input className="form-control" type="text" />
						</div>
						<div className="form-group">
							<label className="text-light">Email</label>
							<input className="form-control" type="email" />
						</div>
						<div className="form-group">
							<label className="text-light">password</label>
							<input className="form-control" type="password" />
						</div>
						<button className="btn btn-success btn-block">Submit</button>
					</form>
				</div>
			</div>
		);
	};
	return (
		<Base title="sign Up here" description="a page for user to sign up!">
			<h1>Signup Works</h1>
			{signUpForm()}
		</Base>
	);
};

export default Signup;
