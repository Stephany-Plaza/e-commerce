# Shoes Store

##### A sporty e-commerce app, created with React and Firebase.

## Table of Contents

•	Introduction
•	Technologies
•	Setup
•	Contact


### Introduction

This project, Shoes Store is a sporty e-commerce application, for now it is dedicated as an example to the sale of soccer shoes, t-shirts and shin guards but other things could be added in the future as well. This was only an example of what we can do with React.

### Technologies

This Project is created with:
•	React version: 17.0.2
•	Firebase - Firestore Database
•	Node version: v16.13.2
•	CSS for the style sheet


### Setup

First step to run this app is to install npm in your local computer: (download and install Node.js first)
$ cd ../shoesStore (or whatever you name your root folder)
$ npx create-react-app app-name
$ npm start

#### Firebase install and enviroment-variables
To make this project work you also have to install firebase in your app local folder:
$ cd ../win-guitars (or whatever you name your root folder)
$ npm install firebase
(example using GIT-BASH console)

#### Enviroment variables
You have to configure the enviroment variables that firebase provides you in ../win-guitars/src/services/Firebase/firebase.js or wherever you have that file in your project route:
•	apiKey
•	authDomain
•	projectId
•	storageBucket
•	messagingSenderId
•	appId
•	measurementId


#### Firebase database and product format
Now, being in firestore firebase database you´ll need three collections: categories, named after the products you sell, in the example the documents inside this collection are “camiseta”, “claseA”, “clasicos” and “espinilleras”. These categories will render in the NavBar component, where it lays the firebase call. The following collection is items, where you can add as documents the items you want to sell. In the example of this app there are five of each one (“Camisetas”, “Tacos Clase A”, “Tacos Clasicos” and “Espinilleras”). The product format will require six key-value pairs: category: (“Camisetas”, “Tacos Clase A”, “Tacos Clasicos” and “Espinilleras”), details: x, image: (url link), price: (number), stock: (number) and title: (name of the product). The third and last collection is orders. There will lay the buy orders from the clients. You don't necessarily have to create it, as it will create itself when someone confirms an order in the cart.

#### React routes and fundamental components
This application uses React Router (react-router-dom) for the navigability sake, avoiding the page to refresh everytime it changes its route.

#### NavBar
Here are displayed the four categories of the products ((“Camisetas”, “Tacos Clase A”, “Tacos Clasicos” and “Espinilleras” in Spanish for t-shirts, soccer shoes type A, classic soccer shoes and shin guards). NavBar is viewable across all the application, being outside the app routes. Inside this component lays a firebase call, who brings and render the product categories in the NavBar. Once clicked, the titles will filter these products by categories. This is done using useParam React hook who takes the /category/:category param.

#### ItemListContainer and ItemDetailsContainer
ItemListContainer routes: / (it is displayed in the home page) and /category/:category, filtering products. ItemDetailContainer route: /detail/:productId (filtering by using product id with useParam hook). In this components the products are displayed. ItemDetailContainer products give the user the chance to view the product details as its name say, and to add the desired quantity of the product to the cart. They are stored in a state "cart", which is made by using useState** * ** and useContext (with the purpose of making a "global state") React hooks.

#### Cart, CartWidget and ContactForm
Cart route: /cart The cart component will display the added products if there is at least one, with the per unity prices and total amount to pay. Otherwise it will display a message and a link to take you back to the catalogue of products (ItemListContainer). Inside the cart you`ll also have the option to confirm the order, which will be stored in a state and in its same name Firebase collection, with the data of the products, the total amount to pay and the purchaser information. Before confirming the order it is required for the client to submit his contact information in a form, the cart interface then rendering the order id (auto generated by Firebase). CartWidget: this component receives the cart item quantity and displays it in the NavBar. When the cart has no products added, CartWidget will dissapear. ContactForm: this is the above mentioned form. It is built with a toggable functionality, made with useImperativeHandle and useRef React hooks. The information that the purchaser completes here will lay in the order state as well.

#### CartContext
Using React context, this file includes varied functions: check if an item is already in cart, add the item to the cart if there is no one or update its quantity, remove item by id, clear the cart, and calculate total amount to pay and quantity of products inside. Also it will include the cart state. Using context provider that will wrap all the app components, these functions and state are global to its children. Custom hook: as this application has no user authentication features included I changed the way to build cart state. Instead of using useState I included useLocalStorage, a custom hook that takes useState but adds the usage of localStorage. This way, state could persist when refreshing the page.


### Contact

If you want to contact me, you can email me to stephanyplaza22@gmail.com , or add me in LinkedIn as 
Stephany Plaza: https://www.linkedin.com/in/stephany-plaza-825044230/ .

