class Sprite{
	constructor(config){

		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () =>{
			this.isLoaded = true;
		}


		this.animations = config.animations || {
			idle: [
				[0,0]
			]
		}
		this.currentAnimation = config.currentAnimation || "idle";
		this.currentAnimationFrame = 0;
		this.gameObject = config.gameObject;

	}

	draw(ctx){
		const x = this.gameObject.x;
		const y = this.gameObject.y;

		this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32)
	}
}