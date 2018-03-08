const nodemailer = require('nodemailer');
const MailAuth = require('../../config/mailAuth.json');
const createAuth = require('../../helper/mailHelper.js');

exports.postEmailAuth = (req, res, next) => {
  const receiver = req.body.receiver;
  const subject = '외주대학교 - 이메일 인증번호';
  const auth = createAuth();
  console.log('1');
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MailAuth.user, // generated ethereal user
        pass: MailAuth.pass // generated ethereal password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: 'no-reply@toyproject.com', // sender address
      to: receiver, // list of receivers
      subject: subject, // Subject line
      html: `<div style="background:#f5f5f5"> <div style="background-color:#f5f5f5;padding-top:80px"> <div style="margin:0 auto;max-width:600px;background:#ffffff"> <table align="center" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#ffffff;border-top:3px solid #fead0d" border="0"> <tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:40px 30px 30px 30px"> <div style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%"> <table cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:30px"><br> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:30px"> <div style="color:#55575d;font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:22px;font-weight:700;line-height:22px"> 외주대학교 본인인증 </div> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:35px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:22px"> 저희는 본인인증을 확인하기 위해 이메일이 필요합니다. <br> 아래의 인증번호를 입력해주세요. </div> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:22px;margin-bottom:20px;border:solid 1px #ccc;border-radious:5px;min-width:30%;padding: 0 20px;"> <b> ${auth} </b></div></td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:22px"> 외주대학교에 오신 걸 환영합니다. </div> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:22px"> 외주대학교 </div> </td></tr></tbody> </table> </div> </td></tr></tbody> </table> </div> <div style="margin:0 auto;max-width:600px"> <table align="center" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%" border="0"> <tbody><tr><td style="text-align:center;vertical-align:top;font-size:0px;padding:30px"> <div style="vertical-align:top;display:inline-block;font-size:13px;text-align:left;width:100%"> <table cellpadding="0" cellspacing="0" width="100%" border="0"> <tbody><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:10px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:22px"> <span>이 메일은 외주대학교에 가입하기 위해 보내졌습니다.</span> <span>만약 오류가 발생하면 저희에게 알려주세요.</span> </div> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:15px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:22px"> &#169; 2018 외주대학교 </div> </td></tr><tr><td align="center" style="word-break:break-word;font-size:0px;padding:0px;padding-bottom:10px"> <div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:22px"> <a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/4/zonyPfLIyyphYjNdn65kxw/aHR0cHM6Ly93d3cubWFpbGpldC5jb20vcHJpdmFjeS1wb2xpY3k" style="color:inherit;padding:0 7px" target="_blank">Privacy Policy</a> <a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/5/D-IKa4U5k9ZOyliP-Gq8Sw/aHR0cHM6Ly93d3cubWFpbGpldC5jb20vc2VuZGluZy1wb2xpY3k" style="color:inherit;padding:0 7px" target="_blank">Sending Policy</a> <a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/6/rRZS9jS2wiBUWU3NwV8rTw/aHR0cHM6Ly93d3cubWFpbGpldC5jb20vdGVybXMtYW5kLWNvbmRpdGlvbnM" style="color:inherit;padding:0 7px" target="_blank">Terms of Use</a> </div> </td></tr><!-- &lt;tr&gt;&lt;td align="center" style="word-break:break-word;font-size:0px;padding:0px"&gt; &lt;div style="color:#8c8c8c;font-family:Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:22px"&gt; &lt;a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/7/-mJb6XeufUd-h_Mcd-KUgw/aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL21haWxqZXQ" style="text-decoration:none;color:inherit;padding:0 4px" target="_blank"&gt; &lt;img alt="" src="https://app.mailjet.com/images/email/transac/fb.png" style="border:none;outline:none;text-decoration:none;height:auto" width="-22" height="auto"&gt; &lt;/a&gt; &lt;a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/8/BbYhvxmwuSAKMV9D8pZX0g/aHR0cHM6Ly93d3cudHdpdHRlci5jb20vbWFpbGpldA" style="text-decoration:none;color:inherit;padding:0 4px" target="_blank"&gt; &lt;img alt="" src="https://app.mailjet.com/images/email/transac/tw.png" style="border:none;outline:none;text-decoration:none;height:auto" width="-22" height="auto"&gt; &lt;/a&gt; &lt;a href="http://gtpx.mjt.lu/lnk/APsAAAXtLEQAAAAAAAAAAGx5D9EAARpwxasAAAAAAAicvQBaoN_EZToMwjskRUiqnG6ECkWGQwAG4VU/9/wfUA-sgYis0uGtPhmoC6KQ/aHR0cDovL3d3dy5tYWlsamV0LmNvbS9ibG9n" style="text-decoration:none;color:inherit;padding:0 4px" target="_blank"&gt; &lt;img alt="" src="https://app.mailjet.com/images/email/transac/rss.png" style="border:none;outline:none;text-decoration:none;height:auto" width="-22" height="auto"&gt; &lt;/a&gt; &lt;/div&gt; &lt;/td&gt;&lt;/tr&gt; --></tbody> </table> </div> </td></tr></tbody> </table> </div> </div> </div>` // html body
  };

  // send mail with defined transport object:
  console.log('2');
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        next(error);
      } else {
        //키 값 전달
        console.log('success');
        res.status(201).json({
          auth: auth
        });
      }
  });
}

// exports.postEmailAuthCheck = (req, res, next) => {
//   const data = {
//     request_id : req.body.request_id,
//     auth : req.body.auth,
//   }
//
//   console.log(window.localStorage.getItem(data.request_id));
//   // if(localStorage.getItem(data.request_id)) {
//   //   if(localStorage.getItem(data.request_id) === data.auth) {
//   //     console.log('success');
//   //   }
//   // }
// }
