export const toastAction = (bool,toastText) => {
	return {
		type : 'TOAST_ACTION',
		bool,
		toastText
	}
}
