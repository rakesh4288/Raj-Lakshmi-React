const jsonServer = require('json-server');
const multer  = require('multer')
const server = jsonServer.create();
const router = jsonServer.router('database/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      let date = new Date();
      let imageFileName = date.getTime() + "_" + file.originalname
      req.body.imageFileName = imageFileName
      cb(null, imageFileName)
    }
  })
  
  const bodyParser = multer({ storage: storage }).any()

// To handle POST, PUT, PATCH you need to use a body-parser
// you can use the one used by JSON server
server.use(bodyParser)

// Custom middleware to log requests
server.post("/products", (req, res, next) => {
    let date = new Date();
    req.body.createdAt = date.toISOString()

    if(req.body.price) {
        req.body.price = Number(req.body.price)
    }
    let hasErrors = false;
    let errors = {}

    if(req.body.name.length < 2) {
        hasErrors = true;
        errors.name = "The name length should be at least 2 characters"
    }

    if(req.body.brand.length < 2) {
        hasErrors = true;
        errors.name = "The brand length should be at least 2 characters"
    }

    if(req.body.category.length < 2) {
        hasErrors = true;
        errors.name = "The category length should be at least 2 characters"
    }

    if(req.body.price <= 0) {
        hasErrors = true;
        errors.name = "The prince is not valid"
    }

    if(req.body.description.length < 10) {
        hasErrors = true;
        errors.name = "The description length should be at least 10 characters"
    }

    if (hasErrors) {
        // returns bad request (400) with validation errors
        res.status(400).jsonp(errors)
        return
    }
    // Continue to JSON Server router
    next();
});

server.use(router);
server.listen(8000, () => {
    console.log('JSON Server is running');
});