/**
  * @api {get} /comment/club/:club_id 특정 댓글 조회 By 단체키
  * @apiName GetSpecificCommentByClubId
  * @apiGroup Comment
  *
  * @apiParam {Number} club_id 단체 외부키
  *
  * @apiSuccess {Number} comment_id 댓글 기본키
  * @apiSuccess {STRING} comment_contents 댓글 내용
  * @apiSuccess {FLOAT} club_rating 단체 평가
  * @apiSuccess {DATE} comment_update 최신 업데이트 날짜
  * @apiSuccess {Number} mem_id 회원 외부키
  * @apiSuccess {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "comment_id" : 1,
  *       "comment_contents" : "test",
  *       "club_rating" : 1.5,
  *       "comment_update" : "2017-12-28 13:40:18",
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
  * @api {get} /comment/member/:mem_id 특정 댓글 조회 By 회원키
  * @apiName GetSpecificCommentByMemId
  * @apiGroup Comment
  *
  * @apiParam {Number} mem_id 회원 외부키
  *
  * @apiSuccess {Number} comment_id 댓글 기본키
  * @apiSuccess {STRING} comment_contents 댓글 내용
  * @apiSuccess {FLOAT} club_rating 단체 평가
  * @apiSuccess {DATE} comment_update 최신 업데이트 날짜
  * @apiSuccess {Number} mem_id 회원 외부키
  * @apiSuccess {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "comment_id" : 1,
  *       "comment_contents" : "test",
  *       "club_rating" : 1.5,
  *       "comment_update" : "2017-12-28 13:40:18",
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
  * @api {get} /comment/:mem_id/:club_id 특정 댓글 조회 by 단체키, 회원키
  * @apiName GetSpecificCommentByMemIdAndClubId
  * @apiGroup Comment
  *
  * @apiParam {Number} mem_id 회원 외부키
  * @apiParam {Number} club_id 단체 외부키
  *
  * @apiSuccess {Number} comment_id 댓글 기본키
  * @apiSuccess {STRING} comment_contents 댓글 내용
  * @apiSuccess {FLOAT} club_rating 단체 평가
  * @apiSuccess {DATE} comment_update 최신 업데이트 날짜
  * @apiSuccess {Number} mem_id 회원 외부키
  * @apiSuccess {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     [{
  *       "comment_id" : 1,
  *       "comment_contents" : "test",
  *       "club_rating" : 1.5,
  *       "comment_update" : "2017-12-28 13:40:18",
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
  * @api {post} /comment/ 댓글 생성
  * @apiName PostComment
  * @apiGroup Comment
  *
  * @apiParam {STRING} comment_contents 댓글 내용
  * @apiParam {FLOAT} club_rating 단체 평가
  * @apiParam {DATE} comment_update 최신 업데이트 날짜
  * @apiParam {Number} mem_id 회원 외부키
  * @apiParam {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     [{
  *       "comment_id" : 1,
  *       "comment_contents" : "test",
  *       "club_rating" : 1.5,
  *       "comment_update" : "2017-12-28 13:40:18",
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
  * @api {put} /comment/:comment_id 댓글 수정
  * @apiName PutComment
  * @apiGroup Comment
  *
  * @apiParam {Number} comment_id 댓글키
  *
  * @apiParam {STRING} comment_contents 댓글 내용
  * @apiParam {FLOAT} club_rating 단체 평가
  * @apiParam {DATE} comment_update 최신 업데이트 날짜
  *
  * @apiSuccess {Number} mem_id 회원 외부키
  * @apiSuccess {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Updated
  *     [{
  *       "comment_id" : 1,
  *       "comment_contents" : "test",
  *       "club_rating" : 1.5,
  *       "comment_update" : "2017-12-28 13:40:18",
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
  * @api {delete} /comment/:comment_id 댓글 삭제
  * @apiName DeleteComment
  * @apiGroup Comment
  *
  * @apiParam {Number} comment_id 댓글키
  *
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
