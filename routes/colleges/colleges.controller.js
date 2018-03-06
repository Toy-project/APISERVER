const error = require('../../helper/errorHandler');
import axios from 'axios';

exports.getColleges = function (req, res, next) {
  const url = 'www.career.go.kr/cnet/openapi/getOpenApi?apiKey=3942376907ca20d1edc9bdb7f31c5696&svcType=api&svcCode=SCHOOL&contentType=json&gubun=univ_list';
  const start = req.params.start || req.query.start;
  const end = req.params.end || req.query.end;

  const onError = (err) => {
    next(err);
  };

  const respond = (data) => {

  };

  axios({
    method: 'get',
    timeout: 20000,
    url: `${url}&thisPage=${start}&perPage=${end}`,
    responseType: 'json'
  })
  .then(respond)
  .catch(onError);
};
