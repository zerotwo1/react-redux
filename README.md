# zerotwo1 redux-react repository
-------

A place to start tinkering when migrating to Redux-React. This entire project may very well only be a reusable and hopefully useful README.md file to light the fire under your teams ass.

> Contact <franchino@problemspaces.com> for expert advice if your team wants to bite this bullet. Tweet at me if you got beef [@franchescino](https://twitter.com/franchescino).

# PROJECT GOALS

Create a painless starter with a 12factor no-ops environment based on Docker+Git and the Microservices+Containers architecture.

+ Make it easy and fun to go along

+ Begin setup of this repository with a fool-proof Docker and NPM install.

+ Holistically finish with a 12factor deployment worfklfow using help from [Empire](https://github.com/remind101/empire)

> ESSAY: Designing a docker architecture for a Redux app

Code the main app architecture with Redux-React with Go & Node and socket based server workers. Use Yo to generate the project and webpack to build it.

> ESSAY: Patterns for Redux

Let the front-end implement something sweet like the [material-ui react component library](http://www.material-ui.com/#/components/app-bar) and include some uses cases of some of the more opinionated mircoframeworks such as immutable.js. Write all JS in ES6/Babel and share!

> [Demo App - airing now](http://3db5fb2b.ngrok.com)
> Grokking the app we will be building, check it on your phone then check it on your laptop, tell me what you see and I'll do the same.

### PART ONE - ECS CONTAINERS, NO OPS & CONTINUOUS DELIVERY (12Factor stuff)

+ GOAL: Use Docker to establish a GO continuous delivery server based on Thoughtworks https://github.com/gocd/gocd-docker or better, decide on whether or not to use CircleCI or Codeship, choose one (but describe why we want this).

> ESSAY: Noops expectations with Redux, Zero21

> After some fast research and consideration I am going with Empire. Empire is a control layer on top of Amazon EC2 Container Service (ECS) that provides a Heroku like workflow. It conforms to a subset of the Heroku Platform API, which means you can use the same tools and processes that you use with Heroku, but with all the power of EC2 and Docker.

> ESSAY: Using Empire & EC2 in place of Heroku, but keep heroku CLI tools

No Ops Library | Links | Github | Status
--- | --- | --- | ---
Empire | [Empire Quickstart](http://empire.readthedocs.org/en/latest/) | [Empire Github](https://github.com/remind101/empire) | Implementing
12 Factor Theory | [12 Factor Theory](http://12factor.net/) | Irrelevant | Evaluating

###### TODO: Add screencast explaining how to use Empire

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/pFC5Tp-QYjk/0.jpg)](http://www.youtube.com/watch?v=pFC5Tp-QYjk)

Dependencies for Empire | Links |
--- | --- | ---
Amazon EC2 Container Service | [Amazon Explainer on ECS](http://aws.amazon.com/ecs/) |
A PostgreSQL database. We use Amazon RDS | [RDS](http://aws.amazon.com/rds/postgresql/) |


``` ACTIONS: Run Empire and let it set everything up using Docker and ECS. Be live in the cloud and deploying like a boss. Establish key commands for destorying, booting and hosting and restarting. ```

+ In terms of application servers and general workers, do the following:

+ - Toss in two servers and default one to GO for our web-app. Have Node in there just because we may use it later, there's good stuff ready to go for Node we may use later. Be sure they're on socket.io or better (if even necessary with GOLANG)
+ - Have one server send some JSON through the docker container, the other right off the app server. Make the application server and the JSON server seperate. Put a store on both servers, whichever you choose.


``` ACTION: fire up the servers and test them, be sure they're running, open them in the browser with bash ```

``` docker build -t zerotwo1 . ```
``` docker run zerotwo1/redux-react cowsay boo-boo ```

-- docker should spin up something like this:

``` goserver on: localhost:5000, redis que on: localhost:5005, nodesocket on: localhost:5010, RDS on: 102.31.32.12:5015, etc ```

### PART TWO - IMPLEMENT A CODE ARCHITECTURE via YO
+ I like Redux/React right now. But maybe you're still on FLUX or even Angular or Backbone. We will use YO to pick your poison.

> ESSAY: Getting serious about redux. If you are serious about developing with React & Redux I suggest you read these two docs over any others:
[Redux Docs](http://rackt.org/redux/)
[React Docs](https://facebook.github.io/react/docs/getting-started.html)

+ Implement redux with the following tree structure: actions, components, constants, containers, reducers and store_enhancers (make strong argument for any others (ie. routes, assets)): use yeoman generators to build project folder structure as my front-end is opinionated. If you prefer another, you may choose from these following options: yo x, yo y, yo z (as long as your starter builds on the containers services, you're good)

> ESSAY: make use of redux-devtools, redux-log, thunk middleware, normalizr with immutable.js and a pipeline data visualizer like Airflow

Redux Import Libraries | Documentation |
--- | --- | ---
Normalizer | [Github](https://github.com/gaearon/normalizr) |
Redux Devtools| [Github](https://github.com/gaearon/redux-devtools) |
Redux Logger | [Github](https://github.com/fcomb/redux-logger) |
Redux Thunk | [Github](https://github.com/gaearon/redux-thunk)

``` EXAMPLE COMMANDS: any productivity, generator or scaffolding commands go here ```

###### Begin Codebase Installation
> GETTING STARTED

``` git clone git@github.com:frangucc/microservices-fullstack-seed.git ```

``` npm install ```
``` yo redux-react // scaffold out sound-redux ```
``` bower install // install any js dependencies ```
``` npm start // fire up localservers ```

> Because a react-webpack-redux starter already exists, we will start with it. For the purposes of this project I am conflicted on whether to build in a working codebase such as sound-redux or something simpler.

[Yo generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux)

``` npm install yo ```
``` npm install -g generator-react-webpack-redux ```
``` yo generator ```
``` yo react-webpack-redux ```

> See generator commands [Yo generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux)

- Make building the local environment super easy and implement hotloading with linting

### PART THREE - MAKE AN APP (OR STEAL ONE MUAHAHAHAHAAHAHA)
+ Reverse engineer the sound-redux app because that's what a real hacker would do. Build functionality into it. Currently, I have noticed that this amazing app:

- Doesn't allow you to share an individual track
- Doesn't allow you to manipulate the stores data
- Doesn't say Franchino anywhere when I send them this native feeling app in the browser
- Doesn't have an adserver displaying my recent Readme file updates
- Sound-Redux could use a couple pull requests from me. Will investigate whether I can wire the iOS player overlay can pass next to the Redux front end or if that's just not possible
- Sound-Redux could use a track overlay of sorts
- Sound-Redux could use a take_selfie button for every track
- Sound-Redux might like material-ui, it might not

> ESSAY: The Future of the Mobile Web

--- Consider https://github.com/ipselon/material-ui-prepack

##### EXTRA CREDIT

- Create a three.js or d3.js visualization component to visualize the music, might require a beast of a processor

``` Run the app in the browser ```

### PART FOUR

+ Write a mocha/chai test to test the action, reducer and a componenet responsible for the search and it's results

``` Run the dev tools, lint etc ```

> ESSAY: Is testing an application that implements a REACT component library with single points of data access overkill? If not, what should we test?

### PART FIVE
- Bring in Phant and AWS IoT just because


