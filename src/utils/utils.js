export const formatDate = (date) => {
  const dateObj = new Date(date)
  const month = dateObj.toLocaleString('default', { month: 'short' })
  const day = dateObj.getDate()
  const year = dateObj.getFullYear()
  return `${month} ${day}, ${year}`
}

export const getToken = () => {
  if (!localStorage.getItem('token')) return null
  return `Bearer ${localStorage.getItem('token')}`
}
