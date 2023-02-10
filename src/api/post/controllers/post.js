'use strict';
const { removeAttrs } = require("../../../utils/index.js");

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::post.post');

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            // populate: "deep",
            populate: "*",
        };
        const { pageNo, pageSize, ...params } = ctx.query;
        if (pageNo && pageSize) {
          ctx.query = {
            ...params,
            "pagination[page]": Number(pageNo),
            "pagination[pageSize]": Number(pageSize),
          };
        }
        const res = await super.find(ctx);
        res.data = res.data.map(item=>removeAttrs(item))
        return res;
    },
    
    async findOne(ctx) {
        const { data } = await super.findOne(ctx);
        return removeAttrs(data);
    },
}));
