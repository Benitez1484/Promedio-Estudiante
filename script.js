// Función factory para crear estudiantes
const crearEstudiante = (nombre, edad, nota1, nota2, nota3) => ({
    nombre,
    edad,
    nota1,
    nota2,
    nota3,
    calcularPromedio: function() {
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    },
    mostrarDatos: function(estudianteNumero, callback) {
        setTimeout(() => {
            const datos = `
                Nombre: ${this.nombre}
                Edad: ${this.edad}
                Nota 1: ${this.nota1}
                Nota 2: ${this.nota2}
                Nota 3: ${this.nota3}
                Promedio: ${this.calcularPromedio().toFixed(2)}
            `;
            callback(estudianteNumero, datos);
        }, 5000);
    }
});

let contadorEstudiantes = 0;

// Manejador del formulario
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    const estudiante = crearEstudiante(nombre, edad, nota1, nota2, nota3);

    contadorEstudiantes++;

    const numeroEstudianteActual = contadorEstudiantes;

    const studentCard = document.createElement('div');
    studentCard.className = 'student-card';
    studentCard.innerHTML = `<h2>Estudiante ${numeroEstudianteActual}</h2><p>Cargando datos del estudiante...</p>`;
    document.getElementById('studentList').appendChild(studentCard);

    estudiante.mostrarDatos(numeroEstudianteActual, (num, datos) => {
        studentCard.innerHTML = `<h2>Estudiante ${num}</h2><pre>${datos}</pre>`;
    });

    // Limpiar el formulario
    this.reset();
});
