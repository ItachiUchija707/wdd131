let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesB = names.filter(name => name.charAt(0) === 'B');

let mapped = names.map((nm) => nm.length);

let average = names.reduce((accumulator, nameValue) => {accumulator + (nameValue.length / names.length);}, 0);

