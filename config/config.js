
let form= req.body.form

let db= firebase.database()

let formInputs= db.ref('form-inputs').push
 formInputs.set({
	name:'',
	phone:'',
	email: '',
	message: ''
})

module.exports= formInputs
