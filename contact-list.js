let listaContactos = ["ErikCastro", "FelipeCalvache", "abnerJimenez"]

function agregarContacto(nuevoContacto){
	listaContactos.push(nuevoContacto)
	return listaContactos
}

function borrarContacto(contactoABorrar){
	let nuevalista = listaContactos.filter((contacto) => contacto !== contactoABorrar)
	listaContactos = nuevalista

}

function imprimirContacto(){
	console.log(listaContactos);
}

imprimirContacto(agregarContacto("esteban"),borrarContacto("ErikCastro"))
// borrarContacto("ErikCastro")
// // agregarContacto("esteban")
// console.log(listaContactos);




