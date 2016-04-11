# Isomorphic Sails React

###Simple application that involves:

* react
* react-router
* material-ui
* sails.js

### Configure the presets 

Your ```config/local.js``` file should look like this:

```
module.exports = {

  babel: {
    presets: ["react", "es2015", "stage-0"]
  },
  //Tell the grunt to wait a little more
  hookTimeout: 30000
}
```

###Usage

```
  $ npm install
  $ sails lift
```

###Description

This app uses the ```routes.jsx``` file for routing in client side and server side. In the case of server side,  ```react-router``` matches the route in server and prepare a string to be included inside the html wrapper.
The ```routes.jsx``` file returns a functions because it's needed that the server pass some parameters to the components when they are rendered.

The server can read jsx syntax thanks to [sails-hook-babel](https://github.com/sane/sails-hook-babel) (hook for sails.js)

The flux arquitecture is considered 
![alt text](http://blog.krawaller.se/img/flux-diagram.png "Flux")
