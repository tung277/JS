var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg');
var path = require ('path');
var cors = require('cors');
router.use(cors());
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'tung1999',
  port: 5432,
})


/* GET home page. */
// router.get('/', function(req, res, next) {

// });
router.get('/get1', function(req, res, next) {

  pool.query('SELECT * FROM product_info', (error, responese) => {
    if(error){
      console.log(error);
    }
    else{
      console.log(responese);
      res.send(responese.rows)
    }
    // pool.end()
  })
});
router.get('/add', function (req, res) {
  res.render('add',{});
});
router.post('/add', function (req, res) {
  var product_name = req.body.product_name;
  product_price = req.body.product_price;
  anh = req.body.anh;
  
  pool.query("INSERT INTO product_info (product_name,product_price,anh) VALUES($1,$2,$3)",[product_name,product_price,anh],(err,response)=>{
    if(err){
      console.log(err);
    }else{
      res.send('da nhan duoc' + req.body.product_name);
    }
      
  })
});
module.exports = router;
