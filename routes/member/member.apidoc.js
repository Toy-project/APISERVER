/**
 * @api {get} /member/ 모든 회원 조회
 * @apiName GetAllMember
 * @apiGroup Member
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiSuccess {Number} mem_id 회원 기본키
 * @apiSuccess {String} mem_email 회원 이메일
 * @apiSuccess {String} mem_name 회원 이름
 * @apiSuccess {String} mem_pw 회원 비밀번호
 * @apiSuccess {String} mem_phone 회원 전화번호
 * @apiSuccess {Number} mem_type 회원 유형 (0: 일반회원, 1: 단체)
 * @apiSuccess {Number} mem_mail_agree 회원 메일 수신 동의 (0: 동의X, 1: 동의)
 * @apiSuccess {Date} mem_last_connect_date 회원 마지막 접속 일자
 * @apiSuccess {Date} mem_update 회원 등록일
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     [{
 *       "mem_id": 1,
 *       "mem_email": "test@gmail.com",
 *       "mem_name": "test",
 *       "mem_pw": "2a$10$joHMvS9CO/MSTgIPQ3K.pO...",
 *       "mem_phone": "000-0000-0000",
 *       "mem_type": 1,
 *       "mem_mail_agree": 1,
 *       "mem_last_connect_date": "0000-00-00T00:00:00.000Z"
 *       "mem_update": "0000-00-00T00:00:00.000Z"
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
 * @api {get} /member/:mem_id 특정 회원 조회
 * @apiName GetSpecificMember
 * @apiGroup Member
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} mem_id 회원 키본키
 * 
 * @apiSuccess {Number} mem_id 회원 기본키
 * @apiSuccess {String} mem_email 회원 이메일
 * @apiSuccess {String} mem_name 회원 이름
 * @apiSuccess {String} mem_pw 회원 비밀번호
 * @apiSuccess {String} mem_phone 회원 전화번호
 * @apiSuccess {Number} mem_type 회원 유형 (0: 일반회원, 1: 단체)
 * @apiSuccess {Number} mem_mail_agree 회원 메일 수신 동의 (0: 동의X, 1: 동의)
 * @apiSuccess {Date} mem_last_connect_date 회원 마지막 접속 일자
 * @apiSuccess {Date} mem_update 회원 등록일
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "mem_id": 1,
 *       "mem_email": "test@gmail.com",
 *       "mem_name": "test",
 *       "mem_pw": "2a$10$joHMvS9CO/MSTgIPQ3K.pO...",
 *       "mem_phone": "000-0000-0000",
 *       "mem_type": 1,
 *       "mem_mail_agree": 1,
 *       "mem_last_connect_date": "0000-00-00T00:00:00.000Z"
 *       "mem_update": "0000-00-00T00:00:00.000Z"
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
 * @api {delete} /member/:mem_id 회원 삭제
 * @apiName DeleteMember
 * @apiGroup Member
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} mem_id 회원 키본키
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
 * @api {post} /member/ 회원 생성
 * @apiName CreateMember
 * @apiGroup Member
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {String} mem_email 회원 이메일
 * @apiParam {String} mem_name 회원 이름
 * @apiParam {String} mem_pw 회원 비밀번호
 * @apiParam {String} mem_phone 회원 전화번호
 * @apiParam {Number} mem_type 회원 유형 (0: 일반회원, 1: 단체)
 * @apiParam {Number} mem_mail_agree 회원 메일 수신 동의 (0: 동의X, 1: 동의)
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "mem_id": 1,
 *       "mem_email": "test@gmail.com",
 *       "mem_name": "test",
 *       "mem_pw": "2a$10$joHMvS9CO/MSTgIPQ3K.pO...",
 *       "mem_phone": "000-0000-0000",
 *       "mem_type": 1,
 *       "mem_mail_agree": 1,
 *       "mem_last_connect_date": "0000-00-00T00:00:00.000Z"
 *       "mem_update": "0000-00-00T00:00:00.000Z"
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
 * @api {put} /member/:mem_id 회원 수정
 * @apiName ModifyMember
 * @apiGroup Member
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} mem_id 회원 키본키
 * @apiParam {String} mem_email 회원 이메일
 * @apiParam {String} mem_name 회원 이름
 * @apiParam {String} mem_pw 회원 비밀번호
 * @apiParam {String} mem_phone 회원 전화번호
 * @apiParam {Number} mem_type 회원 유형 (0: 일반회원, 1: 단체)
 * @apiParam {Number} mem_mail_agree 회원 메일 수신 동의 (0: 동의X, 1: 동의)
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "mem_id": 1,
 *       "mem_email": "test@gmail.com",
 *       "mem_name": "test",
 *       "mem_pw": "2a$10$joHMvS9CO/MSTgIPQ3K.pO...",
 *       "mem_phone": "000-0000-0000",
 *       "mem_type": 1,
 *       "mem_mail_agree": 1,
 *       "mem_last_connect_date": "0000-00-00T00:00:00.000Z"
 *       "mem_update": "0000-00-00T00:00:00.000Z"
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