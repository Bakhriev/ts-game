import { Game } from "./game";

export class Background {
	image;
	image2;
	x;
	y;
	width;
	height;
	speedX;
	game;

	constructor(game: Game) {
		this.image = document.querySelector(".ground");
		this.image2 = document.querySelector(".ground2");
		this.x = 0;
		this.y = 0;
		this.width = 2500;
		this.height = 720;
		this.speedX = 1;
		this.game = game;

		this.draw();

		window.addEventListener("keydown", e => {
			if (e.key.toLocaleLowerCase() === "shift") this.speedX = 2;
		});

		window.addEventListener("keyup", e => {
			if (e.key.toLocaleLowerCase() === "shift") this.speedX = 1;
		});
	}

	draw() {
		this.game.ctx.drawImage(
			this.image,
			this.x,
			this.y,
			this.width,
			this.height
		);
		this.game.ctx.drawImage(
			this.image2,
			this.x + this.width,
			this.y,
			this.width,
			this.height
		);
		this.move();
	}

	move() {
		if (this.x < -2000) {
			this.x = 0;
		}
		this.x -= this.speedX;
	}
}
