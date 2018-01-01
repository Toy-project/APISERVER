/**
 * @api {get} /sns/ 모든 SNS 조회
 * @apiName GetAllSns
 * @apiGroup Sns
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiSuccess {Number} sns_id SNS 아이디
 * @apiSuccess {String} sns_name SNS 이름
 * @apiSuccess {String} sns_url SNS URL
 * @apiSuccess {Number} club_id 단체 아이디
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     [{
 *       "sns_id": 1,
 *       "sns_name": "페이스북",
 *       "sns_url": "www.facebook.com",
 *       "club_id": 1,
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
 * 
 */


 /**
 * @api {get} /sns/:sns_id 특정 SNS 조회
 * @apiName GetSpecificSns
 * @apiGroup Sns
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} sns_id SNS 아이디
 *
 * @apiSuccess {Number} sns_id SNS 아이디
 * @apiSuccess {String} sns_name 태그 이름
 * @apiSuccess {String} sns_url SNS URL
 * @apiSuccess {Number} club_id 단체 아이디
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "sns_id": 1,
 *       "sns_name": "페이스북",
 *       "sns_url": "www.facebook.com",
 *       "club_id": 1,
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
 * @api {delete} /sns/:sns_id SNS 삭제
 * @apiName DeleteSns
 * @apiGroup Sns
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} sns_id SNS 아이디
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
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


 /**
 * @api {post} /sns/ SNS 생성
 * @apiName CreateSns
 * @apiGroup Sns
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {String} sns_name SNS 이름
 * @apiParam {String} sns_url SNS URL
 * @apiParam {Number} club_id 단체 아이디
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "sns_id": 1,
 *       "sns_name": "페이스북",
 *       "sns_url": "www.facebook.com",
 *       "club_id": 1,
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
 * @api {put} /sns/:sns_id SNS 수정
 * @apiName UpdateSns
 * @apiGroup Sns
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} sns_id SNS 아이디
 * @apiParam {String} sns_name SNS 이름
 * @apiParam {String} sns_url SNS URL
 * @apiParam {Number} club_id 단체 아이디
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     0
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     1
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