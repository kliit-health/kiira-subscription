export const cleanPhoneNumber = number => {
	let cleaned = ('' + number).replace(/\D/g, '')
	let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
	return match ? cleaned : null
}
