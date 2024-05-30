import { mutation } from "./_generated/server"

export const store = mutation({
    args:{},
    handler: async (ctx) => {
        
        const identity = await ctx.auth.getUserIdentity()
        console.log(identity)
    }
})