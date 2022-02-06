class MovingObject extends GameObject {
	constructor(config){
		super(config);
		this.movingProgressRemaining = 0;
		this.lr = "right";
		this.directionUpdate = {
			"up":["y", -1],
			"down": ["y", 1],
			"left":["x",-1],
			"right":["x",1],
		}
		this.isPlayerControlled = config.isPlayerControlled || false;
	}

	updateLR(state){
		if (state.arrow === "left"){
				this.lr = "left";
		}
		else if (state.arrw === "right"){
				this.lr = "right";
		}
		console.log(this.lr)
	}


	update(state){

		this.updatePosition();
		this.updateSprite(state);

		if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow){
			this.direction = state.arrow;
			this.movingProgressRemaining = 8;
		}


	}

	updatePosition(){
		if (this.movingProgressRemaining > 0){
			const [property, change] = this.directionUpdate[this.direction];
			this[property] += change;
			this.movingProgressRemaining -= 1;
		}
	}

	updateSprite(state){
		if (this.movingProgressRemaining === 0 && !state.arrow){
			this.sprite.setAnimation(this.direction+"_idle");
			return;
		}
		if (this.movingProgressRemaining > 0){
			this.sprite.setAnimation(this.direction + "_swim");
		}
	}

}
