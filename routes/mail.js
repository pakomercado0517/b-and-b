let nodeMailer= require('nodemailer')

exports.sendEmail= function(req,res) {
	let transporter= nodemailer.createTransport({
		service: 'Gmail'
		auth: {
			user: 'sissyyayle0517@gmail.com'
			pass:'chisqueado0517'
		}
	})
}

let mailOptions= {
	from: name 
	to: 'fgme.facturacion@b-and-bconsultores.com.mx'
	subject: phone
	text: message
}
// Envío de email

transport.sendMail(mailOptions, function(error, info) {
	if(error){
		console.log(error)
		res.send(500, err.message)
	}
	else {
		console.log('Correo Enviado con exito')
		res.status(200).jsonp(req.body)
	}
})

