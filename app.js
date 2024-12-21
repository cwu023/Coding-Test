const links = document.querySelectorAll("a");
const contentMap = {
	dermalFillers: document.querySelector("#dermalFillersContent"),
	coolSculpting: document.querySelector("#coolSculptingContent"),
	qwo: document.querySelector("#qwoContent"),
	advancedlasers: document.querySelector("#advancedlasersContent"),
	microneedling: document.querySelector("#microneedlingContent"),
	botox: document.querySelector("#botoxContent"),
};

function hideAllContent() {
	Object.values(contentMap).forEach((content) =>
		content.classList.add("hidden")
	);
}

links.forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();

		links.forEach((link) => link.classList.remove("active"));
		link.classList.add("active");

		hideAllContent();

		const content = contentMap[link.id];
		if (content) {
			content.classList.remove("hidden");
		}
	});
});
