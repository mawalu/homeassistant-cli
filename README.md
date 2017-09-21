# homeassistant-cli

A simple cli tool for [home assistant](https://home-assistant.io/) that uses [node-homeassistant](https://github.com/Mawalu/node-homeassistant)

## Installation

```shell
$ npm install -g homeassistant-cli
```

If there is an permission error you have to reconfigure npm or use sudo.

## Usage

Call a service

```shell
$ hac call light turn_on
```

Add additional service data

```shell
$ hac call light turn_on --service-data '{"entity_id": "light.komode"}'
```

Query the state

```shell
$ hac state sun.sun
```

Subscribe to state changes

```shell
$ hac state -s sun.sun
```

## Additional parameters

Custom hostname, port and password

```shell
$ hac --ip 10.1.0.166 --port 80 state sun.sun
```

To find shorthands and some extra parameters use

```shell
$ hac --help
```

