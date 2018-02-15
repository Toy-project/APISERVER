/**
  * @api {get} /comment/club/:club_id 단체별 댓글 조회
  * @apiName GetCommentByClubId
  * @apiGroup Comment
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} club_id 단체 고유값
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} comment_id 댓글 고유값
  * @apiSuccess {String} comment_contents 댓글 내용
  * @apiSuccess {Number} comment_writer 댓글 작성자
  * @apiSuccess {String} comment_writer_type 댓글 작성자 유형
  * @apiSuccess {Date} comment_update 댓글 업데이트
  * @apiSuccess {Float} club_rating 단체 등급
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       "count": 1,
  *       "club_rating_avg": 3.1,
  *       "rows": [
  *         {
  *           "comment_id": 1,
  *           "comment_contents": "댓글입니다.",
  *           "comment_writer": 1,
  *           "comment_writer_type": "member",
  *           "comment_update": "0000-00-00T00:00:00.000Z",
  *           "club_rating": 3.5,
  *           "club_id": 1
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
  * @api {get} /comment/writer/:writer_id 작성자별 댓글 조회
  * @apiName GetSpecificCommentByMemId
  * @apiGroup Comment
  *
  * @apiParam {Number} writer_id 댓글 작성자 (회원 혹은 단체 고유값)
  * @apiParam {String} type 댓글 작성자 유형 (member 혹은 club)
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} comment_id 댓글 고유값
  * @apiSuccess {String} comment_contents 댓글 내용
  * @apiSuccess {Number} comment_writer 댓글 작성자
  * @apiSuccess {String} comment_writer_type 댓글 작성자 유형
  * @apiSuccess {Date} comment_update 댓글 업데이트
  * @apiSuccess {Float} club_rating 단체 등급
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       "count": 1,
  *       "rows": [
  *         {
  *           "comment_id": 1,
  *           "comment_contents": "댓글입니다.",
  *           "comment_writer": 1,
  *           "comment_writer_type": "member",
  *           "comment_update": "0000-00-00T00:00:00.000Z",
  *           "club_rating": 3.5,
  *           "club_id": 1
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
  * @api {post} /comment 댓글 생성
  * @apiName CreateComment
  * @apiGroup Comment
  *
  * @apiParam {String} comment_contents 댓글 내용
  * @apiParam {Number} comment_writer 댓글 작성자 (회원 혹은 단체 고유값)
  * @apiParam {String} comment_writer_type 댓글 작성자 유형 (member 혹은 club)
  * @apiParam {Float} club_rating 단체 등급
  * @apiParam {Number} club_id 단체 아이디
  *
  * @apiSuccess {Number} comment_id 댓글 고유값
  * @apiSuccess {String} comment_contents 댓글 내용
  * @apiSuccess {Number} comment_writer 댓글 작성자
  * @apiSuccess {String} comment_writer_type 댓글 작성자 유형
  * @apiSuccess {Date} comment_update 댓글 업데이트
  * @apiSuccess {Float} club_rating 단체 등급
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     {
  *       "comment_id" : 1,
  *       "comment_contents" : "댓글입니다.",
  *       "comment_writer" : 1,
  *       "comment_writer_type" : "member",
  *       "comment_update" : "0000-00-00T00:00:00.000Z",
  *       "club_rating" : 1.5,
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
  * @api {put} /comment/:comment_id 댓글 수정
  * @apiName UpdateComment
  * @apiGroup Comment
  *
  * @apiParam {Number} comment_id 댓글 고유값
  * @apiParam {String} comment_contents 댓글 내용
  * @apiParam {Float} club_rating 단체 등급
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


/**
  * @api {delete} /comment/:comment_id 댓글 삭제
  * @apiName DeleteComment
  * @apiGroup Comment
  *
  * @apiParam {Number} comment_id 댓글 고유값
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
  *
*/
