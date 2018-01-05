const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));
//const dateFormat = require('dateformat');

const Site_statistic = require(path.join(__dirname, './Site_statistic.model.js'));

exports.getAllSite_statistic = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findAll()
  .then(respond)
  .catch(onError);
};

exports.getSite_statistic = (req, res, next) => {

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.createOrUpdateSite_statistic = (req, res, next) => {

  const updateList = {
    site_connect_count : req.body.site_connect_count,
    site_pc_connect_count : req.body.site_pc_connect_count,
    site_mobile_connect_count : req.body.site_mobile_connect_count
  };

  const respond = (results) => {
    //When finding one, updating
    if(results){
      Site_statistic.update(updateList, {
        where : {
          date : req.params.date
        }
      })
      .then(results => {
        res.status(201).json(results);
      })
      .catch(err => {
        next(err);
      });
    } else {
    //If not, creating
      updateList["date"] = req.params.date;

      Site_statistic.create(updateList)
      .then(results => {
        res.status(201).json(results);
      })
      .catch(err => {
        next(err);
      });
    }
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.deleteSite_statistic = (req, res, next) => {

  const respond = (results) => {
    if(results){
      Site_statistic.destroy({
        where : {
          date : req.params.date
        }
      })
      .then((results) => {
        res.send(200);
      })
      .catch(err => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};
