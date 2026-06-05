# superMetaBros Beverage Ecommerce Application

This project is a Node.js / Express application built using the Model-View-Controller (MVC) architecture to design and build a secure, professional ecommerce web application.

## Project Purpose

The purpose of this project is to build a functioning beverage service with MVC layers and a database that is undersatandable and professional.

## Milestone 1
Build a skeleton server and a mock landing page

### Milestone Complete 


## Milestone 2
Build a data display page for all drinks and page showing singular drink data

### Milestone Complete


# Components of our application

## Note: We will be following REST protocols for best practices

## Views/Inputs
- Default, most viewed beverages, details on 10 beverages ~ **~~milestone 1~~** DONE
- Browse beverage catalogue ~ **~~milestone 2~~** DONE
- Order beverage
- View single Beverage ~ **~~milestone 2~~** DONE
## Controllers
- Database catalogue changes between user input and clicks
- ~~Add to beverage view count on page load of a beverage~~ ~ (Reducing scope creep past milestone 2)
- ~~Request model removes 'quantity' of item ordered from catalogue on order~~ ~ (Reducing scope creep past milestone 2)
- ~~Request model re-adds 'quantity' of item ordered to catalogue on order cancellation~~ ~ (Reducing scope creep past milestone 2)
## Models
- Test connect to data ~ DONE
- Database connection to docker container ~ DONE
- ~~Fulfill quantity change requests from controller, update accordingly~~
- ~~Fulfill web traffic data changes from controller, update attention data accordingly~~
- ~~Load image data from visible drinks urls, update images accordingly.~~
## Data Needed in DB
- beverage id ~ **~~milestone 1~~** DONE
- price of drink ~ **~~milestone 1~~** DONE
- name of drink ~ **~~milestone 1~~** DONE
- brand ~ **~~milestone 2~~** DONE
- drink image url 
- page views **~~milestone 2~~** DONE
- ~~quantity in catalogue~~ (Rendered irrelevant by milestone 2 vision changes)
- ~~total purchases~~ (Good for a larger project, but blocked by milestone 2 vision changes)