const RANDOM_SIZES = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

class RandomCat {
	constructor(options = {}) {
		this.gray = options.gray ? 'g' : false;
		this.width = options.width || RANDOM_SIZES[Math.ceil(Math.random() * 12)];
		this.height = options.height || RANDOM_SIZES[Math.ceil(Math.random() * 12)];
		this.imageIndex = options.imageIndex;
		this.message = options.message;
	}

	getURL() {
		return `https://lorempixel.com/${this.width}/${this.height}/${this.category}/cats/${this.imageIndex}`;
	}
}

module.exports = RandomCat;
