import { Background } from "./background";
import { Player } from "./player";

export class Game {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	player;
	background;

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		// @ts-ignore
		this.ctx = canvas.getContext("2d");
		this.canvas.width = window.innerWidth;
		this.canvas.height = 720;
		this.player = new Player(this);
		this.background = new Background(this);
	}

	render() {
		this.background.draw();
		this.player.draw();
	}
}
