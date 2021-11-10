# Backendexample
Backend example
# Getting started with Back End development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, install the following packages:

### `npm install express cors nodemon`

Now let's get our package.json file and check for the dependencies where we can find what we have just installed, for that we will use the following command:

### `npm init`

Our "package.json" should look something like this:

## <img width="707" alt="Screen Shot 1443-04-05 at 2 48 18 AM" src="https://user-images.githubusercontent.com/63668672/141023785-d61cc87a-dacc-490b-99c6-edd355760593.png">

Now let's go into our "script" section and let's add one script that we will be using to run our server.

<img width="621" alt="Screen Shot 1443-04-05 at 2 51 43 AM" src="https://user-images.githubusercontent.com/63668672/141024115-605e3c26-d92c-4189-bb4b-46818ac2d63e.png">

Guide

1. Set up server.
    1. Create a file called 'server.js' in our project folder.
    Here is where we are going to set up our initial server.
    2. Let's start by requiring express and storing it in a variable called express.
    Here I am just telling my code to go check in the dependencies in my package.json and get me "express"
    3. Now let's do the same thing with "cors"
    4. We are going to create another variable to set up our aplication.
    5. and one more variable where we are going to contain our PORT information.
    6. Let's set up a GET request for our app in wich we are going to have our endpoint and a callback function that takes two parameters: REQUEST "req" and RESPONSE "res" separated by a coma.
    Any time anyone goes to this endpoint with a get request the are going to get whatever we have inside of this callback function as a response.
    7.  Finally let's listen for our port we are creating.
<img width="716" alt="Screen Shot 1443-04-05 at 3 26 08 AM" src="https://user-images.githubusercontent.com/63668672/141027089-25c55935-ba9a-4635-97c5-a98ac657030d.png">
    8.  Now it's time to see if our server is working.
    Open your terminal and type the following script.
### `npm init`
<img width="682" alt="Screen Shot 1443-04-05 at 3 30 28 AM" src="https://user-images.githubusercontent.com/63668672/141027493-7f670512-88ea-4055-873b-60a0402fdd08.png">
    9.  Now our next step is going to be testing it in Postman, let's go into Postman, create a new colection and do a get request to our new server.
<img width="750" alt="Screen Shot 1443-04-05 at 3 35 40 AM" src="https://user-images.githubusercontent.com/63668672/141027940-2d6d11bb-7da5-4b7f-9b0f-52ac99e79582.png">
    10. If we did everything correctly we should get that call back function inside of our get reqest working.
<img width="706" alt="Screen Shot 1443-04-05 at 3 37 20 AM" src="https://user-images.githubusercontent.com/63668672/141028144-6b377af1-ee3d-48a3-b6e5-bf647d77b1bb.png">

<img width="1183" alt="Screen Shot 1443-04-05 at 4 24 34 AM" src="https://user-images.githubusercontent.com/63668672/141032521-41e1a851-05bc-438c-9add-bd2d53c5183d.png">

2. Let's create the routes to organize our code.
    1. Inside of our project we are going to create a folder with the name "routes"
    2. Inside of the "routes" folder I will create a file called "homeworks.js"
    3. Now let's conect all the cables from our "server.js" file to our "homework.js" file.
        1. Let's create a variable called homework and set the path to the folder inside of the require.
        2. And new let's get a path that says that anytime we have a user go to the "/homework" we will go into the homework variable that will lead us to the "homework.js" file.


3. Now that we have connected this endpoint to that file let's make some ROUTES inside of "homework.js".
    1. Let's require express just like we did in "server.js"
    2. Now let's bring in Router and store it in a variable called "router".
    3. And while we are at it let's export this module called "router".
    this module I'm exporting would be the one that I am requiring in the "homework" variable inside of "server.js"
    <img width="876" alt="Screen Shot 1443-04-05 at 4 55 15 AM" src="https://user-images.githubusercontent.com/63668672/141035296-4c624fd6-7e78-4713-a094-310b10dd235f.png">
    <img width="780" alt="Screen Shot 1443-04-05 at 4 55 58 AM" src="https://user-images.githubusercontent.com/63668672/141035384-ba92770e-1840-4e20-abbf-173b8997a3e9.png">
    4. Now it's time to create our first route for a get request that will correspond to this endpoint with a console.log inside that will allow me to check if this is working using Postman.
    <img width="530" alt="Screen Shot 1443-04-05 at 5 01 12 AM" src="https://user-images.githubusercontent.com/63668672/141035842-07a49029-f8fc-42cf-bcc6-c55d7debc1bf.png">
<img width="755" alt="Screen Shot 1443-04-05 at 5 01 35 AM" src="https://user-images.githubusercontent.com/63668672/141035870-4dc3b48c-975f-4abc-8217-fd7b82905b37.png">

# TASKS.

4. So we now have succsesfully created our route, but what information is it going to be bringing across?
We are going to create a new array of objects that will store every single one of the homework labs you have done thus far.
it needs to have an id, a title, a link, a short description and also the technologies used in it(HTML, CSS, JavaScript, React, Node, Express, Bootstrap, etc).
    1. Locate this array of objects in a different file and require it to be able to acces it.
    2. Write a post request that will allow us to add homeworks as the bootcamp continues for a few more weeks and YES we will have more homeworks.
    3. Try it on Postman and save that collection with the GET and POST request
    
5. Create a new route for a blog feature. (Same body as yesterday)
    1.  You will also have a GET router to display the blog posts.
    2.  A POST to be able to create new blog posts.
    3.  A PUT to be able to edit the blog posts
    4.  A DELETE as well. 
    5.  The information for the blog posts should also be in a seperate file. 
    6.  Try it on Postman and save that collection with the GET, POST, PUT and DELTE requests.
