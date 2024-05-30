import {defineTable, defineSchema} from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        username: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        tokenIdentifier: v.string()
    }).index("by_email", ["email"]).index("by_tokenIdentifier", ["tokenIdentifier"])
})