/**
  * @api {get} /blacklist 전체 블랙리스트 조회
  * @apiName GetAllBlacklist
  * @apiGroup Blacklist
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} mem_id 회원 고유값
  * @apiSuccess {Number} black_type 블랙리스트 유형
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       count: 1,
  *       rows: [
  *         {
  *           "mem_id": 1,
  *           "black_type": "경고",
  *         }
  *       ],
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
 * @api {get} /blacklist/:mem_id 특정 블랙리스트 조회
 * @apiName GetSpecificBlacklist
 * @apiGroup Blacklist
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} mem_id 회원 고유값
 *
 * @apiSuccess {Number} mem_id 회원 고유값
 * @apiSuccess {String} black_type 블랙리스트 유형
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "mem_id": 1,
 *       "black_type": "경고",
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
 * @api {delete} /blacklist/:mem_id 블랙리스트 삭제
 * @apiName DeleteBlacklist
 * @apiGroup Blacklist
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} mem_id 회원 고유값
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
 * @api {post} /Blacklist/ 블랙리스트 생성
 * @apiName CreateBlacklist
 * @apiGroup Blacklist
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {number} mem_id 회원 고유값
 * @apiParam {String} black_type 블랙리스트 유형
 *
 * @apiSuccess {Number} mem_id 회원 고유값
 * @apiSuccess {String} black_type 블랙리스트 유형
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "mem_id": 1,
 *       "black_type": "경고",
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
 * @api {put} /Blacklist/:mem_id 블랙리스트 수정
 * @apiName UpdateBlacklist
 * @apiGroup Blacklist
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} mem_id 회원 고유값
 * @apiParam {String} black_type 블랙리스트 유형
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
