/**
  * @api {get} /session/ 전체 세션 조회
  * @apiName GetSession
  * @apiGroup Session
  *
  * @apiSuccess {Number} session_id 세션 기본키
  * @apiSuccess {STRING} ip_address 아이피 주소
  * @apiSuccess {STRING} user_agent 유저 에이젼트
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "session_id" : 1,
  *       "ip_address" : "172.1.1.1",
  *       "user_agent" : "Test"
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
  * @api {get} /session/:session_id 특정 세션 조회
  * @apiName GetSpecificSession
  * @apiGroup Session
  *
  * @apiParam {Number} session_id 세션 기본키
  *
  * @apiSuccess {Number} session_id 세션 기본키
  * @apiSuccess {STRING} ip_address 아이피 주소
  * @apiSuccess {STRING} user_agent 유저 에이젼트
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "session_id" : 1,
  *       "ip_address" : "172.1.1.1",
  *       "user_agent" : "test"
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
  * @api {post} /session/ 세션 생성
  * @apiName PostSession
  * @apiGroup Session
  *
  * @apiParam {STRING} ip_address 아이피 주소
  * @apiParam {STRING} user_agent 유저 에이젼트
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     [{
  *       "session_id" : 1,
  *       "ip_address" : "172.1.1.1",
  *       "user_agent" : "test"
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
  * @api {put} /session/:session_id 세션 수정
  * @apiName PutSession
  * @apiGroup Session
  *
  * @apiParam {Number} session_id 세션 기본키
  *
  * @apiParam {STRING} ip_address 아이피 주소
  * @apiParam {STRING} user_agent 유저 에이젼트
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Updated
  *     [{
  *       "session_id" : 1,
  *       "ip_address" : "172.1.1.1",
  *       "user_agent" : "test"
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
  *     HTTPpos/1.1 401 Unauthorized
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
  * @api {delete} /session/:session_id 세션 삭제
  * @apiName DeleteSession
  * @apiGroup Session
  *
  * @apiParam {Number} session_id 세션 기본키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 Ok
  *    {
  *     //...
  *    }
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
