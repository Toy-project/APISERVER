/**
  * @api {get} /cart/:mem_id 특정 장바구니 조회
  * @apiName GetSpecificCart
  * @apiGroup Cart
  *
  * @apiParam {Number} mem_id 회원 외부키
  *
  * @apiSuccess {Number} cart_id 장바구니 기본키
  * @apiSuccess {Number} mem_id 회원 외부키
  * @apiSuccess {Number} club_id 단체 외부키
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "cart_id" : 1,
  *       "mem_id" : 1,
  *       "club_id" : 1
  *     }]
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
*/

/**
  * @api {post} /cart/ 장바구니 생성
  * @apiName PostCart
  * @apiGroup Cart
  *
  * @apiParam {Number} mem_id 회원 외부키
  * @apiParam {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     [{
  *       "cart_id" : 1,
  *       "mem_id" : 1,
  *       "club_id" : 1
  *     }]
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
  * @api {delete} /cart/:cart_id 장바구니 삭제
  * @apiName deleteCart
  * @apiGroup Cart
  *
  * @apiParam {Number} mem_id 회원 외부키

  * @apiSuccessExample Success-Response :
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
*/
