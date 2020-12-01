[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.porg/licenses/MIT)
  # Hamburger Simulator
  ## Table of Contents
  - [About](#about)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Questions](#questions)
  ## About
This project showcases comptenency in MVC development patterns, implementing JavaScript, MySQL, Node, Express, and Handlebars to facilitate front-end user interactions.
  
  [View the deployed site here!](https://hamburger-simulator.herokuapp.com/)
  
  ## Installation

### Heroku Hosted

To view this app, go to [hamburger-simulator.herokuapp.com](https://hamburger-simulator.herokuapp.com/).

### Locally Hosted

To host this project locally, first clone the repository and change directories to your specified locations. After installing Node, in the command line, enter `npm install` to install all necessary Node modules specified. 

After proper installation, inside the `\config\connection.js` file, comment out lines `4` and `5`: 
~~~
let connection;
connection = mysql.createConnection(process.env.JAWSDB_URL);
~~~
After doing so, uncomment out lines `6` through `12`, which will enable application hosting over your localhost.

Through your database design tool or software of choice, create a database with the query specified under `\db\schema.sql`. After running your query, return to `\config\connection.js` and enter your username into line `9` and password into line `10`.

Save all altered files, then in your command line, run `node server.js`. This will establish a hosted connection to your database, and launch the page to `http://localhost:8080`.

Navigating to this URL will provide the user access to this application.

  ## Usage
This simple application has three base functionalities. 

First the user can submit original content using the text area in the left most column...
![](https://i.imgur.com/Ij7dI13.png)

Then change the frontend by selecting the button next to each user created list elements...  
![](https://i.imgur.com/Y2fEcxd.png)

And then view previous user-created inputs.
![](https://i.imgur.com/3OmtMoH.png)

  ## Contributions
  As this is a project for the UPenn LPS Bootcamp, contributions will not be accepted. Any interested parties may reach me at clairej.vita@gmail.com.
  ## Questions
  Have a question? You can reach me at:
  - [github.com/github.com/clairevita](https://github.com/github.com/clairevita) 
  - clairej.vita@gmail.com
  
