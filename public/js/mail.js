var fireMail= require('fire-mail')
var nodemailer= require('nodemailer')

var name= name
var email= email
var phone= phone
var message= message 


var smtpTransport= nodemailer.createTransport('SMTP', {
	service: 'Zoho',
	auth: {
		user: 'admin@b-and-bconsultores.com.mx'
		pass: 'Chisqueado251785'
	}
})

var emailContent= '<b>From: '+name+'<br>Phone: '+phone+'<br>Message: '+message+'<br>Email: '+email+'</b>'

var mailOptions= {
	from: name + '<admin@b-and-bconsultores.com.mx>'
	to: 'fgme.facturacion@b-and-bconsultores.com.mx'
	subject: 'Nuevo mensaje de cliente prospecto'
	text: message
	html: emailContent
}

smtpTransport.sendMail(mailOptions, function(error, response) {
	if(error){
		console.log(error)
	}
	else{
		console.log('Message sent: '+response.message)
	}
})