# Twiiter Bot

A `MEAN` stack app. The app grabs all the tweets of user and his friends which has hyperlink. Once all data is queried, app analyses the data and shows most shared links and as well the as the person who shared shared max number of links. All the Tweets obtained from user is saved in `mongoDB` hosted by `mlab`. UI is completely built from from scratch since all angular UIs or other are bloated. 

Have a look at Twitter bot [here](https://murmuring-hollows-88524.herokuapp.com/).

clone it : `git clone https://github.com/junaid1460/twitterbot.git`

## Dependencies
global dependencies
  - `nodeJS@6.10` or latest LTS version
  - `npm@3.10` or latest
  - Angular CLI `npm install -g @angular/cli`
  - Pug/JADE CLI `npm install -g pug-cli`

project dependencies
  - `cd /path/to/peroject` and run command `npm install` to download all dependencies
## Dev setup

you have to run several commands in terminal(s)
  - `npm run buildwatch` builds angular app in watch mode
  - `pug -O "{'doctype':'html'}" -P -w *'` (in windows use git bash instead powershell or cmd )runs pug cli for transpiling pug into html in all subdirectories
  - `node server.js` to run server (localhost:5000 or localhost:`process.env.PORT`)
## Build
steps
  - run `npm run build` in root of project.


## License

ofcourse MIT.


