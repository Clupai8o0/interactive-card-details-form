import BGMobile from "../../public/bg-main-mobile.png";
import BGDesktop from "../../public/bg-main-desktop.png";

const BG = () => {
	return (
		<>
			{/* Mobile */}
			<img src={BGMobile} className="lg:hidden w-full h-auto" alt="background" />

			{/* Desktop */}
			<img src={BGDesktop} className="hidden lg:block max-h-[100vh] w-auto" alt="background" />
		</>
	);
};

export default BG;
