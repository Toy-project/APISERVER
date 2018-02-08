/**
  * @api {get} /site-statistic 전체 사이트 통계 조회
  * @apiName GetSiteStatistic
  * @apiGroup SiteStatistic
  *
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Date} date 날짜
  * @apiSuccess {Number} site_connect_count 사이트 접속 수
  * @apiSuccess {Number} site_pc_connect_count 사이트 PC 접속 수
  * @apiSuccess {Number} site_mobile_connect_count 사이트 Mobile 접속 수
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       "count": 1,
  *       "rows": [
  *         {
  *           "date": "2018-01-01",
  *           "site_connect_count": 1,
  *           "site_pc_connect_count": 1,
  *           "site_mobile_connect_count": 0
  *         }
  *       ]
  *     }
  *
  * @apiError BadRequest 잘못된 요청
  * @apiError Unauthorized 인증 만료 혹은 잘못된 인증으로 요청
  * @apiError NotFound 잘못된 경로 요청
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Requset
  *     {
  *       "status": 400,
  *       "message": "Bad Request"
  *     }
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "status": 401,
  *       "message": "Unauthorized"
  *     }
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": 404,
  *       "error": "Not Found"
  *     }
  *
*/


/**
  * @api {get} /site-statistic/:date 특정 날짜 사이트 통계 조회
  * @apiName GetSpecificSiteStatistic
  * @apiGroup SiteStatistic
  *
  * @apiParam {Date} date 날짜 (2018-01-01)
  *
  * @apiSuccess {Date} date 날짜
  * @apiSuccess {Number} site_connect_count 사이트 접속 수
  * @apiSuccess {Number} site_pc_connect_count 사이트 PC 접속 수
  * @apiSuccess {Number} site_mobile_connect_count 사이트 Mobile 접속 수
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       "date" : "2018-01-01",
  *       "site_connect_count" : 2,
  *       "site_pc_connect_count" : 1,
  *       "site_mobile_connect_count" : 1
  *     }
  *
  * @apiError BadRequest 잘못된 요청
  * @apiError Unauthorized 인증 만료 혹은 잘못된 인증으로 요청
  * @apiError NotFound 잘못된 경로 요청
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Requset
  *     {
  *       "status": 400,
  *       "message": "Bad Request"
  *     }
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "status": 401,
  *       "message": "Unauthorized"
  *     }
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": 404,
  *       "error": "Not Found"
  *     }
  *
*/


/**
  * @api {put} /site-statistic/:date 사이트 통계 생성 및 추가
  * @apiName UpdateSiteStatistic
  * @apiGroup SiteStatistic
  *
  * @apiParam {Date} date 날짜 (2018-01-01)
  *
  * @apiSuccess {Date} date 날짜
  * @apiSuccess {Number} site_connect_count 사이트 접속 수
  * @apiSuccess {Number} site_pc_connect_count 사이트 PC 접속 수
  * @apiSuccess {Number} site_mobile_connect_count 사이트 Mobile 접속 수
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     {
  *       "date" : "2018-01-01",
  *       "site_connect_count" : 2,
  *       "site_pc_connect_count" : 1,
  *       "site_mobile_connect_count" : 1
  *     }
  *
  * @apiError BadRequest 잘못된 요청
  * @apiError Unauthorized 인증 만료 혹은 잘못된 인증으로 요청
  * @apiError NotFound 잘못된 경로 요청
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Requset
  *     {
  *       "status": 400,
  *       "message": "Bad Request"
  *     }
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "status": 401,
  *       "message": "Unauthorized"
  *     }
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": 404,
  *       "error": "Not Found"
  *     }
  *
*/


/**
  * @api {delete} /site-statistic/:date 사이트 통계 삭제
  * @apiName DeleteSiteStatistic
  * @apiGroup SiteStatistic
  *
  * @apiParam {Date} date 날짜 (2018-01-01)
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       //...
  *     }
  *
  * @apiError BadRequest 잘못된 요청
  * @apiError Unauthorized 인증 만료 혹은 잘못된 인증으로 요청
  * @apiError NotFound 잘못된 경로 요청
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Requset
  *     {
  *       "status": 400,
  *       "message": "Bad Request"
  *     }
  *     HTTP/1.1 401 Unauthorized
  *     {
  *       "status": 401,
  *       "message": "Unauthorized"
  *     }
  *     HTTP/1.1 404 Not Found
  *     {
  *       "status": 404,
  *       "error": "Not Found"
  *     }
  *
*/
