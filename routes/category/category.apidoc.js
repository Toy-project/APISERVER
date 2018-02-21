/**
 * @api {get} /category 전체 카테고리 조회
 * @apiName GetAllCategory
 * @apiGroup Category
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} start offset
 * @apiParam {Number} end limit
 *
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "count": 1,
 *        "rows": [
 *          {
 *            "cate_id": 1,
 *            "cate_name": "IT"
 *          }
 *        ]
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
 * @api {get} /category/:cate_id 특정 카테고리 조회
 * @apiName GetSpecificCategory
 * @apiGroup Category
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} cate_id 카테고리 고유값
 *
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "tag_id": 1,
 *       "tag_name": "IT",
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
 * @api {delete} /category/:cate_id 카테고리 삭제
 * @apiName DeleteCategory
 * @apiGroup Category
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} cate_id 카테고리 고유값
 *
 * @apiSuccessExample Success-Response:
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


/**
 * @api {post} /category 카테고리 생성
 * @apiName CreateCategory
 * @apiGroup Category
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {number} cate_id 카테고리 고유값
 * @apiParam {String} cate_name 카테고리 이름
 *
 * @apiSuccess {number} cate_id 카테고리 고유값
 * @apiSuccess {String} cate_name 카테고리 이름
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
 * @apiParam {Number} cate_id 카테고리 고유값
 * @apiParam {String} cate_name 카테고리 이름
 *
 * @apiSuccess {number} cate_id 카테고리 고유값
 * @apiSuccess {String} cate_name 카테고리 이름
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
