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

export const processPlanPayment = ({
	paymentMethod,
	paymentIntent,
	details,
	planId
}) =>
	new Promise((resolve, reject) =>
		(async function () {
			const processPlanPayment = functions.httpsCallable('processPlanPayment')
			try {
				const response = await processPlanPayment({
					paymentMethod,
					paymentIntent,
					details,
					planId
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
				const response = await callable({ email })
				resolve(response.data)
			} catch (error) {
				reject(error.details)
			}
		})()
	)

export const createSubscriptionApplication = details =>
	new Promise((resolve, reject) =>
		(async function () {
			const createSubscriptionApplication = functions.httpsCallable(
				'createSubscriptionApplication'
			)
			try {
				const application = await createSubscriptionApplication(details)
				resolve(application.data)
			} catch (error) {
				reject(error.details)
			}
		})()
	)
