# git-del-repos-labels
> A tiny helper to del of label in the github repository 

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-del-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-del-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-del-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-del-repos-labels)

## Install
```bash
npm install git-del-repos-labels
```

## Usage
```js
import gitDelReposLabels from 'git-del-repos-labels';

gitDelReposLabels({label: {id: 'MDU6TGFiZWwzODg4NTI4Mzc='}, token: '0e8a604e0ee6e2c652b3a93c55dbc440ea6ad4e5'});
```
> will be delete label in repository

## API
#### `label`

Type: `object` **`Required`**  
Default: `undefined`  
Description: *label del options `{id: string}` when `{id}` are required*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*

## Recommend
 - [git-get-repos-labels](https://github.com/Scrum/git-get-repos-labels) -  A iny helper to get a list of labels from the github repository 

