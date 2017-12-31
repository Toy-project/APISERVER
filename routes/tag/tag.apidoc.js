/**
 * @api {get} /tag/ 모든 태그 조회
 * @apiName GetAllTag
 * @apiGroup Tag
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiSuccess {Number} tag_id 태그 아이디
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     [{
 *       "tag_id": 1,
 *       "tag_name": "성실",
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
 * @api {get} /tag/:tag_id 특정 태그 조회
 * @apiName GetSpecificTag
 * @apiGroup Tag
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} tag_id 태그 아이디
 *
 * @apiSuccess {Number} tag_id 태그 아이디
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "tag_id": 1,
 *       "tag_name": "성실",
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
 * @api {delete} /tag/:tag_id 태그 삭제
 * @apiName DeleteTag
 * @apiGroup Tag
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} tag_id 태그 아이디
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
 * @api {post} /tag/ 태그 생성
 * @apiName CreateTag
 * @apiGroup Tag
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {number} tag_id 태그 아이디
 * @apiParam {String} tag_name 태그 이름
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "tag_id": 1,
 *       "tag_name": "성실",
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
 * @api {put} /tag/:tag_id 태그 수정
 * @apiName UpdateTag
 * @apiGroup Tag
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} tag_id 태그 아이디
 * @apiParam {String} tag_name 태그 이름
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