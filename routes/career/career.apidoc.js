/**
  * @api {get} /career 전체 경력 조회
  * @apiName GetAllCareer
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} career_id 경력 고유값
  * @apiSuccess {String} career_name 경력 이름
  * @apiSuccess {String} career_ex 경력 설명
  * @apiSuccess {String} career_photo 경력 사진
  * @apiSuccess {Date} career_due_start 경력 기간 시작일
  * @apiSuccess {Date} career_due_end 경력 기간 마지막일
  * @apiSuccess {Number} career_people 경력 인원
  * @apiSuccess {String} career_co 경력 기업
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       count: 1,
  *       rows: [
  *         {
  *           "career_id": 1,
  *           "career_name": "작업",
  *           "career_ex": "작업하였습니다.",
  *           "career_photo": "thumb.jpg",
  *           "career_due_start": "0000-00-00T00:00:00.000Z",
  *           "career_due_end": "0000-00-00T00:00:00.000Z",
  *           "career_people": "1",
  *           "career_co": "한국기업",
  *           "club_id": 1,
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
  * @api {get} /career/club/:club_id 단체별 경력 전체 조회
  * @apiName GetAllCareerByClubId
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} club_id 단체 고유값
  * @apiParam {Number} start offset
  * @apiParam {Number} end limit
  *
  * @apiSuccess {Number} career_id 경력 고유값
  * @apiSuccess {String} career_name 경력 이름
  * @apiSuccess {String} career_ex 경력 설명
  * @apiSuccess {String} career_photo 경력 사진
  * @apiSuccess {Date} career_due_start 경력 기간 시작일
  * @apiSuccess {Date} career_due_end 경력 기간 마지막일
  * @apiSuccess {Number} career_people 경력 인원
  * @apiSuccess {String} career_co 경력 기업
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       count: 1,
  *       rows: [
  *         {
  *           "career_id": 1,
  *           "career_name": "작업",
  *           "career_ex": "작업하였습니다.",
  *           "career_photo": "thumb.jpg",
  *           "career_due_start": "0000-00-00T00:00:00.000Z",
  *           "career_due_end": "0000-00-00T00:00:00.000Z",
  *           "career_people": "1",
  *           "career_co": "한국기업",
  *           "club_id": 1,
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
  * @api {get} /carrer/:career_id 특정 경력 조회
  * @apiName GetSpecificCareer
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} career_id 경력 고유값
  *
  * @apiSuccess {Number} career_id 경력 고유값
  * @apiSuccess {String} career_name 경력 이름
  * @apiSuccess {String} career_ex 경력 설명
  * @apiSuccess {String} career_photo 경력 사진
  * @apiSuccess {Date} career_due_start 경력 기간 시작일
  * @apiSuccess {Date} career_due_end 경력 기간 마지막일
  * @apiSuccess {Number} career_people 경력 인원
  * @apiSuccess {String} career_co 경력 기업
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 200 OK
  *     {
  *       "career_id": 1,
  *       "career_name": "작업",
  *       "career_ex": "작업하였습니다.",
  *       "career_photo": "thumb.jpg",
  *       "career_due_start": "0000-00-00T00:00:00.000Z",
  *       "career_due_end": "0000-00-00T00:00:00.000Z",
  *       "career_people": "1",
  *       "career_co": "한국기업",
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
  * @api {post} /career 경력 생성
  * @apiName CreateCareer
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {String} career_name 경력 이름
  * @apiParam {String} career_ex 경력 설명
  * @apiParam {FormData} career_photo 경력 사진
  * @apiParam {Date} career_due_start 경력 기간 시작일
  * @apiParam {Date} career_due_end 경력 기간 마지막일
  * @apiParam {Number} career_people 경력 인원
  * @apiParam {String} career_co 경력 기업
  * @apiParam {Number} club_id 단체 고유값
  *
  * @apiSuccess {Number} career_id 경력 고유값
  * @apiSuccess {String} career_name 경력 이름
  * @apiSuccess {String} career_ex 경력 설명
  * @apiSuccess {String} career_photo 경력 사진
  * @apiSuccess {Date} career_due_start 경력 기간 시작일
  * @apiSuccess {Date} career_due_end 경력 기간 마지막일
  * @apiSuccess {Number} career_people 경력 인원
  * @apiSuccess {String} career_co 경력 기업
  * @apiSuccess {Number} club_id 단체 고유값
  * @apiSuccessExample Success-Response :
  *     HTTP/1.1 201 Created
  *     {
  *       "career_photo": null,
  *       "career_id": 1,
  *       "career_name": "작업",
  *       "career_ex": "작업하였습니다.",
  *       "career_due_start": "0000-00-00T00:00:00.000Z",
  *       "career_due_end": "0000-00-00T00:00:00.000Z",
  *       "career_people": "1",
  *       "career_co": "한국기업",
  *       "club_id": "1"
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


/**
  * @api {delete} /career/:career_id 경력 삭제
  * @apiName deleteCareer
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} career_id 경력 고유값
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


/**
  * @api {delete} /career/club/:club_id 단체별 경력 전체 삭제
  * @apiName deleteCareerByClubId
  * @apiGroup Career
  *
  * @apiHeader {String} Authorization bearer token
  * @apiHeaderExample Request-Example:
  *     "Authorization": "bearer token"
  *
  * @apiParam {Number} club_id 단체 고유값
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


/**
 * @api {put} /career/:career_id 경력 수정
 * @apiName UpdateCareer
 * @apiGroup Career
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} career_id 경력 고유값
 *
 * @apiParam {String} career_name 경력 이름
 * @apiParam {String} career_ex 경력 설명
 * @apiParam {FormData} career_photo 경력 사진
 * @apiParam {String} career_due_start 경력 기간 시작일
 * @apiParam {String} career_due_end 경력 기간 마지막일
 * @apiParam {Number} career_people 경력 인원
 * @apiParam {String} career_co 경력 기업
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     0
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Create
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

