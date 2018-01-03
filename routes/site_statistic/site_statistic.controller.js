const path = require('path');
const error = require(path.join(__dirname, '../../helper/errorHandler'));

const Site_statistic = require(path.join(__dirname, './Site_statistic.model.js'));

exports.getAllSite_statistic = (req, res, next) => {
  console.log("get GetAllSite_statistic");

  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findAll()
  .then(respond)
  .catch(onError);
};

exports.getSite_statistic = (req, res, next) => {
  console.log("get GetSite_statistic");

  const date = req.params.date;

  const respond = (results) => {
    res.status(200).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.findOne({
    date : date
  })
  .then(respond)
  .catch(onError);
};

exports.createSite_statistic = (req, res, next) => {
  console.log("get createSite_statistic");

  const { site_connect_count, site_pc_connect_count, site_mobile_connect_count } = req.body;
  const createList = {
    date : new Date(),
    site_connect_count : site_connect_count,
    site_pc_connect_count : site_pc_connect_count,
    site_mobile_connect_count : site_mobile_connect_count
  };

  const respond = (result) => {
    res.status(200).json(result);
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.create(createList)
  .then(respond)
  .catch(onError);
};

exports.updateSite_statistic = (req, res, next) => {
  console.log("get updateSite_statistic");

  const date = req.params.date;
  const { site_connect_count, site_pc_connect_count, site_mobile_connect_count } = req.body;
  const updateList = {
    site_connect_count : site_connect_count,
    site_pc_connect_count : site_pc_connect_count,
    site_mobile_connect_count : site_mobile_connect_count
  };

  const respond = (results) => {
    res.status(201).json(results);
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.update(updateList, {
    where : {
      date : date
    }
  })
  .then(respond)
  .catch(onError);
};

exports.deleteSite_statistic = (req, res, next) => {
  console.log("get removeSite_statistic");

  const date = req.params.date;

  const respond = (results) => {
    res.status(201).json({
      isDeleted : true
    });
  };

  const onError = (err) => {
    next(err);
  };

  Site_statistic.destroy({
    where : {
      date : date
    }
  })
  .then(respond)
  .catch(onError);
};
