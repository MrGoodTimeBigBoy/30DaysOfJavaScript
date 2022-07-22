const formatYear = String(today.getFullYear()).padStart(4,'0')
const formatMonth = today.getMonth().toString().padStart(2,'0')
const formatDay = String(today.getDate()).padStart(2,'0')
const formatHour = String(today.getHours()).padStart(2,'0')
const formatMinute = today.getMinutes().toString().padStart(2,'0')

console.log(`Date: ${formatYear}-${formatMonth}-${formatDay} ${formatHour}:${formatMinute}`)