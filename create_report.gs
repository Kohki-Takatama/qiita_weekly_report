function create_report(username, articles) {
  const totalLikes = articles.reduce((sum, article) => sum + article.likes, 0);
  const totalStocks = articles.reduce((sum, article) => sum + article.stocks, 0);
  const totalComments = articles.reduce((sum, article) => sum + article.comments, 0);
  const totalViews = articles.reduce((sum, article) => sum + article.views, 0);

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  const endDate = new Date();

  const template = HtmlService.createTemplateFromFile('report_template');
  
  template.username = username;
  template.startDate = startDate.toLocaleDateString();
  template.endDate = endDate.toLocaleDateString();
  template.articles = articles;
  template.totalLikes = totalLikes;
  template.totalStocks = totalStocks;
  template.totalComments = totalComments;
  template.totalViews = totalViews;

  const reportHtml = template.evaluate().getContent();
  return reportHtml;
}
