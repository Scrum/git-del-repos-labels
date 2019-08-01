# git-del-repos-labels
> A tiny helper to get a list of labels from the github repository

[![Travis Build Status](https://img.shields.io/travis/Scrum/git-del-repos-labels/master.svg?style=flat-square&label=unix)](https://travis-ci.org/Scrum/git-del-repos-labels)[![Coveralls status](https://img.shields.io/coveralls/Scrum/git-del-repos-labels.svg?style=flat-square)](https://coveralls.io/r/Scrum/git-del-repos-labels)

## Install
```bash
npm install git-del-repos-labels
```

## Usage
```js
import gitDelReposLabels from 'git-del-repos-labels';

gitDelReposLabels({owner: 'scrum', repo: 'slims', token: '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97f'});
```
> will be delete all labels in repository

## API
#### `owner`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Github owner or organization name.*

#### `repo`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *Repository name.*

#### `token`

Type: `String` **`Required`**  
Default: `undefined`  
Description: *You  Github Personal Token. Grab it from your [Developer settings](https://github.com/settings/developers)*