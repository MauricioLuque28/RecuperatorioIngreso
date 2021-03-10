/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var continuar = true;

	var contadorProgramador = 0;
	var contadorAnalista = 0;
	var contadorQa = 0;
	var acumuladorSueldoProgramador = 0;
	var acumuladorSueldoAnalista = 0;
	var acumuladorSueldoQa = 0;
	var promedioSueldoProgramador;
	var promedioSueldoAnalista;
	var promedioSueldoQa;

	var banderaSexo = 0;
	var maxSueldo;
	var sexoMaxSueldo;

	var banderaFemenino = 0;
	var nombreFemeninoMaxSueldo;
	var maxSueldoFemenino;

	var contadorProgramadorNoBinario = 0;

	while (continuar == true) {
		nombre = prompt ("Ingrese el nombre:");
		while (isNaN (nombre) == false) {
			nombre = prompt ("Reingrese el nombre:");
		}

		edad = prompt ("Ingrese la edad:");
		edad = parseInt (edad);
		while (isNaN (edad) == true) {
			edad = prompt ("Reingrese la edad:");
			edad = parseInt (edad);
		}

		sexo = prompt ("Ingrese el sexo:");
		while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
			sexo = prompt ("Reingrese el sexo:");
		}

		puesto = prompt ("Ingrese el puesto:");
		while (puesto != "programador" && puesto != "analista" && puesto != "qa") {
			puesto = prompt ("Reingrese el puesto:");
		}

		sueldo = prompt ("Ingrese el sueldo:");
		sueldo = parseInt (sueldo);
		while (isNaN (sueldo) == true || sueldo < 15000 || sueldo > 70000) {
			sueldo = prompt ("Reingrese el sueldo:");
			sueldo = parseInt (sueldo);
		}

		switch (puesto) {
			case "Programador":
				contadorProgramador++;
				acumuladorSueldoProgramador = acumuladorSueldoProgramador + sueldo;
				if (sexo == "no binario" && sueldo > 20000 && sueldo < 55000) {
					contadorProgramadorNoBinario++;
				}
				break;
			case "Analista":
				contadorAnalista++;
				acumuladorSueldoAnalista = acumuladorSueldoAnalista + sueldo;
				break;
			case "Qa":
				contadorQa++;
				acumuladorSueldoQa = acumuladorSueldoQa + sueldo;
				break;
		}

		if (banderaSexo == 0) {
			maxSueldo = sueldo;
			sexoMaxSueldo = sexo;
			banderaSexo++;
		}
		else if (sueldo > maxSueldo) {
			maxSueldo = sueldo;
			sexoMaxSueldo = sexo;
		}

		if (sexo == "femenino") {
			if (banderaFemenino == 0) {
				nombreFemeninoMaxSueldo = nombre;
				maxSueldoFemenino = sueldo;
				banderaFemenino++;
			}
			else if (sueldo > maxSueldoFemenino) {
				nombreFemeninoMaxSueldo = nombre;
				maxSueldoFemenino = sueldo;
			}
		}
		
		continuar = confirm ("Desea continuar?");
	}
	while (continuar);

	// Punto A)
	if (contadorProgramador > 0) {
		promedioSueldoProgramador = acumuladorSueldoProgramador / contadorProgramador;
		document.write ("El sueldo promedio del puesto de Programador es " + promedioSueldoProgramador + "<br>")
	}
	else {
		document.write ("No hubo ingresos en el puesto de Programador <br>")
	}

	if (contadorAnalista > 0) {
		promedioSueldoAnalista = acumuladorSueldoAnalista / contadorAnalista;
		document.write ("El sueldo promedio del puesto de Programador es " + promedioSueldoAnalista + "<br>")
	}
	else {
		document.write ("No hubo ingresos en el puesto de Analista <br>")
	}

	if (contadorQa > 0) {
		promedioSueldoQa = acumuladorSueldoQa / contadorQa;
		document.write ("El sueldo promedio del puesto de Programador es " + promedioSueldoQa + "<br>")
	}
	else {
		document.write ("No hubo ingresos en el puesto de Qa <br>")
	}

	// Punto B)
	if (banderaSexo > 0) {
		document.write ("El sexo que percibe mayor sueldo es " + sexoMaxSueldo + "<br>")
	}

	// Punto C)
	if (banderaFemenino > 0) {
		document.write ("El nombre de sexo femenino que percibe mayor sueldo es " + nombreFemeninoMaxSueldo + "<br>")
	}
	else {
		document.write ("No se contabilizo ingresos de sexo femenino <br>")
	}

	// Punto D)
	if (contadorProgramadorNoBinario > 0) {
		document.write ("La cantidad de programadores de sexo no binario es " + contadorProgramadorNoBinario + "<br>")
	}
	else {
		document.write ("No se contabilizo ingresos de sexo no binario")
	}

}
