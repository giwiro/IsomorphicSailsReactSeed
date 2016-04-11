# Isomorphic Sails React

###Simple application that involves:

* react
* react-router
* material-ui
* sails.js

###Usage

```
  $ npm install
  $ sails lift
```

###Description

This app uses the ```routes.jsx``` file for routing in client side and server side. In the case of server side,  ```react-router``` matches the route in server and prepare a string to be included inside the html wrapper.

The server can read jsx syntax thanks to [sails-hook-babel](https://github.com/sane/sails-hook-babel) (hook for sails.js)

The flux arquitecture is considered 
![alt text](http://blog.krawaller.se/img/flux-diagram.png "Flux")
