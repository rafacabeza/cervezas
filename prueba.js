const alumnos = [
  {
    nombre: 'pepe',
    apellido: 'perez'
  },
  {
    nombre: 'juan',
    apellido: 'perezoso'
  }
]

const losPepe = alumnos.filter(
  (alumno) => { return alumno.nombre === 'pepe' }
)
// cambiando notación
const losPepe2 = alumnos.filter(
  alumno => (alumno.nombre === 'pepe')
)

console.log(losPepe)
console.log(losPepe2)
