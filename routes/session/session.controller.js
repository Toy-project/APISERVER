const path = require('path');
const Session = require(path.join(__dirname, './session.model.js'));

exports.GetAllSession = (req, res, next) => {
  console.log("get GetAllSession");

  const respond = (results) => {
    console.log("Respond at GetAllSession");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get GetAllSession");
    next(err);
  }

  Session.findAll()
  .then(respond)
  //.catch(onError);
}

exports.GetSession = (req, res, next) => {
  console.log("get GetSession");

  const session_id = req.params.session_id;

  const respond = (results) => {
    console.log("Respond at GetSession");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get GetSession");
    next(err);
  }

  Session.findOne({
    session_id : session_id
  })
  .then(respond)
  //.catch(onError);
}

exports.createSession = (req, res, next) => {
  console.log("get createSession");

  const { ip_address, user_agent } = req.body;
  const createList = {
    ip_address : ip_address,
    user_agent : user_agent
  }

  const respond = (results) => {
    console.log("Respond at createSession");
    res.status(200).json({
      isCreated: true
    });
  }

  const onErorr = (err) => {
    console.log("Error At Get createSession");
    next(err);
  }

  Session.create(createList)
  .then(respond)
  //.catch(onError);
}

exports.updateSession = (req, res, next) => {
  console.log("get updateSession");

  const session_id = req.params.session_id;
  const { ip_address, user_agent } = req.body;
  const updateList = {
    ip_address : ip_address,
    user_agent : user_agent
  }

  const respond = (results) => {
    console.log("Respond at updateSession");
    res.status(201).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get updateSession");
    next(err);
  }

  Session.update(updateList, {
    where : {
      session_id : session_id
    }
  })
  .then(respond)
  //.catch(onError);
}

exports.removeSession = (req, res, next) => {
  console.log("get removeSession");

  const session_id = req.params.session_id;

  const respond = (results) => {
    console.log("Respond at removeSession");
    res.status(201).json({
      isDeleted : true
    });
  }

  const onErorr = (err) => {
    console.log("Error At Get removeSession");
    next(err);
  }

  Session.destroy({
    where : {
      session_id : session_id
    }
  })
  .then(respond)
  //.catch(onError);
}
