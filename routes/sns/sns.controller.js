const error = require('../../helper/errorHandler');
const Sns = require('./sns.model.js');

exports.getAllSns = (req, res, next) => {
  const onError = (err) => {
    res.send(err);
  };

  const respond = (results) => {
    res.status(200).json(results);
  };

  Sns.findAndCountAll({
    offset: +req.params.start || +req.query.start,
    limit: +req.params.end || +req.query.end,
  })
  .then(respond)
  .catch(onError);
};

exports.getSns = (req, res, next) => {
  const onError = (err) => {
    res.send(err);
  };

  const respond = (result) => {
    result ? res.status(200).json(result) : next(error(400));
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};

exports.getClubSns = (req, res, next) => {
  const onError = (err) => {
    res.send(err);
  };

  const respond = (results) => {
    results ? res.status(200).json(results) : next(error(400));
  };

  Sns.findAndCountAll({
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.createSns = (req, res, next) => {
  const createList = {
    sns_name: req.body.sns_name,
    sns_url: req.body.sns_url,
    club_id: req.body.club_id,
    // ...
  };

  const onError = (err) => {
    next(err);
  };

  const respond = (result) => {
    res.status(201).json(result);
  };

  Sns.create(createList)
  .then(respond)
  .catch(onError);
};

exports.deleteSns = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Sns.destroy({
        where: {
          sns_id: req.params.sns_id,
        },
      })
      .then((result) => {
        res.status(200).send(true);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};

exports.deleteSnsByClubId = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      Sns.destroy({
        where: {
          club_id: req.params.club_id,
        },
      })
      .then((result) => {
        res.status(200).send(true);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Sns.count({
    where: {
      club_id: req.params.club_id,
    },
  })
  .then(respond)
  .catch(onError);
};

exports.updateSns = (req, res, next) => {
  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {
    if (data) {
      const dataObj = JSON.parse(JSON.stringify(data));
      const updateList = Object.assign(dataObj, JSON.parse(JSON.stringify(req.body)));

      Sns.update(updateList, {
        where: {
          sns_id: req.params.sns_id,
        },
      })
      .then((result) => {
        res.status(201).json(updateList);
      })
      .catch(onError);
    } else {
      next(error(400));
    }
  };

  Sns.findById(req.params.sns_id)
  .then(respond)
  .catch(onError);
};
