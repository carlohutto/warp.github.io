// Simple preview template for posts
const PostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']) || 'No title';
  const date = entry.getIn(['data', 'date']) || '';
  return `
    <article style="font-family: 'Open Sans', sans-serif; max-width:800px; margin:0 auto; padding:20px;">
      <h1 style="font-family: 'Montserrat', sans-serif; color:#1a5276">${title}</h1>
      <p><small>${date}</small></p>
      <div>${widgetFor('body')}</div>
    </article>
  `;
};

CMS.registerPreviewTemplate('posts', PostPreview);
