


export function getMesAno(data: Date) {
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = String(data.getFullYear())
  return `${mes}-${ano}`
}

const data  = getMesAno(new Date())
console.log(data)