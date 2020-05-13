# DO-It-Backend

This project was generated with Node.js version 8.11.3.

## Getting Started
### Documentation
### Prerequisites

1. [Node.js](https://nodejs.org/en/download/)
2. [MongoDb](https://www.mongodb.com/download-center?jmp=nav#community)


### Installing

1. Go to directory you want to clone the project.
```
2. git init
```
```
3. git remote add origin https://github.com/ritik17499/Do-It-Backend.git
```
```
4. git pull origin master
```
```
5. npm install
```
6. Open project.
7. Goto config directory. 
8. Edit appConfig.js.

```
//Config example

appConfig.port = 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: '<Your Mongodb uri>'
  }
appConfig.apiVersion = '/api/v1';

nodeMailer.email="<Your Email for sending mails>";
nodeMailer.password = "<Your Password>";
```
9. Save changes.
10. Goto root directory.
11. Run MongoDb server.

```
12. node app.js
```
13. Your project should be running on localhost.


## Deployed at

``

## Authors

* **Ritik Verma** - *Initial work* - [Portfolio]()



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [edWisor](https://edwisor.com/)


