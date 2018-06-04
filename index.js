import { GetENV } from "lib-env"

const configs = {
    prod: {
        amqp: {
            url: 'amqp://localhost:5672',
        },
        mongo: {
            base: `mongodb://localhost:27017`,
        },
        redis: {
            host: 'localhost',
            port: '6379',
        },
    },
    dev: {
        amqp: {
            url: 'amqp://localhost:5672',
        },
        mongo: {
            base: `mongodb://localhost:27017`,
        },
        redis: {
            host: 'localhost',
            port: '6379',
        },
    },
    test: {
        amqp: {
            url: 'amqp://localhost:5672',
        },
        mongo: {
            url: `mongodb://localhost:27017`,
        },
        redis: {
            host: 'localhost',
            port: '6379',
        },
    },
    global: {
        logLevel: 'debug'
    }
}


/**
 * @type {MS_Config}
 */
const CONFIG = Object.freeze(Object.assign({}, configs[GetENV()], configs.global));

export default CONFIG;