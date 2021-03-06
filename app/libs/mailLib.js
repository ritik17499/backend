'use strict';
const nodemailer = require('nodemailer');
const appConfig = require('../../config/appConfig');
let signUpMail = (email, fullName) => {
        // setup email
         nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
        let mailOptions = {
            from: '"Developer " <drunkXcoder@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Hey there', // Subject line
            text: `Hello  ${fullName}`, // plain text body
            html: `<html>
               <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: #acd8c9d6;
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                            .card-1:hover {
                            }
            
                            .text-center{
                                text-align: center;
                            }
                            p{
                                color: lightslategrey;
                            }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">Do-It</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> Hiiee!!!</h3>
                            <br>
                            <p class="text-center">Hey ${fullName}, welcome to our family.</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </body>
            
            </html>` // html body                                                             
        };
     // send mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
               });
         });
    }
// mail for forgot password
let forgotPasswordMail = (email, userId) => {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
     // setup email data with unicode symbols
        let mailOptions = {
            from: '"Developer" <drunkXcoder@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Change Password', // Subject line
            text: `Hello `, // plain text body
            html: `<html>

            <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: #acd8c9d6;
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                            .card-1:hover {
                            }
            
                            .text-center{
                                text-align: center;
                            }
                            p{
                                color: lightslategrey;
                            }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">ToDo</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> CHANGE PASSWORD</h3>
                            <br>
                            <p class="text-center">Please click on the link <a href="http://www.virtuasha.online/change-password/${userId}">Link</a> to change password</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </body>
            
            </html>` // html body                                                             
        };
    // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
                   });
    });
}
// mail for forgot password
let invitationEmail = (userId, name, email) => {
        // setup email data with unicode symbols
        nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: appConfig.email, // generated ethereal user
                pass: appConfig.password // generated ethereal password
            }
        });
        let mailOptions = {
            from: '"Developer" <drunkXcoder@gmail.com>', // sender address
            to: email, // list of receivers
            subject: 'Invitaion Mail', // Subject line
            text: `Hello `, // plain text body
            html: `<html>

            <head>
                <title></title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
            
                <style>
                    * {
                        letter-spacing: 1px;
                        font-family: 'Montserrat', arial;
                    }
                    .body{
                       
                        color: lightslategrey;
                    }
                    
                    .container{
                        margin-left: 15%;
                        margin-right: 15%;
            
                    }
                    .header{
                        padding-top: 10%;
                        margin: 0px auto;
                        text-align: center;
                        color: lightslategrey;
                    }
                    .card {
                            background: #acd8c9d6;
                            border-radius: 2px;
                            display: inline-block;
                            height: 300px;
                            position: relative;
                            width: 100%;
                            }
            
                     .card-1 {
                            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                            }
            
                            .card-1:hover {
                            }
            
                            .text-center{
                                text-align: center;
                            }
                            p{
                                color: lightslategrey;
                            }
                            .footer-x{
                                text-align: center;
                                background-color: white;
                                border-top: solid 3px  lightslategrey;
                            }
                       @media screen and (max-width: 768px) {
            
                            .container{
                                    margin-left: 0px;
                                    margin-right: 0px;
                                }
            
                            }
            
                </style>
            </head>
            
            <body style="margin:0">
                <div>
                    <div class="container">
                        <h1 class="header">Do-It</h1>
                        <br>
                        <br>
                        <br>
                        <div class="card card-1">
                            <h3 class="header"> Invitation Mail</h3>
                            <br>
                            <p class="text-center">${name} has invited you to check out <a href="http://www.virtuasha.online/sign-up?userId=${userId}">Do-It</a> app.</p>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </body>
            
            </html>` // html body                                                             
        };
           // get confirmation if sent succesfully
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
                    });
        });   
}
module.exports = {
    signUpMail: signUpMail,
    forgotPasswordMail: forgotPasswordMail,
    invitationEmail: invitationEmail
}