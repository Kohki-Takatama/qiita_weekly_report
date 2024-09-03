function main() {
  const username = 'kohki_takatama';
  const qiita_api_token = PropertiesService.getScriptProperties().getProperty('qiita_api_token');

  const articles = get_weekly_qiita_posts(username, qiita_api_token)

  const target_email = 'koh.takatama@gmail.com';  // メール送信先
  const subject = '今週のQiita投稿レポート（非公式）';
  const body = create_report(username, articles);

  send_mail(target_email, subject, body)
}
