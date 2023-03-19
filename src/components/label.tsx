import React from "react";

const Label = ({ text }: { text: string }) => {
	return (
		<label className="font-sans text-very-dark-violet uppercase text-xs font-medium tracking-wide">
			{text}
		</label>
	);
};

export default Label;
