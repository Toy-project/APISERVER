/**
 * @api {get} /club 전체 단체 조회
 * @apiName GetAllClub
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} start offset
 * @apiParam {Number} end limit
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "count": 1,
 *        "rows": [
 *          {
 *            "club_id": 1,
 *            "club_userid": "test",
 *            "club_email": "test@gmail.com",
 *            "club_name": "단체이름",
 *            "club_username": "tester",
 *            "club_people": 1,
 *            "club_profile_photo": "thumb.jpg",
 *            "club_phone": "000-0000-0000",
 *            "club_photo": "visual.jpg",
 *            "club_ex": "단체 설명입니다.",
 *            "club_copyright": "단체 문구",
 *            "club_college": "단체 대학",
 *            "cate_id": 1,
 *            "tag_id": 1,
 *            "club_history": "단체 연혁",
 *            "club_price_duration": "단체 기간 금액",
 *            "club_views": 0,
 *            "union_enabled": 1,
 *            "club_rating": 0,
 *            "club_create_date": "0000-00-00T00:00:00.000Z",
 *            "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *            "club_update": "0000-00-00T00:00:00.000Z",
 *            "category": {
 *              "cate_id": 1,
 *              "cate_name": "IT"
 *            },
 *            "tag": {
 *              "tag_id": 1,
 *              "tag_name": "성실한"
 *            },
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
 * @api {get} /club/:club_id 특정 단체 조회
 * @apiName GetSpecificClub
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} club_id 단체 고유값
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccess {Number} sns_id SNS 고유값
 * @apiSuccess {String} sns_name SNS 이름
 * @apiSuccess {String} sns_url SNS url
 * @apiSuccess {Number} career_id 경력 고유값
 * @apiSuccess {String} career_name 경력 이름
 * @apiSuccess {String} career_ex 경력 설명
 * @apiSuccess {String} career_photo 경력 사진
 * @apiSuccess {Date} career_due_start 경력 기간 시작일
 * @apiSuccess {Date} career_due_end 경력 기간 마지막일
 * @apiSuccess {Number} career_peple 경력 인원
 * @apiSuccess {String} career_co 경력 기업
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "club_id": 1,
 *        "club_userid": "test",
 *        "club_email": "test@gmail.com",
 *        "club_name": "단체이름",
 *        "club_username": "tester",
 *        "club_people": 1,
 *        "club_profile_photo": "thumb.jpg",
 *        "club_phone": "000-0000-0000",
 *        "club_photo": "visual.jpg",
 *        "club_ex": "단체 설명입니다.",
 *        "club_copyright": "단체 문구",
 *        "club_college": "단체 대학",
 *        "cate_id": 1,
 *        "tag_id": 1,
 *        "club_history": "단체 연혁",
 *        "club_price_duration": "단체 기간 금액",
 *        "club_views": 0,
 *        "union_enabled": 1,
 *        "club_rating": 0,
 *        "club_create_date": "0000-00-00T00:00:00.000Z",
 *        "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *        "club_update": "0000-00-00T00:00:00.000Z",
 *        "category": {
 *          "cate_id": 1,
 *          "cate_name": "IT"
 *        },
 *        "tag": {
 *          "tag_id": 1,
 *          "tag_name": "성실한"
 *        },
 *        "sns": [
 *          {
 *            "sns_id": 1,
 *            "sns_name": " 페이스북",
 *            "sns_url": "http://www.facebook.com",
 *            "club_id": 1
 *          }
 *        ],
 *        "career": [
 *          {
 *            "career_id": 1,
 *            "career_name": "이름",
 *            "career_ex": "설명",
 *            "career_photo": null,
 *            "career_due_start": "0000-00-00T00:00:00.000Z",
 *            "career_due_end": "0000-00-00T00:00:00.000Z",
 *            "career_people": 1,
 *            "career_co": "기업",
 *            "club_id": 1
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
 * @api {get} /club/userid/:userid 단체 아이디 조회
 * @apiName GetClubUserId
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} userid 단체 아이디
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     true
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     false
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
 * @api {get} /club/email/:email 단체 이메일 조회
 * @apiName GetClubEmail
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} email 단체 이메일
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     true
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     false
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
 * @api {get} /club/name/:name 단체 이름 조회
 * @apiName GetClubName
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} name 단체 이름
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     true
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     false
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
 * @api {get} /club/search/:keyword 단체 검색
 * @apiName GetSearchClub
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} keyword keyword
 * @apiParam {Number} start offset
 * @apiParam {Number} end limit
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccess {Number} sns_id SNS 고유값
 * @apiSuccess {String} sns_name SNS 이름
 * @apiSuccess {String} sns_url SNS url
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "count": 1,
 *        "rows": [
 *          {
 *            "club_id": 1,
 *            "club_userid": "test",
 *            "club_email": "test@gmail.com",
 *            "club_name": "단체이름",
 *            "club_username": "tester",
 *            "club_people": 1,
 *            "club_profile_photo": "thumb.jpg",
 *            "club_phone": "000-0000-0000",
 *            "club_photo": "visual.jpg",
 *            "club_ex": "단체 설명입니다.",
 *            "club_copyright": "단체 문구",
 *            "club_college": "단체 대학",
 *            "cate_id": 1,
 *            "tag_id": 1,
 *            "club_history": "단체 연혁",
 *            "club_price_duration": "단체 기간 금액",
 *            "club_views": 0,
 *            "union_enabled": 1,
 *            "club_rating": 0,
 *            "club_create_date": "0000-00-00T00:00:00.000Z",
 *            "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *            "club_update": "0000-00-00T00:00:00.000Z",
 *            "category": {
 *              "cate_id": 1,
 *              "cate_name": "IT"
 *            },
 *            "tag": {
 *              "tag_id": 1,
 *              "tag_name": "성실한"
 *            },
 *            "sns": [
 *              {
 *                "sns_id": 1,
 *                "sns_name": " 페이스북",
 *                "sns_url": "http://www.facebook.com",
 *                "club_id": 1
 *              }
 *            ]
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
 * @api {get} /club/category/:cate_id 카테고리별 단체 검색
 * @apiName GetClubByCategory
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} cate_id 카테고리 고유값
 * @apiParam {Number} start offset
 * @apiParam {Number} end limit
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccess {String} cate_name 카테고리 이름
 * @apiSuccess {String} tag_name 태그 이름
 * @apiSuccess {Number} sns_id SNS 고유값
 * @apiSuccess {String} sns_name SNS 이름
 * @apiSuccess {String} sns_url SNS url
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     {
 *        "count": 1,
 *        "rows": [
 *          {
 *            "club_id": 1,
 *            "club_userid": "test",
 *            "club_email": "test@gmail.com",
 *            "club_name": "단체이름",
 *            "club_username": "tester",
 *            "club_people": 1,
 *            "club_profile_photo": "thumb.jpg",
 *            "club_phone": "000-0000-0000",
 *            "club_photo": "visual.jpg",
 *            "club_ex": "단체 설명입니다.",
 *            "club_copyright": "단체 문구",
 *            "club_college": "단체 대학",
 *            "cate_id": 1,
 *            "tag_id": 1,
 *            "club_history": "단체 연혁",
 *            "club_price_duration": "단체 기간 금액",
 *            "club_views": 0,
 *            "union_enabled": 1,
 *            "club_rating": 0,
 *            "club_create_date": "0000-00-00T00:00:00.000Z",
 *            "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *            "club_update": "0000-00-00T00:00:00.000Z",
 *            "category": {
 *              "cate_id": 1,
 *              "cate_name": "IT"
 *            },
 *            "tag": {
 *              "tag_id": 1,
 *              "tag_name": "성실한"
 *            },
 *            "sns": [
 *              {
 *                "sns_id": 1,
 *                "sns_name": " 페이스북",
 *                "sns_url": "http://www.facebook.com",
 *                "club_id": 1
 *              }
 *            ]
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
 * @api {post} /club 단체 생성
 * @apiName CreateClub
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} club_userid 단체 아이디
 * @apiParam {String} club_email 단체 이메일
 * @apiParam {String} club_pw 단체 비밀번호
 * @apiParam {String} club_name 단체 이름
 * @apiParam {String} club_username 단체 회장명
 * @apiParam {String} club_phone 단체 전화번호
 * @apiParam {String} club_copyright 단체 카피라이트
 * @apiParam {String} club_college 단체 소속대학
 * @apiParam {Number} cate_id 카테고리 아이디
 * @apiParam {Number} union_enabled 연합 여부 (1이면 연합)
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_pw 단체 비밀번호
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "club_profile_photo": null,
 *        "club_photo": null,
 *        "tag_id": 1,
 *        "club_views": 0,
 *        "club_rating": 0,
 *        "club_id": 1,
 *        "club_userid": "test",
 *        "club_email": "test@gmail.com",
 *        "club_pw": "$2a$10$/AN5ld95h5TpsMZdQK0/s....",
 *        "club_username": "홍길동",
 *        "club_people": 1,
 *        "club_name": "단체 이름",
 *        "club_phone": "000-0000-0000",
 *        "club_copyright": "단체 문구",
 *        "club_college": "단체 대학",
 *        "cate_id": 1,
 *        "union_enabled": 1,
 *        "club_create_date": "0000-00-00T00:00:00.000Z",
 *        "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *        "club_update": "0000-00-00T00:00:00.000Z"
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
 * @apiParam {Number} club_id 단체 고유값
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
 * @api {put} /club/:club_id 단체 수정
 * @apiName UpdateClub
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {String} club_id 단체 고유값
 * @apiParam {String} club_email 단체 이메일
 * @apiParam {String} club_pw 단체 비밀번호
 * @apiParam {String} club_name 단체 이름
 * @apiParam {String} club_username 단체 회장명
 * @apiParam {Number} club_people 단체 인원
 * @apiParam {String} club_phone 단체 전화번호
 * @apiParam {FormData} club_profile_photo 단체 프로필 사진
 * @apiParam {String} club_ex 단체 설명
 * @apiParam {String} club_copyright 단체 카피라이트
 * @apiParam {String} club_college 단체 소속대학
 * @apiParam {Number} cate_id 카테고리 아이디
 * @apiParam {Number} tag_id 태그 아이디
 * @apiParam {String} club_history 단체 연혁
 * @apiParam {String} club_price_duration 단체 금액 작업기간
 * @apiParam {Number} union_enabled 연합 여부 (1이면 연합)
 *
 * @apiSuccess {Number} club_id 단체 고유값
 * @apiSuccess {String} club_userid 단체 아이디
 * @apiSuccess {String} club_email 단체 이메일
 * @apiSuccess {String} club_pw 단체 비밀번호
 * @apiSuccess {String} club_name 단체 이름
 * @apiSuccess {String} club_username 단체 회장명
 * @apiSuccess {Number} club_people 단체 인원
 * @apiSuccess {String} club_profile_photo 단체 프로필 사진
 * @apiSuccess {String} club_phone 단체 전화번호
 * @apiSuccess {String} club_photo 단체 사진
 * @apiSuccess {String} club_ex 단체 설명
 * @apiSuccess {String} club_copyright 단체 카피라이트
 * @apiSuccess {String} club_college 단체 소속대학
 * @apiSuccess {Number} cate_id 카테고리 고유값
 * @apiSuccess {Number} tag_id 태그 고유값
 * @apiSuccess {String} club_history 단체 연혁
 * @apiSuccess {String} club_price_duration 단체 금액 작업기간
 * @apiSuccess {Number} club_views 단체 조회수
 * @apiSuccess {Number} union_enabled 연합 여부 (1이면 연합)
 * @apiSuccess {Number} club_rating 단체 등급
 * @apiSuccess {Date} club_create_date 단체 생성 날짜
 * @apiSuccess {Date} club_last_connect_date 단체 마지막 접속 날짜
 * @apiSuccess {Date} club_update 단체 업데이트
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "club_profile_photo": null,
 *        "club_photo": null,
 *        "tag_id": 1,
 *        "club_views": 0,
 *        "club_rating": 0,
 *        "club_id": 1,
 *        "club_userid": "test",
 *        "club_email": "test@gmail.com",
 *        "club_pw": "$2a$10$/AN5ld95h5TpsMZdQK0/s....",
 *        "club_username": "홍길동",
 *        "club_people": 1,
 *        "club_name": "단체 이름",
 *        "club_phone": "000-0000-0000",
 *        "club_copyright": "단체 문구",
 *        "club_college": "단체 대학",
 *        "cate_id": 1,
 *        "union_enabled": 1,
 *        "club_create_date": "0000-00-00T00:00:00.000Z",
 *        "club_last_connect_date": "0000-00-00T00:00:00.000Z",
 *        "club_update": "0000-00-00T00:00:00.000Z"
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
 * @api {put} /club/views/:club_id 단체 조회수 수정
 * @apiName UpdateClubViews
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} club_id 단체 고유값
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "club_views": 1
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
 * @api {put} /club/photo/:club_id 단체 사진 수정
 * @apiName UpdateClubPhoto
 * @apiGroup Club
 *
 * @apiHeader {String} Authorization bearer token
 * @apiHeaderExample Request-Example:
 *     "Authorization": "bearer token"
 *
 * @apiParam {Number} club_id 단체 고유값
 * @apiParam {Number} num 단체 사진 순서
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "club_photo": "images/upload/club/1/visual1.png,images/upload/club/1/visual2.png,images/upload/club/1/visual3.png"
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
