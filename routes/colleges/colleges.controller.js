const error = require('../../helper/errorHandler');
const axios = require('axios');

exports.getColleges = function (req, res, next) {
  const start = req.params.start || req.query.start;
  const end = req.params.end || req.query.end;
  const keyword = req.params.keyword || req.query.keyword;

  const url = `http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=3942376907ca20d1edc9bdb7f31c5696&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list&thisPage=${start}&perPage=${end}&searchSchulNm=${keyword}`;

  const onError = (err) => {
    next(err);
  };

  const respond = (results) => {
    results ? res.status(200).json(results.data) : next(error(400));
  };

  axios({
    method: 'get',
    timeout: 20000,
    url: url,
  })
  .then(respond)
  .catch(onError);
};
