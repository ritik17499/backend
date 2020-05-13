const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    
    
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

   

    app.post(`${baseUrl}/forgot-password`, userController.forgotPasswordFunction);
   
   
    
    app.put(`${baseUrl}/change-password`, userController.changePasswordFunction);
     

    app.post(`${baseUrl}/login`, userController.loginFunction);
   
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

   
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
    
    
    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);
    

   app.put(`${baseUrl}/:userId/request`, auth.isAuthorized, userController.request);
    

   app.put(`${baseUrl}/:userId/requested`, auth.isAuthorized, userController.requested);
   

    
   app.put(`${baseUrl}/:userId/addFriend`, auth.isAuthorized, userController.addFriend);
   
   app.post(`${baseUrl}/findFriend`, auth.isAuthorized, userController.findFriends);
   
   app.post(`${baseUrl}/invitation`, userController.sendInvite);
   

   app.post(`${baseUrl}/addInvitedFriend`, userController.addInvitedFriend);
    

   app.post(`${baseUrl}/unFriend`, userController.unFriend);
  
}
