import CardFrontImg from "../../public/bg-card-front.png";
import CardLogo from "../../public/card-logo.svg";

const CardFront = ({
	cardNumber = "0000 0000 0000 0000",
	name = "Jane Appleseed",
	month = "00",
	year = "00",
}) => {
	return (
		<div className="relative z-20 top-28 left-4 lg:left-20">
			<img
				src={CardFrontImg}
				alt="card front background"
				className="w-[280px] lg:w-[440px] h-auto absolute z-20 shadow-lg rounded-xl lg:shadow-xl"
			/>
			<div className="absolute w-[280px] h-[150px] lg:w-[440px] lg:h-[240px] z-40 p-4 lg:p-6 flex flex-col justify-between">
				<img src={CardLogo} alt="card logo" className="w-1/5" />
				<div className="font-sans text-white">
					<p className="tracking-wider lg:text-2xl lg:tracking-[0.15em]">{cardNumber}</p>
					<div className="flex flex-row justify-between mt-6 uppercase tracking-wide lg:tracking-wider">
						<p className="text-[14px]">{name}</p>
						<p className="text-[14px] lg:tracking-widest">
							{month}/{year}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardFront;
