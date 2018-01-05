const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Career = require(path.join(__dirname,'../career/career.model.js'));


exports.getAllCareer = function(req,res,next) {
    const respond = results => {
      res.status(200).json(results);
    };

    const onError = err => {
      next(err);
    };

    Career.findAll()
    .then(respond)
    .catch(onError);
};

exports.getCareer = function(req, res, next) {
  console.log("get a specific career");

  const respond = result => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = err => {
    next(err);
  };

  Career.findOne({
    where: {
      career_id: req.params.career_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.deleteCareer = function(req, res, next) {
    const respond = num => {
      if(num){
        Career.destroy({
          where: {
            career_id: req.params.career_id
          }
        })
        .then(result => {
          res.send(200);
        })
        .catch(err => {
          console.log(err);
          next(err);
        });
      }
      else{
        next(error(400));
      }

    };

    const onError = err => {
      console.log('onErr'+err);
      next(err);
    };

    Caree.findById(req.params.career_id)
    .then(respond)
    .catch(onError);
  };


exports.updateCareer = function(req, res, next) {
    console.log("Update a career");

    // update list
    const updateList = {
      career_name: req.body.career_name,
      career_ex:req.body.career_name,
      career_photo:req.body.career_photo,
      career_due : req.body.career_due,
      club_id:req.body.club_id
      //...
    };

    const respond = find => {
      if(find) {
        console.log(find)
        Career.update(updateList, {
          where: {
            career_id: req.params.career_id
          }
        })
        .then(result => {
          res.status(201).json(result);
        })
        .catch(err => {
          next(err);
        });
      }
      else {
        next(error(400));
      }
    };

    const onError = err => {
      next(err);
    };

    Career.findOne({
      where: {
        career_id: req.params.career_id
      }
    })
    .then(respond)
    .catch(onError);

}

exports.createCareer = function(req, res, next) {
  
  const createList = {
    career_name: req.body.career_name,
    career_ex:req.body.career_ex,
    career_photo:req.body.career_photo,
    career_due : req.body.career_due,
    club_id: req.body.club_id
  };

  const respond = (career) => {
    career ? res.status(201).json(career) : next(error(400));
  };

  const onError = err => {
    console.log(err);
    next(err);
  };

  Career.create(createList)
  .then(respond)
  .catch(onError);
};
