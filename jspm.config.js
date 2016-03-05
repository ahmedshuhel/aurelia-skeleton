SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "plugin-babel",
  babelOptions: {
    "presets": [
      "babel-preset-stage-0"
    ]
  },

  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2",
    "babel-preset-stage-0": "npm:babel-preset-stage-0@6.5.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fetch": "github:github/fetch@0.11.0",
    "font-awesome": "npm:font-awesome@4.5.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "skeleton-plugin": "github:aurelia/skeleton-plugin@0.3.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.7",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
  },

  packages: {
    "main": {
      "main": "main.js"
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.5.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "github:components/jquery@2.2.1"
      }
    },
    "npm:ansi-styles@2.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.0.0"
      }
    },
    "npm:aurelia-binding@1.0.0-beta.1.2.2": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
        "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.4",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.4",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.3",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.4",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.0.1",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.2",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.3",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.2"
      }
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2"
      }
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
      }
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.6": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.0.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-router@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.3"
      }
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.2": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
      }
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
      }
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.2": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.3",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.4"
      }
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.2.2",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.5",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.2",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.6",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1"
      }
    },
    "npm:babel-code-frame@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "chalk": "npm:chalk@1.1.1",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.2",
        "line-numbers": "npm:line-numbers@0.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-helper-bindify-decorators@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.6.5": {
      "map": {
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-define-map@6.6.5": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.6.5",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-explode-class@6.6.5": {
      "map": {
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-function-name@6.6.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.6.5",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-get-function-arity@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.6.5": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.6.5",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-messages@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-class-constructor-call@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-class-properties@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-decorators@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-do-expressions@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-export-extensions@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-function-bind@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.5.0": {
      "map": {
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.6.5",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-class-constructor-call@6.6.5": {
      "map": {
        "babel-plugin-syntax-class-constructor-call": "npm:babel-plugin-syntax-class-constructor-call@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.6.5"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.6.0": {
      "map": {
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-decorators@6.6.5": {
      "map": {
        "babel-helper-define-map": "npm:babel-helper-define-map@6.6.5",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.6.5",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-template": "npm:babel-template@6.6.5",
        "babel-types": "npm:babel-types@6.6.5"
      }
    },
    "npm:babel-plugin-transform-do-expressions@6.5.0": {
      "map": {
        "babel-plugin-syntax-do-expressions": "npm:babel-plugin-syntax-do-expressions@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.5.0": {
      "map": {
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.6.5",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-export-extensions@6.5.0": {
      "map": {
        "babel-plugin-syntax-export-extensions": "npm:babel-plugin-syntax-export-extensions@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-function-bind@6.5.2": {
      "map": {
        "babel-plugin-syntax-function-bind": "npm:babel-plugin-syntax-function-bind@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.6.5": {
      "map": {
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:babel-preset-stage-0@6.5.0": {
      "map": {
        "babel-plugin-transform-do-expressions": "npm:babel-plugin-transform-do-expressions@6.5.0",
        "babel-plugin-transform-function-bind": "npm:babel-plugin-transform-function-bind@6.5.2",
        "babel-preset-stage-1": "npm:babel-preset-stage-1@6.5.0"
      }
    },
    "npm:babel-preset-stage-1@6.5.0": {
      "map": {
        "babel-plugin-transform-class-constructor-call": "npm:babel-plugin-transform-class-constructor-call@6.6.5",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.6.0",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.6.5",
        "babel-plugin-transform-export-extensions": "npm:babel-plugin-transform-export-extensions@6.5.0",
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0"
      }
    },
    "npm:babel-preset-stage-2@6.5.0": {
      "map": {
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.5.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.6.5",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0"
      }
    },
    "npm:babel-preset-stage-3@6.5.0": {
      "map": {
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.5.0",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.5.0"
      }
    },
    "npm:babel-template@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "babel-types": "npm:babel-types@6.6.5",
        "babylon": "npm:babylon@6.6.5",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.6.5": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.6.5",
        "babel-messages": "npm:babel-messages@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-types": "npm:babel-types@6.6.5",
        "babylon": "npm:babylon@6.6.5",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.0",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "babel-traverse": "npm:babel-traverse@6.6.5",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.1"
      }
    },
    "npm:babylon@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.35"
      }
    },
    "npm:buffer@4.5.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.1",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:font-awesome@4.5.0": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:invariant@2.2.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:line-numbers@0.2.0": {
      "map": {
        "left-pad": "npm:left-pad@0.0.3"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.2"
      }
    },
    "npm:readable-stream@2.0.5": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    }
  }
});
