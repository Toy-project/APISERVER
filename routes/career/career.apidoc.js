/**
  * @api {get} /carrer/:career_id 특정 경력 조회
  * @apiName GetSpecificCareer
  * @apiGroup Career
  *
  * @apiParam {Number} career_id 경력 기본키
  *
  * @apiSuccess {String} career_name 경력 이름(제목)
  * @apiSuccess {String} career_ex 경력 설명
  * @apiSuccess {String} career_due 경력 기간
  * @apiSuccess {String} career_photo 경력 사진
  * @apiSuccess {Number} club_id 단체 외부키
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
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
  * @api {post} /career/ 경력 생성
  * @apiName PostCareer
  * @apiGroup Career
  *
  * @apiParam {String} career_name 경력 이름(제목)
  * @apiParam {String} career_ex 경력 설명
  * @apiParam {String} career_due 경력 기간
  * @apiParam {String} career_photo 경력 사진
  * @apiParam {Number} club_id 단체 외부키
  *
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     {
  *       "cart_id" : 1,
  *       "mem_id" : 1,
  *       "club_id" : 1
  *     }
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
  * @api {delete} /career/:career_id 경력 삭제
  * @apiName deleteCareer
  * @apiGroup Career
  *
  * @apiParam {Number} career_id 경력 외부키

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
