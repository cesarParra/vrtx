Vertex (vrtx)
====

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/vrtx.svg)](https://npmjs.org/package/vrtx)
[![Downloads/week](https://img.shields.io/npm/dw/vrtx.svg)](https://npmjs.org/package/vrtx)
[![License](https://img.shields.io/npm/l/vrtx.svg)](https://github.com/cesarParra/vrtx/blob/master/package.json)

Vertex is a superset of the Apex language that compiles to Apex code. Vertex enhances the quality of life when writing Apex
by adding modern language constructs, but still supporting all Apex features.

<!-- toc -->
* [Installing](#installing)
* [Getting Started](#getting-started)
* [Building your first Vertex file](#building-your-first-vertex-file)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Installing

For the latest stable version:
```
npm install -g vrtx
```

# Getting Started

To set up your project to be able to compile Vertex code, you first need to place a 
`vrtxconfig.json` file at the root of your project. This configuration file contains information
the compiler will use to translate Vertex files into Apex files. Here is an example:

```json
{
  "compilerOptions": {
    "targetApiVersion": 48.0,
    "rootDir": "src",
    "targetDir": "lib"
  }
}
```

* The `targetApiVersion` defines which API Version the `cls-meta.xml` will be used for the generated Apex files
* The `rootDir` defines the directory for the source of the `.vrtx` files
* The `targetDir` defines the directory in which the Apex files will be placed

# Building your first Vertex file

To demonstrate some of the capabilities of Vertex lets walk through an example and introduce some of the features.

First, in your root directory, create a `Greeter.vrtx` file that looks as follows:

*Remember to keep your root directory out of a place where it will be pushed to the org OR add it to the `.forceignore` file as we can't push Vertex files to
the Salesforce org* 

```java
public class Greeter {
  public Greeter(String person) {
    System.debug('Hello ' + person + '!');
  }
}
```

## Compiling your code

You will notice that the source code looks exactly like Apex, since Vertex is a superset
of Apex, all Apex code is automatically supported.

To translate your Vertex code to Apex at your command line run:

```
vrtx build
``` 

After running the build command a new `Greeter.cls` and a `Greeter.cls-meta.xml`
are generated inside of the target directory specified in the configuration file.

The compiler also makes sure that the generated code is formatted appropriately, by running
Prettier on the source code.

### Optional Parameters

Now lets take advantage of the things that Vertex offers. Let's start by modifying
the `Greeter.vrtx` to use optional parameters:

```
public class Greeter {
    public Greeter(String person, [String greeting]) {
        if (greeting == null) {
            greeting = 'Hello';
        }
        System.debug(greeting + ' ' + person + '!');
    }
}
```

Notice the parameter between the `[` `]`, this syntax represents optional parameters, so you can choose
to either pass in or ignore:

```java
Greeter myGreeter = new Greeter('World!');
// OR
Greeter myGreeter = new Greeter('World!', 'Hello');
```

You can combine formal (non-optional) parameters and optional parameters, and you can have as many 
formal and optional parameters as you want.

### Null Coalesce

Notice the null check we need to do in order to make sure that our string is correctly formed. Luckily Vertex
vastly simplifies null checks by providing the null coalesce operator `??`. This operator returns the left-most non-null value.

```
public class Greeter {
    public Greeter(String person, [String greeting]) {
        greeting = greeting ?? 'Hello';
        System.debug(greeting + ' ' + person + '!');
    }
}
```

### Default parameter values

Even with the null coalesce our code is still doing a null check, which we can simplify even further. Vertex removes the need for that check by allowing you to set default
parameter values with your optional parameters:

```
public class Greeter {
    public Greeter(String person, [String greeting = 'Hello']) {
        System.debug(greeting + ' ' + person + '!');
    }
}
```

### String templates

Another improvement we can make to our code is to how we are building the message within the `System.debug` call.
Vertex allows you to use string templates to help you out when building complex strings:

```
public class Greeter {
    public Greeter(String person, [String greeting = 'Hello']) {
        System.debug(`${greeting} ${person}!`);
    }
}
```

## Example Code

The example code is fully available [here](https://github.com/cesarParra/greetings).


# Usage
<!-- usage -->
```sh-session
$ npm install -g vrtx
$ vrtx COMMAND
running command...
$ vrtx (-v|--version|version)
vrtx/0.6.0 win32-x64 node-v12.17.0
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
  -h, --help  show CLI help

EXAMPLE
  $ vrtx build
```

_See code: [src\commands\build.ts](https://github.com/cesarParra/vrtx/blob/v0.6.0/src\commands\build.ts)_

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
