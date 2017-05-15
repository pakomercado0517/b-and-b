const nodemailer= require('nodemailer')
const web= require('../../tokengmail.json')

let name= document.getElementById('name')
let mail= document.getElementById('email')
let phone= document.getElementById('phone')
let message= document.getElementById('message')

let transporter= nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		type:'OAuth2',
		user: web.client_id,
		pass:web.client_secret
	}
})

let mailOptions= {
	from: {name, email}, 
	to: 'fgme.facturacion@b-and-bconsultores.com.mx',
	subject: phone,
	text: message
}
// Envío de email

transporter.sendMail(mailOptions, function(error, info) {
	if(error){
		console.log(error)
		res.send(500, err.message)
	}
	else {
		console.log('Correo Enviado con exito')
		res.status(200).jsonp(req.body)
	}
})


module.exports= mail
