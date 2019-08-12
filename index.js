"use strict";
exports.__esModule = true;
var graphqlGot = require("graphql-got");
exports["default"] = (function (_a) {
    var id = _a.label.id, token = _a.token;
    return graphqlGot('https://api.github.com/graphql', {
        query: "mutation {\n      deleteLabel(input: {id: \"" + id + "\"}) {\n        clientMutationId\n      }\n    }",
        headers: {
            'accept': 'application/vnd.github.bane-preview+json'
        },
        token: token
    });
});
