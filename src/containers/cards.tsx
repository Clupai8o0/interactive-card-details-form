import { useRecoilValue } from "recoil";

import CardFront from "../components/card-front";
import CardBack from "../components/card-back";
import {
	cardNumberState,
	cvcState,
	monthState,
	nameState,
	yearState,
} from "../atoms/creditCardAtom";

function Cards({ complete }: { complete: boolean }) {
	const name = useRecoilValue(nameState);
	const cardNumber = useRecoilValue(cardNumberState);
	const month = useRecoilValue(monthState);
	const year = useRecoilValue(yearState);
	const cvc = useRecoilValue(cvcState);

	return (
		<div className="absolute top-0 w-full h-full">
			{!complete ? (
				<>
					<CardFront />
					<CardBack />
				</>
			) : (
				<>
					<CardFront
						cardNumber={cardNumber}
						name={name}
						month={month}
						year={year}
					/>
					<CardBack cvc={cvc} />
				</>
			)}
		</div>
	);
}

export default Cards;
