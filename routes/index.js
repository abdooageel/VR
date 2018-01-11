var express = require('express');
var router = express.Router();
var models = require("../models");
const https = require('https');
const request = require('request');
const url=require('url');

/* GET home page. */
// router.get('/national', function(req, res, next) {
//   var NID =url.parse(req.url, true).query.p;
//   models.Person.findAll({
//     where:{
//       national_id:NID
//     }
//   }).then(function(result) {
//     if(result){
//       models.Regester.findOne({
//         where:{
//           national_id:req.params.id
//         }
//       }).then(function(regester){
//         if(regester){
//           var obj ={ 
//             NID : result.national_id,
//             first_name : result.first_name,
//             father_name : result.father_name,
//             grand_name : result.grand_name,
//             family_name : result.family_name,
//             registry_number : result.registry_number,
//             center_id : regester.center_id,
//             center_name : regester.center_name,
//             is_registered_at_ocv_center : (regester.center_id == 99999 ? true : false),
//             mother_name : result.mother_name,
//             birth_date : result.birth_date

//           }
//           res.send(obj);
//         }else{
//           var obj=[];
//           for( k in result){
//             obj[k]={
//               NID : result[k].national_id,
//               first_name : result[k].first_name,
//               father_name : result[k].father_name,
//               grand_name : result[k].grand_name,
//               family_name : result[k].family_name,
//               registry_number : result[k].registry_number,
//               center_id : NaN,
//               center_name : NaN,
//               is_registered_at_ocv_center : NaN,
//               mother_name : result[k].mother_name,
//               birth_date : result[k].birth_date

//             }
//             if(k==result.length-1){
//               console.log(obj);
//               res.send(obj);  
//             }
            
//           }
           
//         }
        
        
//       });
      
//     }else{
//       res.send({error_message:'NID does not exist'})
//     }


//   });
// });
router.get('/id', function(req, res, next) {
  var NID =url.parse(req.url, true).query.p;
  models.Person.findAll({
    where:{
      id:NID
    }
  }).then(function(result) {
    if(result){
      models.Regester.findOne({
        where:{
          national_id:req.params.id
        }
      }).then(function(regester){
        if(regester){
          var obj ={
            NID : result.national_id,
            first_name : result.first_name,
            father_name : result.father_name,
            grand_name : result.grand_name,
            family_name : result.family_name,
            registry_number : result.registry_number,
            center_id : regester.center_id,
            center_name : regester.center_name,
            is_registered_at_ocv_center : (regester.center_id == 99999 ? true : false),
            mother_name : result.mother_name,
            birth_date : result.birth_date

          }
          res.send(obj);
        }else{
          var obj=[];
          for( k in result){
            obj[k]={
              national_id : result[k].national_id,
              first_name : result[k].first_name,
              father_name : result[k].father_name,
              grand_name : result[k].grand_name,
              family_name : result[k].family_name,
              registry_number : result[k].registry_number,
              center_id : NaN,
              center_name : NaN,
              is_registered_at_ocv_center : NaN,
              mother_name : result[k].mother_name,
              birth_date : result[k].birth_date,
              person_id :result[k].id

            }
            if(k==result.length-1){
              res.send(obj);  
            }
            
          }
           
        }
        
        
      });
      
    }else{
      res.send({error_message:'NID does not exist'})
    }


  });
});

module.exports = router;
