# zerotwo1 redux-react repository
-------

A place to start tinkering when migrating to Redux-React. Let this README be a starting point for your architectural decisions.

> Contact <franchino@problemspaces.com> for advice if you are trying to bite this bullet with your team. Tweet at me if you got beef [@franchescino](https://twitter.com/franchescino).

# PROJECT GOALS

Create a painless starter with a 12factor no-ops environment with Docker+Git and the Microservices+Containers architecture.

+ Make it easy and fun to stand up and tear down

+ Begin setup of this repository with a fool-proof Docker and NPM install, then pick your front-end poison.

+ Use a 12factor deployment worfklfow with help from [Empire](https://github.com/remind101/empire)

> ESSAY: Designing a docker architecture for a Redux app

Code the main app architecture with Redux-React with both Go & Node socket based server workers. Use Yo to generate the project and webpack to build it. Once the code is in place, walk through the development of some components in an ongoing series or reverse engineer sound-redux.

> ESSAY: Patterns for Redux
[Getting Started w/ Redux](https://egghead.io/series/getting-started-with-redux)

Let the front-end implement something sweet like the [material-ui react component library](http://www.material-ui.com/#/components/app-bar) and include some uses cases of some of the more opinionated mircoframeworks such as immutable.js. Write all JS in ES6/Babel and share!

> [Demo App - airing now](http://3db5fb2b.ngrok.com)
> Grokking the app we will be building, check it on your phone then check it on your laptop, tell me what you see and I'll do the same.

### PART ONE - ECS CONTAINERS, NO OPS & CONTINUOUS DELIVERY (12Factor stuff)

+ EXPIRAMENT: Use Docker to establish a GO continuous delivery server based on Thoughtworks https://github.com/gocd/gocd-docker or better, decide on whether or not to use CircleCI or Codeship, choose one (but describe why we want this).

> ESSAY: No-ops expectations for a modern Redux app, Zero21

> After some fast research and consideration I am going with Empire. Empire is a control layer on top of Amazon EC2 Container Service (ECS) that provides a Heroku like workflow. It conforms to a subset of the Heroku Platform API, which means you can use the same tools and processes that you use with Heroku, but with all the power of EC2 and Docker.

> ESSAY: Using Empire & EC2 in place of Heroku, but keep heroku CLI tools

No Ops Library | Links | Github | Status
--- | --- | --- | ---
Empire | [Empire Quickstart](http://empire.readthedocs.org/en/latest/) | [Empire Github](https://github.com/remind101/empire) | Implementing
12 Factor Theory | [12 Factor Theory](http://12factor.net/) | Irrelevant | Evaluating

###### TODO: Add correct screencast explaining how to use Empire

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/pFC5Tp-QYjk/0.jpg)](http://www.youtube.com/watch?v=pFC5Tp-QYjk)

Dependencies for Empire | Links |
--- | --- | ---
Amazon EC2 Container Service | [Amazon Explainer on ECS](http://aws.amazon.com/ecs/) |
A PostgreSQL database. We use Amazon RDS | [RDS](http://aws.amazon.com/rds/postgresql/) |


``` ACTION: Run Empire and let it set everything up using Docker and ECS. Be live in the cloud and deploying with one command. Establish key commands for destorying, booting and hosting and restarting. ```

+ In terms of application servers and general workers, do the following:

	- Toss in two servers and default one to GO for our web-app. Have Node in there just because we may use it later, there's good stuff ready to go for Node we may use later. Be sure they're on socket.io or better (if even necessary with GOLANG)

	- Have one server send some JSON through the docker container, the other right off the app server. Make the application server and the JSON server seperate. Put a store on both servers, whichever you choose. Illustrate a remote command being sent into a container with a built in handler.


``` ACTION: fire up the servers and test them, be sure they're running, open them in the browser with bash ```

``` docker build -t zerotwo1 . ```
``` docker run zerotwo1/redux-react cowsay boo-boo ```

``` docker start zerotwo1/redux-react ```

-- docker should spin up something like this:

``` goserver on: localhost:5000, redis que on: localhost:5005, nodesocket on: localhost:5010, RDS on: 102.31.32.12:5015, etc ```

### PART TWO - IMPLEMENT A CODE ARCHITECTURE via YO
+ I like Redux/React right now. But maybe you're still on FLUX or even Backbone with Marionette. We will use YO to pick your poison.

> ESSAY: Getting serious about redux. If you are serious about developing with React & Redux I suggest you read these two documents from start to finish:
[Redux Docs](http://rackt.org/redux/)
[React Docs](https://facebook.github.io/react/docs/getting-started.html)

+ Implement redux with the following tree structure: actions, components, constants, containers, reducers, store, utils (make strong argument for any others (ie. routes, assets)): use yeoman generators to build project folder structure as my front-end is opinionated. If you prefer another, you may choose from these following options: yo x, yo y, yo z (as long as your starter builds on the containers services, you're good)

> ESSAY: make use of redux-devtools, redux-log, thunk middleware, normalizr with immutable.js and a pipeline data visualizer like Airflow

Redux Import Libraries | Documentation |
--- | --- | ---
Normalizer | [Github](https://github.com/gaearon/normalizr) |
Redux Devtools| [Github](https://github.com/gaearon/redux-devtools) |
Redux Logger | [Github](https://github.com/fcomb/redux-logger) |
Redux Thunk | [Github](https://github.com/gaearon/redux-thunk)

``` EXAMPLE COMMANDS: any productivity, generator or scaffolding commands go here ```

###### Begin Codebase Installation/Setup
> GETTING STARTED

``` git clone git@github.com:frangucc/microservices-fullstack-seed.git ```

```
npm install
DEBUG=true npm start
open http://localhost:3000
```

> Because a react-webpack-redux starter already exists, we will start with it. For the purposes of this project I am conflicted on whether to build in a working codebase such as sound-redux or something simpler.

[Yo generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux)

``` npm install yo ```
``` npm install -g generator-react-webpack-redux ```
``` yo generator ```
``` yo react-webpack-redux ```

> See generator commands [Yo generator-react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux)

- Make building the local environment super easy and implement hotloading with linting

### PART THREE - MAKE AN APP (OR STEAL ONE MUAHAHAHAHAAHAHA)
Reverse engineer the sound-redux app because that's what a real hacker would do. Build functionality into it. Currently, I have noticed that this amazing app:

- Doesn't allow you to share an individual track
- Doesn't allow you to manipulate the stores data
- Doesn't say Franchino anywhere when I send them this native feeling app in the browser
- Doesn't have an adserver displaying my recent Readme file updates
- Sound-Redux could use a couple pull requests from me. Will investigate whether I can wire the iOS player overlay can pass next to the Redux front end or if that's just not possible
- Could use a track overlay of sorts
- Could use a take_selfie button for every track
- Might like material-ui, it might not

> ESSAY: The Future of the Mobile Web

##### EXTRA CREDIT

- Create a three.js or d3.js visualization component to visualize the music, might require a beast of a processor

``` Implement offline processing with a socket notification when ready but also design the user experience so it's fast enough to be in sync with the track and it's timeline. ```

### PART FOUR

+ Write a mocha/chai test to test the action, reducer and a componenet responsible for the search and it's results

``` Run the dev tools, lint etc ```

> ESSAY: Is testing an application that implements a REACT component library (already tested), where each component has a single point of data access overkill? If not, what should we test? I'm happy testing my endpoints and using something like [airbrake-js](https://github.com/airbrake/airbrake-js) to trap other things quickly so I can fix them right away (the vimeo development philosophy)

### PART FIVE (ONLY FOR THE WICKED)

Some of this may or may not make sense to you. Just pushing the limits of webapps to the max here and adding support for physical IoT objects. ie. Make a desktop toy jukebox that plays soundcloud.

- Bring in [Phant](https://github.com/sparkfun/phant), [AWS IoT](https://github.com/aws/aws-iot-device-sdk-js) and something from the [Watson Developer Cloud](https://github.com/watson-developer-cloud)

- Bring in HelloEnjoys' [Unity to Three.js Project](helloenjoy.com/2013/from-unity-to-three-js/) and generate a 3D object with webgl and manipulate it via a JSON interface. Let this perhaps be the foundation of a 60fps blessed child. See the penny [skateboard customizer experience](http://customiser.pennyskateboards.com/us/) on laptop and phone.

- Compile everyting to react-native and compile everything for iOS and Android. "Learn once, write anywhere" as the React devs say.
