/**
  * @api {get} /cart/:mem_id 회원 장바구니 전체 조회
  * @apiName GetSpecificCart
  * @apiGroup Cart
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} mem_id 회원 고유값
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} cart_id 장바구니 고유값
  * @apiSuccess {Number} mem_id 회원 고유값
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccess {String} club_userid 단체 아이디
  * @apiSuccess {String} club_email 단체 이메일
  * @apiSuccess {String} club_name 단체 이름
  * @apiSuccess {String} club_profile_photo 단체 프로필 사진
  * @apiSuccess {String} club_phone 단체 전화번호
  * @apiSuccess {String} club_photo 단체 사진
  * @apiSuccess {String} club_ex 단체 설명
  * @apiSuccess {String} club_copyright 단체 카피라이트
  * @apiSuccess {String} club_college 단체 소속대학
  * @apiSuccess {String} club_history 단체 연혁
  * @apiSuccess {String} club_price_duration 단체 금액 작업기간
  * @apiSuccess {Number} club_views 단체 조회수
  * @apiSuccess {Number} union_enabled 연합 여부
  * @apiSuccess {Number} club_rating 단체 등급
  * @apiSuccess {Date} club_update 단체 업데이트
  * @apiSuccess {Date} club_create_date 단체 생성 날짜
  * @apiSuccess {String} club_username 단체 회장명
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       count: 1,
  *       rows: [
  *         {
  *           "cart_id": 1,
  *           "mem_id": 1,
  *           "club_id": 1,
  *           "club": {
  *             "club_userid": "test",
  *             "club_email": "test@gmail.com",
  *             "club_name": "단체이름",
  *             "club_profile_photo": "thumb.jpg",
  *             "club_phone": "000-0000-0000",
  *             "club_photo": "visual.jpg",
  *             "club_ex": "단체 설명입니다.",
  *             "club_copyright": "단체 문구",
  *             "club_college": "단체 대학",
  *             "club_history": "단체 연혁",
  *             "club_price_duration": "단체 기간 금액",
  *             "club_views": 0,
  *             "union_enabled": 1,
  *             "club_rating": 0,
  *             "club_update": "0000-00-00T00:00:00.000Z",
  *             "club_create_date": "0000-00-00T00:00:00.000Z",
  *             "club_username": "홍길동",
  *           }
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
  * @api {post} /cart 장바구니 생성
  * @apiName CreateCart
  * @apiGroup Cart
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} mem_id 회원 고유값
  * @apiParam {Number} club_id 단체 고유값
  *
  * @apiSuccess {Number} cart_id 장바구니 고유값
  * @apiSuccess {Number} mem_id 회원 고유값
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     {
  *       "cart_id" : 1,
  *       "mem_id" : 1,
  *       "club_id" : 1
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
  * @api {delete} /cart/:cart_id 장바구니 삭제
  * @apiName DeleteCart
  * @apiGroup Cart
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} cart_id 장바구니 고유값

  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 Ok
  *     true
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
