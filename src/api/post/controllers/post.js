'use strict';

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post');

// module.exports = createCoreController('api::post.post', ({ strapi }) => ({
//     async find(ctx) {
//         ctx.query = {
//             ...ctx.query,
//             populate: 'deep'
//         }
//         const { data } = await super.find(ctx)
//         return removeAttrsAndId(removeTime(data[0]))
//     },
// }));