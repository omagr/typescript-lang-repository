// how to restricted choice ?

// - all of them should be unique values
//- number are being auto calculated
//- deafult is starts from 0

enum Nums {
	a, // 0
	b, // 1
	c, // 2
	'd', // 3
}
// Nums.a => 0
// Nums['d'] => 3

// we can change the pos also
enum Nums2 {
	a, // 0
	b, // 1
	c = 10, // 10
	d, // 11
	e, // 12
	f = 22, // 12
	g = 54, // 12
	h, // 15
}

// we can change the value also
enum Str {
	a = 'a', // a
	b = 'b', // b
	c = 3, // 2
	d, // 4
	e = 'e', // b
	// f, //! cant leave it alone now
}
