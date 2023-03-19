import { Dispatch, SetStateAction } from "react";

const Input = ({
	placeholder,
	value,
	setValue,
	isValid,
}: {
	placeholder: string;
	value: string | number;
	setValue: Dispatch<SetStateAction<string>>;
	isValid?: string;
}) => (
	<div>
		<input
			value={value}
			placeholder={placeholder}
			onChange={(e) => {
				setValue(e.target.value);
			}}
			className={`mt-1 w-full px-3 py-2 rounded-lg text-base text-[18px] placeholder:opacity-50 placeholder:text-dark-grayish-violet placeholder:font-sans outline-none focus:border-2 focus:border-input-from ${
				!isValid ? "border border-light-grayish-violet" : "border-2 border-error"
			}`}
			required
		/>
		<label className={`font-sans text-error text-xs leading-[4px] ${!isValid && "hidden"}`}>
			{isValid}
		</label>
	</div>
);

export default Input;
