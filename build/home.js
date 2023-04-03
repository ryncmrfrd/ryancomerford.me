// all of the code creating the scrolling pages effect
const pg = new pageination("#elem", {
	dots: { type: "right", theme: "dark" },
	onPageChange: (pageName, pageIndex) => {
		window.location.hash = pageName;
	}
});