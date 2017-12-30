/**
 * @api {post} /auth/login 로그인
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiSuccess {String} mem_email 회원 이메일
 * @apiSuccess {String} mem_pw 회원 비밀번호
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "isValid": true,
 *       "token_type": "bearer",
 *       "access_token": "token value"
 *     }
 * @apiSuccessExample Failure-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "isValid": false
 *     }
 *
 * @apiError BadRequest 잘못된 요청
 * @apiError NotFound 잘못된 경로 요청
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Requset
 *     {
 *       "status": 400,
 *       "message": "Bad Request"
 *     }
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": 404,
 *       "error": "Not Found"
 *     }
 * 
 */
