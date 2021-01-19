# ChoreApp

A chore application to help organize ones chores and keep track of tasks at hand.

This app allow users to catelog their chores and keep tract of work to be done and work that has been done. Users are able to add new chores, edit those chores, mark the chores that have been completed and delete chores that they no longer need.

The API holds all of the users chores and has them readyly availible when the user needs them. Please read the instructions below for more information.
Client-side link: verel link here

Client-Side
//here

Deployment Platform
//here

Languages/Tools
JavaScript, Node.js, Express.js, Knex.js, PostgreSQL, Nodemon, Postgrator, HTML5, CSS3

    Loggers: Morgan, Winston
    Securities: CORS, Helmet

API Instuctions

Open Endpoints

Open endpoints that require no Authentication or Authorization.

Add Chore: POST/add
Chore List: GET/chores
Edit Chore: PATCH/chores/chore_id
Delete Chore: DELETE/chores/chore_id

Local Setup

Complete the folloing steps to clone a local copy of the server:

1. Clone this repository to your local machine with git clone REPO-URL NEW-PROJECT-NAME
2. cd into the cloned repository
3. Make a fresh start of the git history for this project with rm -rf .git && git init
4. Install the node dependencies npm install
5. Move the example.env Environment file to .env, which will be ignored by git but read by the express server: mv example.env .env
6. If you changed the project name, edit the contents of the package.json to use NEW-PROJECT-NAME

Scripts

1. Start a database server with pg_ctl start
2. Create an user with Super permission, with createuser -sPE admin (if different name, make sure to update it in .env, config.js, postgrator-config.js files)
3. Create a database with any name ideally choreapp (if different name, make sure to update it in .env, config.js, postgrator-config.js files)
4. Run 'postgrator' with npm run migrate to migrate the tables to highest available version
5. Seed the tables with psql -U admin -d devmap -f ./seeds/seed.devmap.sql with preset data.
6. Start the application npm start; tests will run automatically
7. Alternatively, you may start the application with nodemon npm run dev; tests will not run unless manually set to
