# `@plandek-utils/ts-string-utils`

[![npm version](https://badge.fury.io/js/%40plandek-utils%2Fts-string-utils.svg)](https://badge.fury.io/js/%40plandek-utils%2Fts-string-utils)
[![Maintainability](https://api.codeclimate.com/v1/badges/7325ebd41bc9cb07d3e4/maintainability)](https://codeclimate.com/github/plandek-utils/ts-string-utils/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7325ebd41bc9cb07d3e4/test_coverage)](https://codeclimate.com/github/plandek-utils/ts-string-utils/test_coverage)

[TypeDoc generated docs in here](https://plandek-utils.github.io/ts-string-utils)

[Github repo here](https://github.com/plandek-utils/ts-string-utils)

utils for strings

- initials

## initials
> `initials([string=''])`

Returns the first character of each space seperated word in the given string.

#### Arguments
`[string=''] (string): The string to convert to initials.`

#### Returns
(`string`): Returns the converted string

#### Example
`initials('foo bar doe');`

`// => 'f b d'`


## Development, Commits, versioning and publishing

<details><summary>See documentation for development</summary>
<p>

See [The Typescript-Starter docs](https://github.com/bitjson/typescript-starter#bump-version-update-changelog-commit--tag-release).

### Commits and CHANGELOG

For commits, you should use [`commitizen`](https://github.com/commitizen/cz-cli)

```sh
npm install -g commitizen

# commit your changes:
git cz
```

As typescript-starter docs state:

This project is tooled for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) to make managing releases easier. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow, or [`CHANGELOG.md`](CHANGELOG.md) for an example.

```sh
# bump package.json version, update CHANGELOG.md, git tag the release
npm run version
```

You may find a tool like [**`wip`**](https://github.com/bitjson/wip) helpful for managing work in progress before you're ready to create a meaningful commit.

### Creating the first version

Once you are ready to create the first version, run the following (note that `reset` is destructive and will remove all files not in the git repo from the directory).

```sh
# Reset the repo to the latest commit and build everything
npm run reset && npm run test

# Then version it with standard-version options. e.g.:
# don't bump package.json version
npm run version -- --first-release

# Other popular options include:

# PGP sign it:
# $ npm run version -- --sign

# alpha release:
# $ npm run version -- --prerelease alpha
```

And finally push the new tags to Github and publish the package to `npm`.

```sh
# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
npm publish --access public
```

### Generate a version

There is a single command for preparing a new release:

```sh
# Prepare a standard release
npm run prepare-release

# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
npm publish --access public
```

</p>
</details>
