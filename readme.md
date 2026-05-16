# superMetaBros Beverage Ecommerce Application

This project is a Node.js / Express application built using the Model-View-Controller (MVC) architecture to design and build a secure, professional ecommerce web application.

## Project Purpose

The purpose of this project is to build a functioning beverage service with MVC layers and a database that is undersatandable and professional.

## Milestone 1
Build a skeleton server and a mock landing page

## Milestone 2
Build a data display page for all drinks and page showing singular drink data

# Components of our application

## Note: We will be following REST protocols for best practices

## Views/Inputs
- Default, most viewed beverages, details on 10 beverages ~ **milestone 1**
- Browse beverage catalogue ~ **milestone 2**
- Order beverage 
- View single Beverage ~ **milestone 2**
## Controllers
- Add to beverage view count on page load of a beverage
- Request model removes 'quantity' of item ordered from catalogue on order
- Request model re-adds 'quantity' of item ordered to catalogue on order cancellation
## Models
- Fulfill quantity change requests from controller, update accordingly
- Fulfill web traffic data changes from controller, update attention data accordingly
- Load image data from visible drinks urls, update images accordingly.
## Data Needed in DB
- beverage id ~ **milestone 1**
- price of drink ~ **milestone 1**
- name of drink ~ **milestone 1**
- brand ~ **milestone 2**
- drink image url
- page views 
- quantity in catalogue
- total purchases