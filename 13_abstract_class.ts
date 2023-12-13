abstract class TakePhoto {
	constructor(public Mode: String, public Filter: String) {}

	// saveToGal(): void // # Function implementation is missing or not immediately following the declaration.

	// ! both of them are not in interfaces
	// @ some mehtod that are compulsory lead to there, so make those abstract
	abstract saveToGal(): void;
	// @ some of them you can make features bu default
	seePhoto(): void {
		console.log('photo');
	}
}
//# Cannot create an instance of an abstract class
const nokia = new TakePhoto('test1', 'teste2');

class IOS extends TakePhoto {
	constructor(
		public Mode: String,
		public Filter: String,
		public burst?: number // # optional
	) {
		//# in super you have to pass all required values of parent class
		super(Mode, Filter);
	}
	saveToGal(): void {
		console.log('');
	}
}
const iphone13 = new IOS('test1', 'teste2');
iphone13.seePhoto(); //# photo
