
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text, real } from "drizzle-orm/sqlite-core";
import { relations } from 'drizzle-orm';





export const usersTable = sqliteTable("users_table", {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    password: text('password').notNull(),
    blocked: integer('blocked', { mode: 'boolean' }),
    userAgent: text('userAgent').notNull(),
    created_at: text('created_at').notNull(),
    updated_at: text('updated_at').notNull(),


});

export const tripsTable = sqliteTable("trips_table", {
    id: text('id').primaryKey(),
    planName: text("planName").notNull(),
    peopleCount: text(" peopleCount").notNull(),
    destination: text("destination").notNull(),
    tripStyle: text('tripStyle').notNull(),
    budget: real().notNull(),
    departDate: integer('departDate', { mode: 'timestamp' }).notNull(),
    returnDate: integer('backDate', { mode: 'timestamp' }).notNull(),
    userId: text('user_id')
        .notNull()
        .references(() => usersTable.id),
})

export const tripMembersTable = sqliteTable("trip_members", {
    id: text("id").primaryKey(),
    tripId: text("trip_id")
        .notNull()
        .references(() => tripsTable.id),
    userId: text("user_id")
        .notNull()
        .references(() => usersTable.id),
    role: text("role").default("member"),
});


export const newsTable = sqliteTable("news_table", {
    id: text('id').primaryKey(),
    slug: text('slug').notNull(),
    title: text('title').notNull(),
    author: text('author').notNull(),
    content: text('content').notNull(),
    excerpt: text('excerpt').notNull(),
    coverImageUrl: text('cover_image_url').notNull(),
    published: integer('published', { mode: 'boolean' }).notNull(),
    created_at: text('created_at').notNull(),
    updated_at: text('updated_at').notNull(),
    userId: text('user_id')
        .notNull()
        .references(() => usersTable.id),
});


export const tripExpensesTable = sqliteTable("trip_expenses", {
    id: text("id").primaryKey(),
    tripId: text("trip_id").notNull().references(() => tripsTable.id),
    memberId: text("member_id").notNull().references(() => tripMembersTable.id),
    category: text("category").notNull(),
    amount: real("amount").notNull(),
    date: integer("date", { mode: "timestamp" }).notNull(),
});



//Relations
export const usersRelations = relations(usersTable, ({ many }) => ({
    news: many(newsTable),
}));

export const newsRelations = relations(newsTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [newsTable.userId],
        references: [usersTable.id],
    }),
}));


export const tripsRelations = relations(tripsTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [tripsTable.userId],
        references: [usersTable.id],
    }),
}));

export const tripExpensesRelations = relations(tripExpensesTable, ({ one }) => ({
    trip: one(tripsTable, {
        fields: [tripExpensesTable.tripId],
        references: [tripsTable.id],
    }),
    member: one(tripMembersTable, {
        fields: [tripExpensesTable.memberId],
        references: [tripMembersTable.id],
    }),
}));







export type NewsTableSelectMode = InferSelectModel<typeof newsTable>;
export type NewsTableInsertMode = InferInsertModel<typeof newsTable>;
export type UsersTableSelectMode = InferSelectModel<typeof usersTable>;
export type UsersTableInsertMode = InferInsertModel<typeof usersTable>;
export type TripsTableSelectMode = InferSelectModel<typeof tripsTable>;
export type TripsTableInsertMode = InferInsertModel<typeof tripsTable>;