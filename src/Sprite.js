class Sprite{
	constructor(config){

		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () =>{
			this.isLoaded = true;
		}


		this.animations = config.animations || {
			"right_idle": [[2,0], [0,0], [1,0]],
			"left_idle": [[2,1], [0,1], [1,1]],
			"up_idle": [[2,0], [0,0], [1,0]],
			"down_idle": [[2,1], [0,1], [1,1]],
			"left_swim":[[0,3], [1,3], [2,3]],
			"up_swim":[[0,3], [1,3], [2,3]],
			"right_swim":[[0,2], [1,2], [2,2]],
			"down_swim":[[0,2], [1,2], [2,2]],
		}
		this.currentAnimation = config.currentAnimation || "rightdown_swim";
		this.currentAnimationFrame = 0;

		this.animationFrameLimit = config.animationFrameLimit || 16;
		this.animationFrameProgress = this.animationFrameLimit;

		this.gameObject = config.gameObject;

	}

	get frame(){
		return this.animations[this.currentAnimation][this.currentAnimationFrame];
	}

	setAnimation(key){
		if (this.currentAnimation !== key){
			this.currentAnimation = key;
			this.currentAnimationFrame = 0;
			this.animationFrameProgress = this.animationFrameLimit;
		}
	}

	updateAnimationProgress(){

		if (this.animationFrameProgress > 0){
			this.animationFrameProgress -= 1;
			return;
		}

		this.animationFrameProgress = this.animationFrameLimit;
		this.currentAnimationFrame += 1;

		if (this.frame === undefined){
			this.currentAnimationFrame = 0;
		}
	}

	draw(ctx){
		const x = this.gameObject.x;
		const y = this.gameObject.y;

		const [frameX, frameY] = this.frame;
		this.isLoaded && ctx.drawImage(this.image, frameX*32, frameY*32, 32, 32, x, y, 32, 32)
		this.updateAnimationProgress();
	}

}