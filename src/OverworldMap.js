class OverworldMap{
	constructor(config){
		this.gameObjects = config.gameObjects;

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;
	}

	drawLowerImage(ctx){
		ctx.drawImage(this.lowerImage,0,0);
	}

	drawUpperImage(ctx){
		ctx.drawImage(this.upperImage,0,0);
	}
}


window.OverworldMaps = {
	map1:{
		lowerSrc:"assets/img/ocean.png",
		upperSrc:"assets/img/fish.png",
		gameObjects:{
			fish:new MovingObject({
				x:utils.withGrid(5),
				y:utils.withGrid(6),
				isPlayerControlled: true,
			}),
			turtle: new MovingObject({
				x:utils.withGrid(1),
				y:utils.withGrid(4),
				src:"assets/img/turtle.png"
			})
		}
	}
}