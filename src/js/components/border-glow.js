const hoverContainer = document.querySelector("body");
const boxBorderAll = document.querySelectorAll(".border");

if (window.innerWidth >= 1024) {
	hoverContainer.addEventListener("pointermove", (e) => {
		boxBorderAll.forEach((boxBorder) => {
			// Not optimized yet, I know
			const rect = boxBorder.getBoundingClientRect();

			boxBorder.style.setProperty("--x", e.clientX - rect.left);
			boxBorder.style.setProperty("--y", e.clientY - rect.top);
		});
	});
} else {
	window.addEventListener("scroll", (e) => {
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		boxBorderAll.forEach((boxBorder) => {
			const rect = boxBorder.getBoundingClientRect();
			boxBorder.style.setProperty("--x", centerX - rect.left);
			boxBorder.style.setProperty("--y", centerY - rect.top);
		});
	});
}
