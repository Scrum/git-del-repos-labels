import ghGot = require('gh-got');

interface options {
  label: label,
  owner: string,
  repo: string,
  token: string
}

interface label {
  name: string
}

export default async ({label: {name}, owner, repo, token}: options): Promise<object> => {
  return ghGot.delete(`repos/${owner}/${repo}/labels/${name}`, {
    json: true,
    token,
    body: {name}
  });
}
