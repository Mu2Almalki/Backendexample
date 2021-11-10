# Backendexample
Back En example
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


2. Create the first reducer. In this case let's go to "./src/reducers/user/user.js"
    1. Declare a variable under the name "initialState", that holds an object with a key for the state name and an initial value, in this case " {user: ''} ". This will be our initial container for our state, where all the information is going to be held up.
    2. Declare a function under the same name as the file. and in the values that you are going to pass to it, write the following "state = initialState, {type, payload}"
    This means when we sue "state" inside of the function it will mean whatever we have inside of the initialState variable, and whenever we invoque the "user" function we will have to pass two parameteres.
    type: The name of the action.
    payload: the value that we are going to apply to the state.
    3. Inside of the function we will have a switch statement where we will pass the value of the "type"
        1. On the default we will use return state so it doesnt make any changes.
        2. Each case will have a string that would correspond to the type of an action and in the return we would return the new state depending on the payload.
    4. Create an action, an action needs to have the following criteria.
        An action is a function that will have as a return a type with a string in it that describes the type of action.
        Commonly it is all in uppercase letters with a underscore instead of spaces.
        Needs to be a string, mandatory.
        And in this case a payload that has information about the new state.

3. Now let's go to the store.js file inside of the reducer folder.
    1. import createStore, combineReducers from redux
    createStore: it's a method that takes a reducer and creates the redux store with it.
    combineReducers: Combines multiple reducers in one.
    2. Import the reducer from its file location.
    3. Define a variable called "reducers", we will use to store all the reducer functions with the combineReducers method.
    4. Declare a variable called "store" and set it equal the method "createStore" and pass the reducers variable as a value as you invoque it.
    5. Export default store

4. Now let's go to index.js inside of out 'src' folder. Here we will use a built in component to make the state inside of the reducers available to all the children elements regardless of where they are located.
    1. Import Provider from react-redux
    2. Import store from its folder location.
    3. Use the Provider component ti wrap the App component and add the atrributte "store" the the oppenning tag and set it equal to the store value.

5. Go to the component where you want to acces the state inside of the reducer, in this example you can go to App.js inside of the src folder.
    1. Import useDispatch, useSelector from react-redux.
        useDispatch: allows me to change the value of the state in the reducer.
        useSelector: allows me to acces and read the value of the state inside of the reducer.
    2. Import the action we want to use from the reducer.
    3. Create a useState hook where you will manage the value of the user inside of the component.
    4. Create a function to use the dispach method to pass the new value to the action that will get all the way to the state inside of the reducer.
    5. In this case we use the value inside of the setUser hook to have the addNewUser function dispatch this information to the user reducer.
    6. You can also acces the state of the reducer using the "state.user we get form the useSelector method de declared previously.
