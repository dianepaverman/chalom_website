# Starter Project

## Project Setup
Full Guide: http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/

1.	Clone the project from GitHub
2.	Make sure node.js is installed
3.	Npm install –g express
4.	Npm install –g express-generator
5.	Npm install –g yo
6.	npm install -g grunt-cli bower generator-karma generator-angular
7.	npm install –g nodemon
8.	cd client
9.	yo angular
10.	No, then Yes to the rest of the options
11.	If you overwrite the listed files, just revert them in git/sourcetree afterwards
12.	Npm install –g sass
13.	Npm install –g compass
14.	Npm install
15.	Grunt serve
16.	Ctrl + C
17.	Cd ../server
18.	Express
19.	Npm install
20.	Npm i cors –save
21.	Reset overwritten files
22.	Npm run dev
23.	Go to “localhost:3000/api/users” in the browser to make sure it’s working
24.	Cd ../client
25.	Grunt serve
26.	Should be getting data from the server, or at least no errors


## To set up a new route
1.	Go to the client folder
2.	Yo angular:route NameOfRoute
3.	Check it out at localhost:3000/#/NameOfRoute
4.	Add a corresponding stylesheet: client/app/styles/partials/_NameOfRoute.scss
5.	Open up main.scss and add @import “partials/signup”;
