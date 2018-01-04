const error = require('../../helper/errorHandler');
const SiteStatistic = require('./site_statistic.model.js');

exports.getAllSiteStatistic = (req, res, next) => {
  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  SiteStatistic.findAll()
  .then(respond)
  .catch(onError);
};

exports.getSiteStatistic = (req, res, next) => {
  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  const onError = (err) => {
    next(err);
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.createOrUpdateSiteStatistic = (req, res, next) => {
  const updateList = {
    site_connect_count: req.body.site_connect_count,
    site_pc_connect_count: req.body.site_pc_connect_count,
    site_mobile_connect_count: req.body.site_mobile_connect_count,
  };

  const respond = (num) => {
    // When finding one, updating
    if (num) {
      SiteStatistic.update(updateList, {
        where: {
          date: req.params.date,
        },
      })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        next(err);
      });
    } else {
      // If not, creating
      updateList.date = req.params.date;

      SiteStatistic.create(updateList)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        next(err);
      });
    }
  };

  const onError = (err) => {
    next(err);
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.deleteSiteStatistic = (req, res, next) => {
  const respond = (num) => {
    if (num) {
      SiteStatistic.destroy({
        where: {
          date: req.params.date,
        },
      })
      .then((result) => {
        res.send(200);
      })
      .catch((err) => {
        next(err);
      });
    } else {
      next(error(400));
    }
  };

  const onError = (err) => {
    next(err);
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};
