import { Game } from "./game";

export class Player {
	x;
	y;
	width;
	height;
	game;
	image;
	speedY;

	constructor(game: Game) {
		this.game = game;

		this.width = 200;
		this.height = 200;

		this.x = 20;
		this.y = this.game.canvas.height - this.height * 1.9;

		this.image = document.querySelector(".player");

		this.speedY = 1;

		this.draw();

		window.addEventListener("keydown", e => {
			if (e.key === " ") {
				if (this.y === this.game.canvas.height - this.height * 1.9) this.jump();
			}
		});
	}

	draw() {
		this.game.ctx.drawImage(
			// @ts-ignore
			this.image,
			this.x,
			this.y,
			this.width,
			this.height
		);
		this.gravity();
	}

	gravity() {
		if (this.y < this.game.canvas.height - this.height * 1.9) {
			this.speedY += 0.5;
			this.y += this.speedY;
		}
	}

	jump() {
		this.speedY = -20;
		this.y += this.speedY;
	}
}
