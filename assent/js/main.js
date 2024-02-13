document.write('<p>Estadisticas centro medico ñuñoa</p>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//1. Agregar las siguientes horas al arreglo de Traumatología

let nuevasHorasTraumatologia = [
    { hora: "09:00", especialista: "DR. RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "DR. MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "DR. RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "DR. ANTONIO LARENAS", paciente: "PABLO LOAYZA", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "DR. MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
];

traumatologia = traumatologia.concat(nuevasHorasTraumatologia);
console.log("1. Agregar las siguientes horas al arreglo de Traumatología");
console.log(traumatologia);


//2. Eliminar el primer y ultimo elemento de arreglo radiologia

radiologia.shift(); 
radiologia.pop();
console.log("2. Eliminar el primer y ultimo elemento de arreglo radiologia");
console.log(radiologia);


//3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime 
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo 
// separando por un guión cada dato desplegado y cada fila de información debe estar 
// separada por un párrafo 

document.write("Tarea3");

dental.forEach(function(consulta) {
    document.write("<p>" + consulta.hora + " - " + consulta.especialista + " - " + consulta.paciente + " - " + consulta.rut + " - " + consulta.prevision + "</p>");
    document.write("<hr>");
});

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. 
// Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo

let todosLosPacientes = [];

todosLosPacientes = todosLosPacientes.concat(
  dental.map((consulta) => consulta.paciente)
);
todosLosPacientes = todosLosPacientes.concat(
  traumatologia.map((consulta) => consulta.paciente)
);
todosLosPacientes = todosLosPacientes.concat(
  radiologia.map((consulta) => consulta.paciente)
);
document.write("Tarea4");
todosLosPacientes.forEach(function (paciente) {
  document.write("<p>" + paciente + "</p>");
});

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas 
// de Dental

let pacientesISAPRE = dental.filter(
  (consulta) => consulta.prevision === "ISAPRE"
);
document.write("Tarea5");
pacientesISAPRE.forEach(function (consulta) {
  document.write("<p>" + consulta.paciente + " - ISAPRE</p>");
});

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas 
// de Traumatología

let pacientesFONASA = traumatologia.filter(
    (consulta) => consulta.prevision === "FONASA"
  );
  document.write("Tarea6");
  pacientesFONASA.forEach(function (consulta) {
    document.write("<p>" + consulta.paciente + " - FONASA</p>");
  });