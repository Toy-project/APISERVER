/**
  * @api {get} /site-statistic/ 전체 통계 조회
  * @apiName GetSite_statistic
  * @apiGroup Site_statistic
  *
  * @apiSuccess {Number} site_connect_count 총 통계
  * @apiSuccess {Number} site_pc_connect_count PC 통계
  * @apiSuccess {Number} site_mobile_connect_count 모바일 통계
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "date" : "2018-01-01 15:24:46",
  *       "site_connect_count" : 5,
  *       "site_pc_connect_count" : 2,
  *       "site_connect_count" : 3
  *     }]
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
*/

/**
  * @api {get} /site-statistic/:date 특정 통계 조회
  * @apiName GetSpecificSite_statistic
  * @apiGroup Site_statistic
  *
  * @apiParam {Date} date 통계 기본키
  *
  * @apiSuccess {Number} site_connect_count 총 통계
  * @apiSuccess {Number} site_pc_connect_count PC 통계
  * @apiSuccess {Number} site_mobile_connect_count 모바일 통계
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "date" : "2018-01-01 15:24:46",
  *       "site_connect_count" : 5,
  *       "site_pc_connect_count" : 2,
  *       "site_connect_count" : 3
  *     }]
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
*/

/**
  * @api {put} /site-statistic/:date 통계 수정
  * @apiName PutSite_statistic
  * @apiGroup Site_statistic
  *
  * @apiParam {Date} date 통계 기본키
  * @apiParam {Number} site_connect_count 총 통계
  * @apiParam {Number} site_pc_connect_count PC 통계
  * @apiParam {Number} site_mobile_connect_count 모바일 통계
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Updated
  *     [{
  *       "date" : "2018-01-01 15:24:46",
  *       "site_connect_count" : 5,
  *       "site_pc_connect_count" : 2,
  *       "site_connect_count" : 3
  *     }]
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
*/

/**
  * @api {delete} /site-statistic/:date 통계 삭제
  * @apiName deleteSite_statistic
  * @apiGroup Site_statistic
  *
  * @apiParam {Date} date 통계 기본키
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
*/
