/**
 * @typedef {object} AmqpSettings
 * @property {string} url
 */

/**
 * @typedef {object} MongoSettings
 * @property {string} base
 */

/**
 * @typedef {object} RedisSettings
 * @property {string} host
 * @property {string} port
 */

/**
 * @typedef {object} Config
 * @property {AmqpSettings} amqp RabbitMQ Settings
 * @property {MongoSettings} mongo MongoDB Settings
 * @property {RedisSettings} redis Redis Settings
 *
 * // Global Properties
 * @property {string} logLevel
 */