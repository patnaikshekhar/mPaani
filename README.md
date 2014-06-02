mPaani App
=====================

This is a sample Mobile Application for mPaani and uses the Ionic Framework (Corova + Angular).

## Using this project

1. Clone this repository

```bash
$ git clone https://github.com/patnaikshekhar/mPaani.git
```

2. Install Node and Ionic

```bash
$ brew install node
$ sudo npm install -g cordova ionic gulp
```

3. Emulate or Install App on Device

```bash
$ ionic emulate android
or
$ ionic run android
```

Alternatively you could also use ripple to view it on the browser.

```bash
$ ionic serve
```

## Updating Ionic

To update to a new version of Ionic, open bower.json and change the version listed there.

For example, to update from version `1.0.0-beta.4` to `1.0.0-beta.5`, open bower.json and change this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.4"
```

To this:

```
"ionic": "driftyco/ionic-bower#1.0.0-beta.5"
```

After saving the update to bower.json file, run `gulp install`.

Alternatively, install bower globally with `npm install -g bower` and run `bower install`.

