const path = require('path');
const Site_statistic = require(path.join(__dirname, './Site_statistic.model.js'));

exports.GetAllSite_statistic = (req, res, next) => {
  console.log("get GetAllSite_statistic");

  const respond = (results) => {
    console.log("Respond at GetAllSite_statistic");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get GetAllSite_statistic");
    next(err);
  }

  Site_statistic.findAll()
  .then(respond)
  //.catch(onError);
}

exports.GetSite_statistic = (req, res, next) => {
  console.log("get GetSite_statistic");

  const date = req.params.date;

  const respond = (results) => {
    console.log("Respond at GetSite_statistic");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get GetSite_statistic");
    next(err);
  }

  Site_statistic.findOne({
    date : date
  })
  .then(respond)
  //.catch(onError);
}

exports.createSite_statistic = (req, res, next) => {
  console.log("get createSite_statistic");

  const { site_connect_count, site_pc_connect_count, site_mobile_connect_count } = req.body;
  const createList = {
    date : new Date(),
    site_connect_count : site_connect_count,
    site_pc_connect_count : site_pc_connect_count,
    site_mobile_connect_count : site_mobile_connect_count
  }

  const respond = (results) => {
    console.log("Respond at createSite_statistic");
    res.status(200).json({
      isCreated: true
    });
  }

  const onErorr = (err) => {
    console.log("Error At Get createSite_statistic");
    next(err);
  }

  Site_statistic.create(createList)
  .then(respond)
  //.catch(onError);
}

exports.updateSite_statistic = (req, res, next) => {
  console.log("get updateSite_statistic");

  const date = req.params.date;
  const { site_connect_count, site_pc_connect_count, site_mobile_connect_count } = req.body;
  const updateList = {
    site_connect_count : site_connect_count,
    site_pc_connect_count : site_pc_connect_count,
    site_mobile_connect_count : site_mobile_connect_count
  }

  const respond = (results) => {
    console.log("Respond at updateSite_statistic");
    res.status(201).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get updateSite_statistic");
    next(err);
  }

  Site_statistic.update(updateList, {
    where : {
      date : date
    }
  })
  .then(respond)
  //.catch(onError);
}

exports.removeSite_statistic = (req, res, next) => {
  console.log("get removeSite_statistic");

  const date = req.params.date;

  const respond = (results) => {
    console.log("Respond at removeSite_statistic");
    res.status(201).json({
      isDeleted : true
    });
  }

  const onErorr = (err) => {
    console.log("Error At Get removeSite_statistic");
    next(err);
  }

  Site_statistic.destroy({
    where : {
      date : date
    }
  })
  .then(respond)
  //.catch(onError);
}
