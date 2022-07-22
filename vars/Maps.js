function getAdmins(map)  {
	let admins = [];
	for ([key, value] of map) {
		if (value === 'Admin') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

usuarios.set('James', 'Admin');
usuarios.set('Marcos', 'Admin');
usuarios.set('Angela', 'Admin');
usuarios.set('Maria', 'User');

console.log(getAdmins(usuarios));