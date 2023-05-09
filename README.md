oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g heroculer
$ heroculer COMMAND
running command...
$ heroculer (--version)
heroculer/0.0.0 darwin-x64 node-v16.14.0
$ heroculer --help [COMMAND]
USAGE
  $ heroculer COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`heroculer hello PERSON`](#heroculer-hello-person)
* [`heroculer hello world`](#heroculer-hello-world)
* [`heroculer help [COMMANDS]`](#heroculer-help-commands)
* [`heroculer plugins`](#heroculer-plugins)
* [`heroculer plugins:install PLUGIN...`](#heroculer-pluginsinstall-plugin)
* [`heroculer plugins:inspect PLUGIN...`](#heroculer-pluginsinspect-plugin)
* [`heroculer plugins:install PLUGIN...`](#heroculer-pluginsinstall-plugin-1)
* [`heroculer plugins:link PLUGIN`](#heroculer-pluginslink-plugin)
* [`heroculer plugins:uninstall PLUGIN...`](#heroculer-pluginsuninstall-plugin)
* [`heroculer plugins:uninstall PLUGIN...`](#heroculer-pluginsuninstall-plugin-1)
* [`heroculer plugins:uninstall PLUGIN...`](#heroculer-pluginsuninstall-plugin-2)
* [`heroculer plugins update`](#heroculer-plugins-update)

## `heroculer hello PERSON`

Say hello

```
USAGE
  $ heroculer hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/teamcodeyard/heroculer/blob/v0.0.0/dist/commands/hello/index.ts)_

## `heroculer hello world`

Say hello world

```
USAGE
  $ heroculer hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ heroculer hello world
  hello world! (./src/commands/hello/world.ts)
```

## `heroculer help [COMMANDS]`

Display help for heroculer.

```
USAGE
  $ heroculer help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for heroculer.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `heroculer plugins`

List installed plugins.

```
USAGE
  $ heroculer plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ heroculer plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.6/src/commands/plugins/index.ts)_

## `heroculer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heroculer plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ heroculer plugins add

EXAMPLES
  $ heroculer plugins:install myplugin 

  $ heroculer plugins:install https://github.com/someuser/someplugin

  $ heroculer plugins:install someuser/someplugin
```

## `heroculer plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ heroculer plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ heroculer plugins:inspect myplugin
```

## `heroculer plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ heroculer plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ heroculer plugins add

EXAMPLES
  $ heroculer plugins:install myplugin 

  $ heroculer plugins:install https://github.com/someuser/someplugin

  $ heroculer plugins:install someuser/someplugin
```

## `heroculer plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ heroculer plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ heroculer plugins:link myplugin
```

## `heroculer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroculer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroculer plugins unlink
  $ heroculer plugins remove
```

## `heroculer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroculer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroculer plugins unlink
  $ heroculer plugins remove
```

## `heroculer plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ heroculer plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ heroculer plugins unlink
  $ heroculer plugins remove
```

## `heroculer plugins update`

Update installed plugins.

```
USAGE
  $ heroculer plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
