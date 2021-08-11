# TravelApp
This is the Hong Kong Travels website project.
We've used Node.JS, Knex.JS and Postgres for the backend,
and Bootstrap and Express-Handlebars on the frontend.

##Functional Components of the Project
* Login
* Search for Destination
* Trip Planning and Bookmarks
* Trip Review

## How to setup the project
Knex Configuration:
In order for your Knex migrations to function correctly,
1. be sure to setup your local project .env file with your own personal host, user, password and database name information. 
2. Your .env file should be private and ignored in your .gitignore file. 
3. knex migrate:latest and knex seed:run before the server run