/**
 * @api {get} /Category/ 모든 카테고리 조회
 * @apiName GetAllCategory
 * @apiGroup Category
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiSuccess {Number} cate_id 카테고리 기본키
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     [{
 *       "cate_id": 1,
 *       "cate_email": "IT",
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
 * @api {delete} /category/:cate_id 카테고리 삭제
 * @apiName DeleteCategory
 * @apiGroup Category
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} cate_id 카테고리 키본키
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
 * @api {post} /category/ 카테고리 생성
 * @apiName CreateCategory
 * @apiGroup Category
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {String} cate_id 카테고리 기본키
 * @apiParam {String} cate_name 카테고리 이름
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "cate_id": 1,
 *       "cate_name": "IT",
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
 * @api {put} /category/:cate_id 카테고리 수정
 * @apiName UpdateCategory
 * @apiGroup Category
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} cate_id 카테고리 키본키
 * @apiParam {String} cate_name 카테고리 이름
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