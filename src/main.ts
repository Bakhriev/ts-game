import { Game } from "./game.js";
const canvas = document.querySelector(".canva");

window.addEventListener("load", () => {
	// @ts-ignore
	const game = new Game(canvas);

	const animate = () => {
		game.ctx.clearRect(0, 0, game.ctx.canvas.width, game.ctx.canvas.height);
		game.render();
		requestAnimationFrame(animate);
	};
	requestAnimationFrame(animate);
});
