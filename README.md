# SalesLoft Code Challenge

<p align="center"><img src="https://upload.wikimedia.org/wikipedia/en/a/a2/SalesLoft_Logo.png" alt="salesLoft-image"></p>

Code-challenge application that involves the SalesLoft API of user's.

It shows SalesLoft People in a Data table that you can paginate and select some users.

You can either count their unique characters or look for possible duplicates of the people
selected, this both things work around the **email field**. 

# Getting Started

### Running the app

1. Run `npm install` inside `/api` and `/client`
2. Set your `API_KEY` in the `/api/.env` file
3. Run `npm start` inside `/api` and `/client` to start either the frontend or the backend
4. That's it. 

### Testing

You can run `npm test` in either the `/api` or the `/client` folder, 
depending on what you want to test (front or backend)
   
The UI will be running at `http://localhost:3000/` and the backend at `http://localhost:3001/`,
there you can play with the GraphQL Playground.

### Technologies used

- React 
- Node
- Apollo + GraphQL
- Other minor dependencies

## _Why I build this like it_

### Use of React + GraphQL instead of typical REST

Beyond saying that this tech stack works fluidly because everything is JavaScript, 
this is mostly because this is what I have more fresh at the moment, and I really like it.

### Architecture

Having the app (client) and the backend (api) separated makes the eventual deployment easier and
independent.

### Unit testing

I really like to have all my components unit tested, 
I have found a numerous quantity of 'bugs' that didn't hit the development or 
even the production environment by just doing these. 

My thought with unit tests is to really **unit** test them, establishing clear boundaries 
across files, that's why I _mock_ components that have their own file. 

### Components

Having small encapsulated components through the code make it more reusable (DRY).
It allows us to easily make changes without the need of apply those changes in multiple places
but just in one.

Scalability, extendability, well-tested, DRY and readable code are things that 
I think I'm accomplishing through the use of components, and the way that I did it.

### What I'm not presenting

1. Usage of Typescript 

Although I know it, and I really like it, I'm not a _Pro_ doing its configuration,
and it'd take me more time than expected. 

2. Integration tests

## Solution over each Level of the Challenge

#### Level 1

Nothing much to say. Request data and present it to the UI.

#### Level 2

I take advantage of the kindly of JavaScript and their _objects_ by saving 
letter by letter of each (already validated) text and doing the counting. 
In the end, converting that object into an array of objects that I could manage easier. 
Then presenting in the UI. 

#### Level 3

This one was challenging. I was thinking of a way to re-use the code of level 2, 
but It wasn't looking like a feasible solution.

By doing some investigation in the internet (things that Developers are not used to do 😄),
I found that this is related to the “Problem 1.5. One Away” in the Cracking the Coding Interview.
Reading more about it, led me to this solution.

#### Level 4

That's all. A scalable enterprise app, ready to sell 😎
