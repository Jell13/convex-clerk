import { ConvexError } from "convex/values"
import { mutation } from "./_generated/server"

export const store = mutation({
    args:{},
    handler: async (ctx) => {
        
        const identity = await ctx.auth.getUserIdentity()
        if(!identity){
            throw new ConvexError("Unauthorized")
        }

        const user = await ctx.db.query("users").withIndex("by_tokenIdentifier", q => q.eq("tokenIdentifier", identity.tokenIdentifier)).unique()
        if(user !== null){
            return user._id
        }

        await ctx.db.insert("users", {
            username: identity.name,
            email: identity.email,
            imageUrl: identity.pictureUrl,
            tokenIdentifier: identity.tokenIdentifier
        })
    }
})