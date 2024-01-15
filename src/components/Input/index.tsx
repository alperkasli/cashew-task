import React from "react";
import "./styles.scss";

interface IInput {
	type: string;
	name: string;
	value: any;
	onChange: (e: any) => void;
	label: string;
	required?: boolean;
}
const Input = (props: IInput) => {
	const { type, name, value, onChange, required, label } = props;
	return (
		<div className="form-group">
			<label htmlFor={`id-${name}`} className="label">
				{label}
			</label>
			<input
				id={`id-${name}`}
				className="input"
				type={type}
				name={name}
				value={value}
				required={required}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
