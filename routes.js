var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var sqlStmts = require('./SQLStatements');

router.get('/products', function(req, res) {
  req.getConnection(function(err, conn) {
      if (err) return next("Cannot Connect");

      var query = conn.query(sqlStmts.allProductsStmt, function(err, rows) {
          if (err) {
            console.log(err);
            return next("Mysql error, check your query");
          }
        res.json({ products: rows});
      });
  });
});

router.get('/products/most_sold', function(req, res) {

});

router.get('/clients', function(req, res) {
  req.getConnection(function(err, conn) {
    if (err) return next("Cannot Connect");

    var query = conn.query('SELECT * FROM cliente', function(err, rows) {
      if (err) {
        console.log(err);
        return next("Mysql error, check your query");
      }
      res.json({
        clients: rows
      });
    });
  });
});

router.get('/clients/:name', function(req, res) {
  //TODO
});

router.post('/invoice/new', function(req, res) {
  //TODO
});

router.post('/authenticate', function(req, res) {
  //TODO
});

router.get('/logout', function(req, res) {
  //TODO
});

module.exports = router;
