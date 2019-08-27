# News-Clipping

News Clipping project is a web application created by IMDEA Networks that can be used to analyze the impact of researchers on the media. 
The main purpose for developing this tool is to provide a simple, yet powerful way of keeping track of all the information about the media impact of the institute and make it easy to extract statistics in real time.

## Installation 
### Option1: Using Docker (Recommended) 
- Install [Docker](https://docs.docker.com/install/) and [Docker-Compose](https://docs.docker.com/compose/install/).
- Clone this project and cd into it.
- Create a file in the root of the project named “.env”. This file will store all the environment variables, including the database credentials.
-  Inside the .env file add:

```
DB_PW=<choose a password to connect to the database>
DB_USER=postgres
DB_DATABASE=postgres
DB_PORT=5432
ADMIN_PW=<choose a password for admin (will be encrypted in db)>
USER_PW=<choose a password for initial users (will be encrypted in db)>
```
NOTE: This credentials are **only for the local version**.

- run:
```
docker-compose run web npm run migrate
```
NOTE: Docker could ask you about permissions to write in folders. If you don't accept the installation produce an error.

- Type 'y' when asked to remove a container. This will run all the migrations and must be done only the first time. Then:
```
docker-compose up -d
```
- Wait a couple of seconds for the app to start up, then go to http://localhost:3000

NOTE: run **docker-compose start** or **docker-compose stop** to start/stop all the services. Run docker-compose down to uninstall the services.

IMPORTANT: If the host machine is macOS/Windows you might have to edit "network_mode" and "DB_HOST" inside docker-compose.yml file (**follow the inline comments**). This is caused by a bug in docker that forces us to map the ports in a different way depending on the OS. 

### Option 2: Without Docker
#### Part 1: Local database set up 
Skip this part if you are connecting to an already set up PostgreSQL database.


  - Download and install PostgreSQL keeping all the information (port number, password) for further use.
  - run:
```
psql -U <userName>;
```
```
CREATE DATABASE <database name>;
```  
```
ALTER USER <userName> WITH SUPERUSER;
```

#### Part 2: Project set up
  -  Download and install Node.js.
  -  Clone this project and cd into it.
  -  Run: “npm install” in the terminal and wait for the process to end.
  -  Connect to the database:
  --	Create a file in the root of the project named “.env”. This file will store all the environment variables, including the database credentials.
  -- Inside the .env file add:
```
DB_PW=<postgres password>
DB_USER=<postgres user>
DB_DATABASE=<postgres database>
DB_HOST=localhost
DB_PORT=5432
ADMIN_PW=<choose a password for admin (will be encrypted in db)>
USER_PW=<choose a password for initial users (will be encrypted in db)>
```
*The admin password is used to log in the first time as an admin. 

  - Run:
```
npm run migrate
```
NOTE: This command will insert all the initial data in the database and should only be used the first time we open the project. From then on, use "npm run dev".

  - If everything executes correctly, run: 
```
npm run dev
```
  - Open a web browser and go to: http://localhost:3000/
  - Log in with username: “Admin” and the password you added to the .env file.
  
## Developer's guide
### Software Stack
#### Backend
  - **Node.js***
  - **PostgreSQL**: provides a wide range of datatypes, it also makes possible to link information using foreign keys (reducing redundant information).

*Node modules used:
  - Express: Flexible and robust web application framework.
  - Sequelize: promise-based ORM for Postgres. Used for db migrations and seed.
  - pg-promise: Library for making SQL queries asynchronously and dynamically.
  - Passport: User authentication and session manager.
  - bcryptjs: Library for hashing and checking user passwords.
  - exceljs: Generating Excel files from json data
  - html-docx-js: Generating docx files from an HTML template.

#### Frontend
  - HTML
  - CSS
  - EJS: Embedded JavaScript for dynamic generation of HTML code.
  - Bootstrap
  - Datatables

## Project Structure and design patterns
This project uses MVC architecture.

### Model
  - Configuration file: Reads database connection credentials (generally from environment variables).
  - Migrations: Stores structure of the tables and relations between them. Makes it possible to rollback and regenerate tables easily.
  - Seeders: Keeps initial data to store in the db (for demonstration purposes or initial requirements).
  - Queries: Keeps all queries as functions that return js promises. This way we can wait for the data before displaying it to the user.

### View
  - HTML: plain HTML with EJS code that generates chunks of code dynamically and reads variables passed by the server. 
  - Partials: Parts of HTML code that are used in most of the views (navbar, CSS imports, scripts…). Partials allow to import this code in a single line, making a cleaner and easier to read HTML code.
  - Public: Directory where the CSS stylesheets and assets are stored.
  - Templates: stores an ejs file that serves as a template to generate the Reports.

NOTE: To edit the report template, go to views/templates/PrImpactReport.ejs. Data is processed before sending it to the template in controllers/document.js.

NOTE: To change the generation of excel files, go to controllers/spreadsheet.js. 

### Controller
  - Keeps all logic that will be used by the routers when a request is made to the server.
  - Gets information from the models and passes it to the views.

## User's guide

### Dictionary of terms 
#### Disseminations
Press Releases or News published on IMDEA Networks website. PR’s are uploaded to the following distribution media portals: AlphaGalileo, DiCYT, EurekAlert!, Globedia, Sciencex.com/Phys.org, Agencia SINC, Tendencias 21, Total Telecom and Blog “Sociedad de la Información”.
#### Impacts
Impacts that our dissemination activities (PR and News) through the mailing list, distribution portals and social media have on different media outlets. We also add “other media impacts” that are a result of our proactivity but they don’t relate to any Press Release or News.
#### Social Media Shares (SM Shares)
Posts that we published weekly on Twitter, Instagram, Facebook and LinkedIn and any mention to our accounts on said social networks.

### Tutorials
#### Add Disseminations
- Go to Dissemination > Add Dissemination.
- Fill up all the fields.
-- Lead Paragraph: Text associated with the dissemination that will appear in the report. (Explain what this dissemination is about...)
-- Summary: Short version of the Headline, used to summarize the information and group disseminations, impacts and sm shares by the same summary.
NOTE: Summary and URL fields are unique, you will not be able to add a dissemination if these fields are already in a different dissemination.

#### Add Impacts / Social Media Shares
- Go to Impacts > Add Media Impact or SM Shares > Add SM Share.
- Fill up all the mandatory(*) fields.
-- You can select a dissemination from the dropdown menu and some of the fields will be automatically added. If the impact does not refer to any dissemination, select "Other Dissemination" and add a Summary and select PR/NEWS.

NOTE: If you select "Other Dissemination", the impact will appear as "Other media impact" and "Other type of dissemination".

## Metabase

Metabase is an external business intelligence tool used to generate graphs in real time and display them in html iframes. It is used inside Communications-Reporting Tool inside "Stats". 
The installation of this tool is not required for the rest of the application to work correctly, but it is recommended since it provides a visual representation of the data for users and makes it possible to export this graphs outside the tool.

## Deployment
NOTE: If you chose to install Communications-Reporting Tool via Docker (recommended), Metabase will be automatically installed for you. If not, follow the steps below.

- Install Docker
- Run:
```
docker run -d -p 5000:3000 --name metabase metabase/metabase
```
- This will launch Metabase in the port 5000 and will allow you to access it through Communications-Reporting Tool.
NOTE: There is a way to run Metabase without Docker, using a jar file (No tested)

### Installation notes
Once Metabase is already running correctly, access it using Communications-Reporting Tool (Stats>Access to Metabase). The first time will prompt you to set up and admin user and the db connection. Follow the installation using the database connection parameters chosed during the installation. Remember to set it up as a "Postgres" database.
NOTE: When asked for the database connection, use the machine's external ip for better results

### Using Metabase
Metabase allows you to execute SQL in a more visually and intuitive way, even for users with no SQL experience.
 - Create a dashboard and add graphs inside it. You will be able to embed this dashboard in any HTLM page.
 - Go to "Ask a question" and select "Custom".
 - Select your database in the "Data" field and the table you want to use to get the data from.
 - Choose filters/grouping options to display the data you need.
 - Select a visualization mode and save the graph.
 - Metabase will ask you to add this graph to the previously created Dashboard, click on yes.
 - Position the graph in the desired location and save the dashboard.
 - Repeat for all the graphs needed.

### Embedding Dashboards in HTML
The main purpose of making this dashboards is to embed it inside Communications-Reporting Tool (although it can be used in other web pages). 
 - Access Metabase.
 - Make sure that public sharing is enabled in: Settings > Admin Settings > Public Sharing (you must be Admin).
 - Exit Admin Settings and go to the dashboard you want to make public. There is also a "Clock" icon, this is used for automatically refreshing the dashboard (recommended).
 - In the upper right side of the dashboard, click on the "Share" icon.
 - Copy the Public embed html code.
 - Paste the HTML code in Communications-Reporting project: views/stats (replace the iframe).
 - Refresh the page and you will be able to see the dashboard from Communications-Reporting tool.

## Database design

### Database Schema
{F1382231}

### Connecting to the database
You can use the connection details inside the .env file to connect to the database using a gui such as [[ https://eggerapps.at/postico/ | Postico ]] (macOS) or [[ https://www.pgadmin.org/ | pgAdmin4 ]] (All other OS).
Once you have connected you will be able to edit the data inside the tables and backup if needed.

### Backup/Restore via CLI
You will need to install psql.
- Run:

```
pg_dump -h <db_host>  -p <db_port> -Fc -o -U <db_username> -d <db_name> > <path/to/save/backup/file>.dump
``` 

This will save a backup of all data in the specified path. 
- To restore:

```
pg_restore -h <db_host>  -p <db_port> --clean -U <db_username> -d <db_name> <path/to/save/backup/file>
```
IMPORTANT: The following guides are made as a pre-installation process. If the application is already running, you will have to make a backup of all data and restore it after you have made the changes (or use an external tool to access the database).

### Edit Schema

- Go to Models/Migrations/.
- Search for the table you want to edit.
- Change the columns and attributes.

### Edit Seed Data

There is some initial data that is inserted in the database to make it easier to start working with the application. If you want to change this information:
- Go to Models/Seeders/
- Search for the table you want to edit.
- Edit the contents in JSON format.







