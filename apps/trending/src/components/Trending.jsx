import React from 'react';

const Trending = () => {
  const articles = [
    { id: 1, title: "React 18 Released", summary: "Learn what's new in React 18." },
    { id: 2, title: "AI Revolution", summary: "How AI is transforming industries." },
  ];

  return (
    <section className="trending">
      <h2>Trending News</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Trending;
