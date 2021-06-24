import { firestore, functions } from './initializer'

export const firebaseFetch = (collectionName, conditions = [], limit = 10000) =>
	new Promise((resolve, reject) =>
		(async function () {
			try {
				let query = firestore.collection(collectionName)
				for (let condition of conditions) {
					const { key, operator, value } = condition
					query = query.where(key, operator, value)
				}
				const response = await query.limit(limit).get()
				const data = response.docs.map(item => ({
					...item.data(),
					id: item.id
				}))
				resolve(data)
			} catch (error) {
				reject(error)
			}
		})()
	)

export const processPayment = ({
	paymentMethod,
	email,
	plan,
	displayName,
	phoneNumber,
	postalCode
}) =>
	new Promise((resolve, reject) =>
		(async function () {
			const processPayment = functions.httpsCallable('processPlanPayment')
			try {
				const response = await processPayment({
					paymentMethod,
					email,
					plan,
					displayName,
					phoneNumber,
					postalCode
				})
				resolve(response.data)
			} catch (error) {
				reject(error.details)
			}
		})()
	)

export const verifyEmailAddress = email =>
	new Promise((resolve, reject) =>
		(async function () {
			const callable = functions.httpsCallable('verifyEmailAddress')
			try {
				const result = await callable({ email })

				if ('errorInfo' in result.data) {
					if (result.data.errorInfo.code === 'auth/user-not-found') {
						resolve(true)
					}
				} else {
					resolve(false)
				}
			} catch (error) {
				reject(false)
			}
		})()
	)

export const createCustomer = details =>
	new Promise((resolve, reject) =>
		(async function () {
			const createCustomer = functions.httpsCallable('createCustomer')
			try {
				const customer = await createCustomer(details)
				resolve(customer.data)
			} catch (error) {
				reject(error.details)
			}
		})()
	)
