import ghGot = require('gh-got');
import gitGetReposLabels from 'git-get-repos-labels';

interface options {
  owner: string,
  repo: string,
  token: string
}

interface label {
  name: string
}

export default async ({owner, repo, token}: options): Promise<object> => {
  return await gitGetReposLabels({owner, repo, token}).then((labels: Array<object>) => {
    labels.forEach(({name}: label) => {
      ghGot.delete(`repos/${owner}/${repo}/labels/${name}`, {
        json: true,
        token,
        body: {name}
      });
    });
  });
}
