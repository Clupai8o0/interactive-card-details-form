const cardNumber = "4507-2343-1290-1866";
let final = "";
cardNumber
	.split("-")
	.join("")
  .split("")
	.forEach((c, i) => {
		if (i % 4 === 0) final += " ";
		final += c;
	});
console.log(final);
console.log("4507 ,234 3,12 90,1 866")
