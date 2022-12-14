function HeroSide() {
  return (
		<div className="bg-hero-mob lg:bg-hero-desk bg-no-repeat w-full bg-cover relative h-56">
			<div className="absolute w-64 top-32 z-10 left-4">
				<img src="bg-card-front.png" alt="Credit Card Front" />

				{/* Card Logo */}
				<img
					src="card-logo.svg"
					alt="credit card logo"
					className="absolute top-4 left-4 w-2/12"
				/>

				{/* Card details */}
				<div className="w-full absolute bottom-0 text-white p-4 uppercase">
					<p className="tracking-widest">0000 0000 0000 0000</p>
					{/* User Details */}
					<div className="flex justify-between w-full mt-2">
						<p className="text-[10px] tracking-wider opacity-80">
							Jane Appleseed
						</p>
						<p className="text-[10px] tracking-wider opacity-80">00/00</p>
					</div>
				</div>
			</div>
			<div className="absolute w-64 top-10 right-4">
				<img src="bg-card-back.png" alt="Credit Card Back" />
				{/* CV */}
				<p className="absolute text-gray-100 right-8 top-16 text-[8px] opacity-80">
					000
				</p>
			</div>
		</div>
	);
}

export default HeroSide