const path = require('path');
const Comment = require(path.join(__dirname, './comment.model.js'));

exports.GetCommentByClubId = (req, res, next) => {
  console.log("get a comment by club id");

  const club_id = req.params.club_id;

  const respond = (results) => {
    console.log("Respond at GetComment");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get Comment");
    next(err);
  }

  Comment.findAll({
    where : {
      club_id: club_id
    }
  })
  .then(respond)
  //.catch(onError);
}

exports.GetCommentByMemId = (req, res, next) => {
  console.log("get a comment by mem_id");

  const mem_id = req.params.mem_id;

  const respond = (results) => {
    console.log("Respond at GetComment");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get Comment");
    next(err);
  }

  Comment.findAll({
    where : {
      mem_id: mem_id
    }
  })
  .then(respond)
  //.catch(onError);
}

exports.GetCommentByMemIdClubId = (req, res, next) => {
  console.log("get a comment by mem_id club_id");

  const mem_id = req.params.mem_id;
  const club_id = req.params.club_id;

  const respond = (results) => {
    console.log("Respond at GetComment");
    res.status(200).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At Get Comment");
    next(err);
  }

  Comment.findAll({
    where : {
      mem_id: mem_id,
      club_id : club_id
    }
  })
  .then(respond)
  //.catch(onError);
}

exports.createComment = (req, res, next) => {
  console.log("Create a comment");

  const { comment_contents, club_rating, mem_id, club_id, comment_update } = req.body;
  const createList = {
    comment_contents : comment_contents,
    club_rating : club_rating,
    comment_update : new Date(),
    mem_id : mem_id,
    club_id : club_id
  }

  const respond = (results) => {
    console.log("Respond at createComment");
    res.status(200).json({
      isCreated : true
    });
  }

  const onErorr = (err) => {
    console.log("Error At createComment");
    next(err);
  }

  Comment.create(createList)
  .then(respond)
  //.catch(onError)
}

exports.updateComment = (req, res, next) => {
  console.log("Create a updateComment");

  const { comment_contents, club_rating, comment_update } = req.body;
  const updateList = {
    comment_contents : comment_contents,
    club_rating : club_rating,
    comment_update : new Date()
  }

  const comment_id = req.params.comment_id;

  const respond = (results) => {
    console.log("Respond at updateComment");
    res.status(201).json(results);
  }

  const onErorr = (err) => {
    console.log("Error At updateComment");
    next(err);
  }

  Comment.update(updateList, {
    where : {
      comment_id : comment_id
    }
  })
  .then(respond)
  //.catch(onError)
}

exports.removeComment = (req, res, next) => {
  console.log("Create a removeComment");
  const comment_id = req.params.comment_id;

  const respond = (results) => {
    console.log("Respond at removeComment");
    res.status(201).json({
      isRemoved : true
    });
  }

  const onErorr = (err) => {
    console.log("Error At removeComment");
    next(err);
  }

  Comment.destroy({
    where : {
      comment_id: comment_id
    }
  })
  .then(respond)
  //.catch(onError);
}
