const RANDOM_SIZES = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

class RandomCat {
	constructor(options = {}) {
		this.gray = options.gray ? 'g' : false;
		this.width = options.width || RANDOM_SIZES[Math.ceil(Math.random() * 12)];
		this.height = options.height || RANDOM_SIZES[Math.ceil(Math.random() * 12)];
		this.imageIndex = options.imageIndex || 0;
		this.message = options.message || '';
	}

	getURL() {
		return `https://lorempixel.com/${this.gray}/${this.width}/${this.height}/cats/${this.imageIndex}/${
			this.message
		}`;
	}
}

module.exports = RandomCat;
