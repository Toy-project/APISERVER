/**
 * @api {get} /club/ 모든 단체 조회
 * @apiName GetAllClub
 * @apiGroup Club
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiSuccess {Number} club_id 단체 아이디
 * @apiSuccess {Number} mem_id 회원 아이디
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_college 단체 대학교
 * @apiSuccess {Number} cate_id 카테고리 아이디
 * @apiSuccess {Number} tag_id 태그 아이디
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_career 단체 경력
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     [{
 *       "club_id": 1,
 *       "mem_id": 1,
 *       "club_photo": "사진.jpg",
 *       "club_name": "유쾌한 단체",
 *       "club_ex": "이러한 단체입니다.",
 *       "club_copyright": "유쾌한 아이들",
 *       "club_phone": "000-0000-0000",
 *       "club_email": "test@gamil.com",
 *       "club_college": "유쾌한 대학교",
 *       "cate_id": 1,
 *       "tag_id": 1,
 *       "club_history": "연혁",
 *       "club_career": "경력",
 *       "club_price_duration": "작업기간",
 *       "club_views": 1,
 *       "union_enabled": 1,
 *       "club_rating": 0.5,
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
 * @api {get} /club/:club_id?cate_id=value&tag_id=value 특정 단체 조회
 * @apiName GetSpecificClub
 * @apiGroup Club
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} club_id 단체 아이디
 * @apiParam {Number} cate_id 카테고리 아이디
 * @apiParam {Number} tag_id 태그 아이디
 *
 * @apiSuccess {Number} club_id 단체 아이디
 * @apiSuccess {Number} mem_id 회원 아이디
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_college 단체 대학교
 * @apiSuccess {Number} cate_id 카테고리 아이디
 * @apiSuccess {Number} tag_id 태그 아이디
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_career 단체 경력
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *       "club_id": 1,
 *       "mem_id": 1,
 *       "club_photo": "사진.jpg",
 *       "club_name": "유쾌한 단체",
 *       "club_ex": "이러한 단체입니다.",
 *       "club_copyright": "유쾌한 아이들",
 *       "club_phone": "000-0000-0000",
 *       "club_email": "test@gamil.com",
 *       "club_college": "유쾌한 대학교",
 *       "cate_id": 1,
 *       "tag_id": 1,
 *       "club_history": "연혁",
 *       "club_career": "경력",
 *       "club_price_duration": "작업기간",
 *       "club_views": 1,
 *       "union_enabled": 1,
 *       "club_rating": 0.5,
 *       "category": {
 *          "cate_id": 1,
 *          "cate_name": "IT",
 *       },
 *       "tag": {
 *          "tag_id": 1,
 *          "tag_name": "성실",
 *       },
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
 * @api {delete} /club/:club_id 단체 삭제
 * @apiName DeleteClub
 * @apiGroup Club
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} club_id 단체 아이디
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
 * @api {post} /club/ 단체 생성
 * @apiName CreateClub
 * @apiGroup Club
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} mem_id 회원 아이디
 * @apiParam {String} club_photo 단체 사진
 * @apiParam {String} club_name 단체 이름
 * @apiParam {String} club_ex 단체 설명
 * @apiParam {String} club_copyright 단체 카피라이트
 * @apiParam {String} club_phone 단체 전화번호
 * @apiParam {String} club_email 단체 이메일
 * @apiParam {String} club_college 단체 대학교
 * @apiParam {Number} cate_id 카테고리 아이디
 * @apiParam {Number} tag_id 태그 아이디
 * @apiParam {String} club_history 단체 연혁
 * @apiParam {String} club_career 단체 경력
 * @apiParam {String} club_price_duration 단체 금액 작업기간
 * @apiParam {Number} union_enabled 연합 여부 (1이면 연합)
 *  
 * @apiSuccess {Number} club_id 단체 아이디
 * @apiSuccess {Number} mem_id 회원 아이디
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_college 단체 대학교
 * @apiSuccess {Number} cate_id 카테고리 아이디
 * @apiSuccess {Number} tag_id 태그 아이디
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_career 단체 경력
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "club_id": 1,
 *       "mem_id": 1,
 *       "club_photo": "사진.jpg",
 *       "club_name": "유쾌한 단체",
 *       "club_ex": "이러한 단체입니다.",
 *       "club_copyright": "유쾌한 아이들",
 *       "club_phone": "000-0000-0000",
 *       "club_email": "test@gamil.com",
 *       "club_college": "유쾌한 대학교",
 *       "cate_id": 1,
 *       "tag_id": 1,
 *       "club_history": "연혁",
 *       "club_career": "경력",
 *       "club_price_duration": "작업기간",
 *       "union_enabled": 1,
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
 * @api {put} /club/:club_id 단체 수정
 * @apiName UpdateClub
 * @apiGroup Club
 * 
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 * 
 * @apiParam {Number} club_id 단체 아이디
 * @apiParam {Number} mem_id 회원 아이디
 * @apiParam {String} club_photo 단체 사진
 * @apiParam {String} club_name 단체 이름
 * @apiParam {String} club_ex 단체 설명
 * @apiParam {String} club_copyright 단체 카피라이트
 * @apiParam {String} club_phone 단체 전화번호
 * @apiParam {String} club_email 단체 이메일
 * @apiParam {String} club_college 단체 대학교
 * @apiParam {Number} cate_id 카테고리 아이디
 * @apiParam {Number} tag_id 태그 아이디
 * @apiParam {String} club_history 단체 연혁
 * @apiParam {String} club_career 단체 경력
 * @apiParam {String} club_price_duration 단체 금액 작업기간
 * @apiParam {Number} union_enabled 연합 여부 (1이면 연합)
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