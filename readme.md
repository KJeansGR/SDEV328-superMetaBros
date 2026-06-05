# superMetaBros Beverage Ecommerce Application

This project is a Node.js / Express application built using the Model-View-Controller (MVC) architecture to design and build a secure, professional ecommerce web application.

## Project Purpose

The purpose of this project is to build a functioning beverage service with MVC layers and a database that is understandable and professional.

## Project setup

Load the project into Visual Studio Code by cloning the repository

* Run the following command
> npm i

* Create a .env file in the source folder, the file data is given by the repo  owner for security.

* After loading the information from the owner in the .env, run the following command.
> docker compose up -d

* With the database set up, run the following command and the website is good to go.
> npm run dev

Now visit http://localhost:8001/smb and it should be populated with all your information
> [!NOTE]
> This project requires Docker desktop, before running compose install it at: https://docs.docker.com/desktop/setup/install/windows-install/

## Endpoint + Supported Query parameters

``` Routes
//Assume these are partitioned onto http://localhost:8001/smb
//Example: Route: "/loginPage" -> http://localhost:8001/smb/loginPage

Route1: "/" | GET
^ Returns the home page through ejs rendering

Route 2: "/products" | GET
^ Returns json entry of all products by getting all id's

Route 3: "/products/:id" | GET/DELETE
^ GET: Returns json entry of a select product filtering by passed id
  DELETE: Deletes json entry of a select product filtering by passed id

Route 4: "/register" | POST
^ Checks parameters, then if it passes, adds the new product to the drink catalogue
```

## Milestone 1
Build a skeleton server and a mock landing page

##### Milestone Complete 


## Milestone 2
Build a data display page for all drinks and page showing singular drink data

##### Milestone Complete


# Components of our application

### Note: We will be following REST protocols for best practices

## Views/Inputs
- *Default, all beverages with filtering* ~ ~~milestone 1~~ DONE
- *Browse beverage catalogue* ~ ~~milestone 2~~ DONE
- ~~Order beverage~~ DONE 
- *View single Beverage* ~ ~~milestone 2~~ DONE
## Controllers
- ~~Database catalogue changes between user input and clicks~~ DONE
- ~~Add to beverage view count on page load of a beverage~~ ~ (Reducing scope creep past milestone 2)
- ~~Request model removes 'quantity' of item ordered from catalogue on order~~ ~ (Reducing scope creep past milestone 2)
- ~~Request model re-adds 'quantity' of item ordered to catalogue on order cancellation~~ ~ (Reducing scope creep past milestone 2)
## Models
- *Test connect to data* ~ DONE
- *Database connection to docker container* ~ DONE
- ~~Fulfill quantity change requests from controller, update accordingly~~
- ~~Fulfill web traffic data changes from controller, update attention data accordingly~~
- ~~Load image data from visible drinks urls, update images accordingly.~~
## Data Needed in DB
- *beverage id* ~ ~~milestone 1~~ DONE
- *price of drink* ~ ~~milestone 1~~ DONE
- *name of drink* ~ ~~milestone 1~~ DONE
- *brand* ~ ~~milestone 2~~ DONE
- drink image url 
- *page views* ~~milestone 2~~ DONE
- ~~quantity in catalogue~~ (Rendered irrelevant by milestone 2 vision changes)
- ~~total purchases~~ (Good for a larger project, but blocked by milestone 2 vision changes)