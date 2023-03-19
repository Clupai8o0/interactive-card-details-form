import { Dispatch, SetStateAction, useState } from "react";
import valid from "card-validator";
import { useRecoilState } from "recoil";

import Input from "../components/input";
import Label from "../components/label";
import {
	cardNumberState,
	cvcState,
	monthState,
	nameState,
	yearState,
} from "../atoms/creditCardAtom";

function Form({
	setComplete,
}: {
	setComplete: Dispatch<SetStateAction<boolean>>;
}) {
	const [name, setName] = useRecoilState(nameState);
	const [cardNumber, setCardNumber] = useRecoilState(cardNumberState);
	const [month, setMonth] = useRecoilState(monthState);
	const [year, setYear] = useRecoilState(yearState);
	const [cvc, setCvc] = useRecoilState(cvcState);

	const [isNameValid, setIsNameValid] = useState("");
	const [isCardNumberValid, setIsCardNumberValid] = useState("");
	const [isMonthValid, setIsMonthValid] = useState("");
	const [isYearValid, setIsYearValid] = useState("");
	const [isCVCValid, setIsCVCValid] = useState("");

	const hasAlphabets = (data: string) => /[a-zA-Z]/g.test(data);

	const validatorName = () => {
		if (name.length === 0) setIsNameValid("Name cannot be empty");
		else setIsNameValid("");
	};

	const validatorCardNumber = () => {
		if (!valid.number(cardNumber).isValid) {
			if (cardNumber.length === 0)
				setIsCardNumberValid("Card number cannot be empty");
			else if (hasAlphabets(cardNumber))
				setIsCardNumberValid("Wrong format, cannot contain letters");
			else setIsCardNumberValid("Card number is not valid");
		} else setIsCardNumberValid("");
	};

	const validatorMonth = () => {
		if (!valid.expirationMonth(month).isValid) {
			if (month.length === 0) setIsMonthValid("Can't be blank");
			else if (hasAlphabets(month)) setIsMonthValid("No letters");
			else setIsMonthValid("Invalid month");
		} else setIsMonthValid("");
	};
	const validatorYear = () => {
		if (!valid.expirationYear(year).isValid) {
			if (year.length === 0) setIsYearValid("Can't be blank");
			else if (hasAlphabets(year)) setIsYearValid("No letters");
			else setIsYearValid("Invalid year");
		} else setIsYearValid("");
	};

	const validatorCVC = () => {
		if (!valid.cvv(cvc).isValid) {
			if (cvc.length === 0) setIsCVCValid("Can't be blank");
			else if (hasAlphabets(cvc)) setIsCVCValid("No letters");
			else setIsCVCValid("Invalid CVC");
		} else setIsCVCValid("");
	};

	const purgeCardNumber = () => {
		let final = "";
		cardNumber
			.split("-")
			.join("")
			.split("")
			.forEach((c, i) => {
				if (i % 4 === 0) final += " ";
				final += c;
			});
		setCardNumber(final);
	};

	return (
		<form
			className="w-full lg:max-w-sm p-4 flex flex-col gap-3 mt-20 lg:mt-0 relative z-100"
			onSubmit={(e) => {
				e.preventDefault();
				if (
					!isNameValid &&
					!isCardNumberValid &&
					!isMonthValid &&
					!isYearValid &&
					!isCVCValid
				) {
					purgeCardNumber();
					setComplete(true);
				}
			}}
		>
			<div>
				<Label text="Cardholder name" />
				<Input
					placeholder="e.g. Jane Appleseed"
					value={name}
					setValue={setName}
					isValid={isNameValid}
				/>
			</div>

			<div>
				<Label text="Card Number" />
				<Input
					placeholder="e.g. 1234 5678 9123 0000"
					value={cardNumber}
					setValue={setCardNumber}
					isValid={isCardNumberValid}
				/>
			</div>

			<div className="flex gap-2">
				<div className="w-1/2">
					<Label text="Exp. Date (mm/yy)" />
					<div className="flex gap-2">
						<Input
							placeholder="MM"
							value={month}
							setValue={setMonth}
							isValid={isMonthValid}
						/>
						<Input
							placeholder="YY"
							value={year}
							setValue={setYear}
							isValid={isYearValid}
						/>
					</div>
				</div>
				<div className="w-1/2">
					<Label text="cvc" />
					<Input
						placeholder="e.g. 123"
						value={cvc}
						setValue={setCvc}
						isValid={isCVCValid}
					/>
				</div>
			</div>

			<button
				type="submit"
				onClick={() => {
					validatorName();
					validatorCardNumber();

					validatorMonth();
					validatorYear();
					validatorCVC();
				}}
				className="w-full bg-very-dark-violet text-white py-3 rounded-lg mt-4 hover:transform cursor-pointer focus:opacity-80 focus:scale-100 transition-all duration-200 ease-out"
			>
				Confirm
			</button>
		</form>
	);
}

export default Form;
