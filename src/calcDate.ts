export function getNewDate() {
  return new Date()
}

export function getHour() { // HH:mm:ss
  const date = getNewDate()
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

export function getToday() { // DD-MM-YYYY
  const date = getNewDate()
  return date.toLocaleDateString()
}

export function getMonthName() { // Enero, Febrero, etc.
  const date = getNewDate()
  return date.getMonth() + 1
}

export function getDay() { // Número del día del mes + 2 (para la celda del excel)
  const date = getNewDate()
  return date.getDate() + 2
}
