import CardBackImg from "../../public/bg-card-back.png";

const CardBack = ({ cvc = "000" }) => {
	return (
		<div className="relative z-10 top-8 lg:top-[380px] left-12 lg:left-40">
			<img
				src={CardBackImg}
				alt="card back background"
				className="w-[280px] h-[150px] lg:w-[440px] lg:h-[240px] absolute z-20 shadow-lg rounded-xl lg:shadow-xl"
			/>
			<p className="absolute top-[66px] lg:top-[108px] left-[224px] lg:left-[350px] z-40 text-[10px] lg:text-sm text-white tracking-wider lg:tracking-widest">
				{cvc}
			</p>
		</div>
	);
};

export default CardBack;
