import { atom } from "recoil";

export const nameState = atom({
	key: "creditCardName",
	default: "",
});
export const cardNumberState = atom({
	key: "creditCardNumber",
	default: "",
});
export const monthState = atom({
	key: "creditCardMonth",
	default: "",
});
export const yearState = atom({
	key: "creditCardYear",
	default: "",
});
export const cvcState = atom({
	key: "creditCardCVC",
	default: "",
});
