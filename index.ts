import graphqlGot = require('graphql-got');

interface options {
  label: label,
  token: string
}

interface label {
  id: string
}

export default ({label: {id}, token}: options) => {
  return graphqlGot('https://api.github.com/graphql', {
    query: `mutation {
      deleteLabel(input: {id: "${id}"}) {
        clientMutationId
      }
    }`, 
    headers: {
      'accept': 'application/vnd.github.bane-preview+json'
    },
    token
  });
}

