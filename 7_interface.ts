interface user {
	readonly dbid: number;
	email: string;
	id: number;
	bank?: string; //# optional
	// startTrail: () => string,
	startTrail(): string;
	getCoupon(x: string, y: number): number;
}

//# re-opining interface
interface user {
	room?: number;
}

// # inhirtance
interface admin extends user {
	department: string;
}

const hitesh: user = {
	dbid: 2920,
	email: 'hitsh@gmail.com',
	id: 12,
	startTrail: () => {
		return '';
	},
	getCoupon: (name: 'coupon', per: 10) => {
		return 10;
	},
};
