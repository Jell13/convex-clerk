import {defineTable, defineSchema} from "convex/server"
import { v } from "convex/values"

export default defineSchema({
    users: defineTable({
        username: v.string(),
        email: v.string(),
        imageUrl: v.string(),
        tokenIdentifier: v.string()
    }).index("by_email", ["email"]).index("by_tokenIdentifier", ["tokenIdentifier"]),

    requests: defineTable({
        sender: v.id("users"),
        receiver: v.id("users")
    }).index("by_receiver", ["receiver"]).index("by_receiver_sender", ["receiver","sender"])
})