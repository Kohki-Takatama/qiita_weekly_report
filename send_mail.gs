function send_mail(email, subject, htmlBody) {
  // メール送信部分
  try {
    MailApp.sendEmail({
      to: email,
      subject: subject,
      htmlBody: htmlBody
      });

    console.log("Success:",`sent mail to ${email}`)

  } catch (error) {
    console.log("Error:", error)
  }
}
