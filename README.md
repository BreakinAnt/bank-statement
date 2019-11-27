# bank-statement
Made with Express and React.<br/>

# installation
Inside of each folder, type "npm install" on your terminal to install the necessary modules.<br/>
Start the application by typing "npm start" inside of both folders (if you start the React(/front) server before Express(/back), make sure to update the "http://localhost:3000/" page).
You'll need a MySQL server up and running as well.

# MySQL database configuration
By default, the app will try to listen to a MySQL database on localhost:3300 (with user: root & password: admin). You can easily config your MySQL database on('\back\util\cfg.js'). Sequelize will do the rest.<br/>
Note: The application will create a dummy user for testing (login: admin, password: admin), if you want to create new users you'll have to do that by hand on your MySQL database.

# to-do
- fix bug where list may not update after logging to another user
- better user/login authetication
- be able to register a new user on the front-end
- calculate user's account balance with transactions made and show it on the interface<br/>
