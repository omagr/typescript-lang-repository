// # you can think it as of protocol which always have to follow by others
interface TakePhoto {
	Mode: String;
	Filter: String;
	Location?: string;
	burst: number;
}

// # now IOS have to follow these protocols
// # so it will implement it
// ? what you do with these protocols or how you gonna take use is not defined in interface, interface dont involves the definition it always inclined that these are must have things in order to have it.

class IOS implements TakePhoto {
	constructor(
		public Mode: String,
		public Filter: String,
		public burst: number // public bursst: string // # name and type should be same
	) {}
}

interface TakeVideo {
	createVideo(): string;
}

class MUI implements TakePhoto, TakeVideo {
	constructor(public Mode: String, public Filter: String, public burst: number, public selfie: string) {}

	createVideo(): string {
		return '';
	}
}
