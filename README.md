# Artifact Bookend
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> sd.cd bookend for uploading artifacts

## Usage

```bash
npm install screwdriver-artifact-bookend
```

## Functionality

Store all the artifacts saved in the Artifacts Directory to the build folder in the Store, to make sure they're not all erased when the build is complete. This bookend currently acts only as a teardown plugin. All artifacts files/folders are written to Store on teardown.

This is a default plugin that is set in the default.yaml (https://github.com/screwdriver-cd/screwdriver/blob/master/config/default.yaml) under the bookends section.

For example, if `$SD_ARTIFACTS_DIR` is set as `/sd/workspace/artifacts` and the user creates within that directory:

```
/sd/workspace/artifacts
--first_dir
----first_file.txt
----second_file.txt
--second_dir
----third_file.txt
----fourth_file.txt
--fifth_file.txt
```

Then in Store:

```
https://{store-uri}/logs.screwdriver.cd/builds/<BUILD_ID>-ARTIFACTS
--first_dir
----first_file.txt
----second_file.txt
--second_dir
----third_file.txt
----fourth_file.txt
--fifth_file.txt
```

## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-artifact-bookend.svg
[npm-url]: https://npmjs.org/package/screwdriver-artifact-bookend
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-artifact-bookend.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-artifact-bookend.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/artifact-bookend.svg
[issues-url]: https://github.com/screwdriver-cd/artifact-bookend/issues
[status-image]: https://cd.screwdriver.cd/pipelines/73/badge
[status-url]: https://cd.screwdriver.cd/pipelines/73
[daviddm-image]: https://david-dm.org/screwdriver-cd/artifact-bookend.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/artifact-bookend
