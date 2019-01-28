# PetHub 🐾 [![Build Status](https://travis-ci.com/githubsttar/PetHub-backend.svg?branch=master)](https://travis-ci.com/githubsttar/PetHub-backend) [![Coverage Status](https://coveralls.io/repos/github/githubsttar/PetHub-backend/badge.svg?branch=master)](https://coveralls.io/github/githubsttar/PetHub-backend?branch=master)

### [Team](https://github.com/githubsttar/PetHub-backend#team) |  [User stories](https://github.com/githubsttar/PetHub-backend#user-stories) |  [Getting started](https://github.com/githubsttar/PetHub-backend#getting-started) |  [How to use](https://github.com/githubsttar/PetHub-backend#how-to-use-pethub) | [Our approach](https://github.com/githubsttar/PetHub-backend#our-approach) |   [Testing](https://github.com/githubsttar/PetHub-backend#testing) |   [Deployment](https://github.com/githubsttar/PetHub-backend#deployment) |  [Contributing](https://github.com/githubsttar/PetHub-backend#contributing)

PetHub is an application that helps reunite lost pets with their owners, built using a Ruby on Rails API and a React.js frontend.

Live site: http://pet-hub.heroku-app.com 🐕🐩🐈🐴
API: http://pet-hub-api.heroku-app.com 🐍🐠🦜🐇

Frontend repo (React.js): http://github.com/tomasdoh/PetHub-frontend

## Team 🐕

* [Elly Chan](https://github.com/ellychanx)
* [Ijeoma Nelson](https://github.com/githubsttar)
* [Luisa Theodoro Paoliello](https://github.com/luisatheodoro)
* [Tomas Doherty](https://github.com/tomasdoh)

## User stories 🐈

Read all of the user stories [here](https://github.com/githubsttar/PetHub-backend/user-stories.md)

## Getting started 🐠

To run the application and test suites locally, clone this repo for the API **and** clone the [front-end repo](https://github.com/tomasdoh/PetHub-frontend) for the application's client.

To launch the API on port 3001:
```
cd PetHub-backend
bundle install
bin/rails server -p 3001
```
To launch the client on port 3000:
```
cd PetHub-frontend
npm install
npm start
```
In order to get the app to work locally, you may need to change the configuration of the URLs used for API requests. Head to `PetHub-frontend/src/constants/index.js` to check that the local URLs are being used for fetch requests.

## How to use PetHub 🦄

*User journey and screenshots to be included here*

## Our approach 🦜

## Testing 🐴

To run the API tests:

```
cd PetHub-backend
rspec
```
To run the client tests:


## Deployment 🐩

The project has been deployed using Heroku.

## Contributing 🐍

We welcome contributions to the project. Before making a change, please first discuss the contribution you wish to make via issue, email, or any other method with the project team.

## Licence 🐇
