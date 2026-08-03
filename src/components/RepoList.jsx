import React from 'react';

const RepoList = ({ data }) => {
  return (
    <div className="skills-grid">
      {data.map((repo) => (
        <div key={repo.id} className="skill-card">
          <h3 className="skill-name">{repo.name}</h3>
          <p className="repo-description">
            {repo.description || 'No description provided.'}
          </p>
          <div className="repo-meta">
            {repo.language && (
              <span className="repo-language">{repo.language}</span>
            )}
            <span className="repo-stars">Stars: {repo.stargazers_count}</span>
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            View Repository
          </a>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
