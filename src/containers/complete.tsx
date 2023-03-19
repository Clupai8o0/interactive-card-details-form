import CompleteImg from "../../public/icon-complete.svg";

function Complete() {
	return (
		<div className="flex flex-col items-center mt-20 lg:mt-0 p-4 relative z-100">
			<img src={CompleteImg} alt="complete tick icon" />
			<div className="mt-8 mb-8 text-center flex flex-col gap-4">
				<h1 className="uppercase text-2xl tracking-wider text-very-dark-violet">
					Thank You!
				</h1>
				<p className="text-dark-grayish-violet">
					We've added your card details
				</p>
			</div>
			<button
				className="w-full bg-very-dark-violet text-white py-3 rounded-lg mt-4 hover:transform cursor-pointer focus:opacity-80 focus:scale-100 transition-all duration-200 ease-out"
				onClick={() => {
					window.location.reload();
				}}
			>
				Continue
			</button>
		</div>
	);
}

export default Complete;
