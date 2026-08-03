import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';
import RepoList from './RepoList';

const GITHUB_API_URL = 'https://api.github.com/users/Kscoder11/repos?sort=updated&per_page=10';

const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(GITHUB_API_URL);

        if (!response.ok) {
          throw new Error(
            `GitHub API responded with status ${response.status}: ${response.statusText}`
          );
        }

        const repos = await response.json();
        setData(repos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="skills">
      <h2 className="skills-title">
        GitHub <span className="gradient-text">Repositories</span>
      </h2>
      <p className="projects-subtitle">
        Live data fetched from the GitHub REST API for user <strong>@Kscoder11</strong>
      </p>

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && <RepoList data={data} />}
    </section>
  );
};

export default Projects;
