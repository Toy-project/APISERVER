const error = require('../../helper/errorHandler');
const axios = require('axios');

exports.getColleges = function (req, res, next) {
  const url = 'www.career.go.kr/cnet/openapi/getOpenApi?apiKey=3942376907ca20d1edc9bdb7f31c5696&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list';
  const start = req.params.start || req.query.start;
  const end = req.params.end || req.query.end;

  const onError = (err) => {
    console.log(err.data);
    next(err);
  };

  const respond = (results) => {
    console.log(results);
    results ? res.status(200).json(results) : next(error(400));
  };

  console.log(`${url}&thisPage=${start}&perPage=${end}`);

  axios({
    method: 'get',
    timeout: 20000,
    url: `${url}&thisPage=${start}&perPage=${end}`,
    responseType: 'json'
  })
  .then(respond)
  .catch(onError);
};
