'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _freeze = require('babel-runtime/core-js/object/freeze');

var _freeze2 = _interopRequireDefault(_freeze);

var _libEnv = require('lib-env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @import {../typedefs.js}
 */

var configs = {
    prod: {
        amqp: {
            url: 'amqp://localhost:5672'
        },
        mongo: {
            base: 'mongodb://localhost:27017'
        },
        redis: {
            host: 'localhost',
            port: '6379'
        }
    },
    dev: {
        amqp: {
            url: 'amqp://localhost:5672'
        },
        mongo: {
            base: 'mongodb://localhost:27017'
        },
        redis: {
            host: 'localhost',
            port: '6379'
        }
    },
    test: {
        amqp: {
            url: 'amqp://localhost:5672'
        },
        mongo: {
            url: 'mongodb://localhost:27017'
        },
        redis: {
            host: 'localhost',
            port: '6379'
        }
    },
    global: {
        logLevel: 'debug'
    }

    /**
     * @type {MS_Config}
     */
};var MS_CONFIG = (0, _freeze2.default)((0, _assign2.default)({}, configs[(0, _libEnv.GetENV)()], configs.global));

exports.default = MS_CONFIG;