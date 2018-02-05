const error = require('../../helper/errorHandler');
const SiteStatistic = require('./site_statistic.model.js');

exports.getAllSiteStatistic = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  SiteStatistic.findAndCountAll({
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getSiteStatistic = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.createOrUpdateSiteStatistic = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const updateList = {
        site_connect_count: data.site_connect_count + 1,
        site_pc_connect_count: req.body.type === 'pc' ? data.site_pc_connect_count + 1 : data.site_pc_connect_count,
        site_mobile_connect_count: req.body.type === 'mobile' ? data.site_mobile_connect_count + 1 : data.site_mobile_connect_count,
      };

      SiteStatistic.update(updateList, {
        where: {
          date: req.params.date,
        },
      })
      .then(() => {
        const result = updateList;
        result.date = req.params.date;

        res.status(200).json(result);
      })
      .catch(onError);
    } else {
      // If not, creating
      const createList = {
        date: req.params.date,
        site_connect_count: 1,
        site_pc_connect_count: req.body.type === 'pc' ? 1 : 0,
        site_mobile_connect_count: req.body.type === 'mobile' ? 1 : 0,
      };

      SiteStatistic.create(createList)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(onError);
    }
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};

exports.deleteSiteStatistic = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      SiteStatistic.destroy({
        where: {
          date: req.params.date,
        },
      })
      .then((result) => {
        res.send(200);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  SiteStatistic.findById(req.params.date)
  .then(respond)
  .catch(onError);
};
