class DayTime {
	constructor(seconds = 0) {
		this.setTotalSeconds(seconds);
	}
	static now() {
		const now = new Date(Date.now());
		const seconds = now.getSeconds();
		const minutes = now.getMinutes();
		const hours = now.getHours();
		return new DayTime(hours * 3600 + minutes * 60 + seconds);
	}
	getTimeFormatted(separator = ':') {
		let dayHours = this.getDayHours(this.seconds);
		let dayMinutes = this.getDayMinutes(this.seconds);
		let daySeconds = this.getDaySeconds(this.seconds);

		if (dayHours < 10) {
			dayHours = `0${dayHours}`;
		}
		if (dayMinutes < 10) {
			dayMinutes = `0${dayMinutes}`;
		}
		if (daySeconds < 10) {
			daySeconds = `0${daySeconds}`;
		}

		return `${dayHours}${separator}${dayMinutes}${separator}${daySeconds}`;
	}
	getDaySeconds() {
		const hours = this.getDayHours(this.seconds);
		const minutes = this.getDayMinutes(this.seconds);
		return this.seconds - hours * 3600 - minutes * 60;
	}
	getDayMinutes() {
		const dayHours = this.getDayHours(this.seconds);
		const secondsMinusHours = this.seconds - dayHours * 3600;
		return Math.floor(secondsMinusHours / 60);
	}
	getDayHours() {
		return Math.floor(this.seconds / 3600);
	}
	getTotalSeconds() {
		return this.seconds;
	}
	getTotalMilliseconds() {
		return this.seconds * 1000;
	}
	setTotalSeconds(seconds) {
		this.isValidSecondsRange(seconds);
		this.seconds = seconds;
	}
	setTotalMilliseconds(milliseconds) {
		const seconds = milliseconds / 1000;
		this.isValidSecondsRange(seconds);
		this.seconds = seconds;
	}
	addHours(hours) {
		this.setTotalSeconds(this.seconds + hours * 3600);
	}
	addMinutes(minutes) {
		this.setTotalSeconds(this.seconds + minutes * 60);
	}
	addSeconds(seconds) {
		this.setTotalSeconds(this.seconds + seconds);
	}
	subHours(hours) {
		this.setTotalSeconds(this.seconds - hours * 3600);
	}
	subMinutes(minutes) {
		this.setTotalSeconds(this.seconds - minutes * 60);
	}
	subSeconds(seconds) {
		this.setTotalSeconds(this.seconds - seconds);
	}
	isValidSecondsRange(seconds) {
		if (seconds < 0 || seconds > 86400) {
			throw new Error(
				`The value (seconds: ${seconds}) is out of range`,
				seconds
			);
		}
		return true;
	}

	toString() {
		return this.getTimeFormatted();
	}
}

module.exports = {
	DayTime,
};
