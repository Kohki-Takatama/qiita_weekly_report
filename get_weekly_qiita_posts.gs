function get_weekly_qiita_posts(username, qiita_api_token) {
  const api_url = `https://qiita.com/api/v2/users/${username}/items`;
  const week_ago = new Date();
  week_ago.setDate(week_ago.getDate() - 7);

  const options = {
    method: 'get',
    muteHttpExceptions: true,
    headers: {}
  };

  // If the qiita_api_token is provided, add the Authorization header
  if (qiita_api_token) {
    options.headers['Authorization'] = `Bearer ${qiita_api_token}`;
  }

  const response = UrlFetchApp.fetch(api_url, options);
  const articles = JSON.parse(response.getContentText());

  const weekly_articles = articles.filter(article => {
    const created_at = new Date(article.created_at);
    return created_at >= week_ago;
  });

  const formatted_articles = weekly_articles.map(article => {
    return {
      title: article.title,
      date: new Date(article.created_at).toLocaleDateString(),
      likes: article.likes_count,
      stocks: article.stocks_count,
      comments: article.comments_count || 0,
      views: article.page_views_count,
      url: article.url
    };
  });

  return formatted_articles;
}
