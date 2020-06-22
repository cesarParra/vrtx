vrtx
====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/vrtx.svg)](https://npmjs.org/package/vrtx)
[![Downloads/week](https://img.shields.io/npm/dw/vrtx.svg)](https://npmjs.org/package/vrtx)
[![License](https://img.shields.io/npm/l/vrtx.svg)](https://github.com/cesarParra/vrtx/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vrtx
$ vrtx COMMAND
running command...
$ vrtx (-v|--version|version)
vrtx/0.3.0 win32-x64 node-v12.17.0
$ vrtx --help [COMMAND]
USAGE
  $ vrtx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vrtx build`](#vrtx-build)
* [`vrtx help [COMMAND]`](#vrtx-help-command)

## `vrtx build`

Transcompiles Vertex code into Apex.

```
USAGE
  $ vrtx build

OPTIONS
  -h, --help           show CLI help
  -s, --source=source  Source directory that contains the Vertex files

EXAMPLE
  $ vrtx build
```

_See code: [src\commands\build.ts](https://github.com/cesarParra/vrtx/blob/v0.3.0/src\commands\build.ts)_

## `vrtx help [COMMAND]`

display help for vrtx

```
USAGE
  $ vrtx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_
<!-- commandsstop -->
