import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
	const signInForm = () => {
		return (
			<div className="row">
				<div className="col-md-6 offset-sm-3 text-left">
					<form>
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
		<Base title="sign In here" description="a page for user to sign In!">
			<h1>Sign In Works</h1>
			{signInForm()}
		</Base>
	);
};

export default Signin;
