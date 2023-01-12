import React, { useState, useEffect } from "react";

function Main() {
	const values = {
		product_name: "",
		original_price: " ",
		sale_price: " ",
		product_type: " ",
		description: " ",
	};
	const [formValue, setFormValue] = useState(values);
	const [formErr, setFormErr] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const handleChange = (e) => {
	const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const subhandler = (e) => {
		e.preventDefault();
		setFormErr(validate(formValue));
		setIsSubmit(true);
	};

	const validate = (values) => {
		const errors = {};
		if (!values.product_name) {
			errors.product_name = "Product Name is required";
		}
		if (!values.original_price) {
			errors.original_price = "Original price is required";
		}
		if (!values.sale_price) {
			errors.sale_price = "Sale Price is required";
		}
		if (!values.product_type) {
			errors.product_type = "Product Type is required";
		}
		if (!values.description) {
			errors.description = "Description is required";
		}
		return errors;
	};

	useEffect(() => {
		if (Object.keys(formErr).length === 0 && isSubmit) {
			console.log(formValue);
		}
	});

	return (
		<div>
			{Object.keys(formErr).length === 0 && isSubmit ? (
				<div> Create Success</div>
			) : (
				<pre></pre>
			)}
			<h1>Create New Product</h1>
			<form action="" onSubmit={subhandler}>
				<input
					type="text"
					name="product_name"
					placeholder="Product Name"
					value={formValue.product_name}
					onChange={handleChange}
				/>
				<p>{formErr.product_name}</p>
				<input
					type="number"
					name="original_price"
					placeholder="Original Price"
					value={formValue.original_price}
					onChange={handleChange}
				/>
				<p>{formErr.original_price}</p>
				<input
					type="number"
					name="sale_price"
					placeholder="Sale Price"
					value={formValue.sale_price}
					onChange={handleChange}
				/>
				<p>{formErr.sale_price}</p>

				<input
					type="number"
					name="product_type"
					placeholder="Product Type"
					value={formValue.product_type}
					onChange={handleChange}
				/>
				<p>{formErr.product_type}</p>

				<textarea
					name="description"
					id=""
					cols="30"
					rows="10"
					placeholder="Description"
					value={formValue.description}
					onChange={handleChange}
				></textarea>
				<p>{formErr.description}</p>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}

export default Main;
