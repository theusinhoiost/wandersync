
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

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
});


export const usersTable = sqliteTable("users_table", {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    password: text('password').notNull(),
    blocked: integer({ mode: 'boolean' }),
    userAgent: text('userAgent').notNull(),



});

export type NewsTableSelectMode = InferSelectModel<typeof newsTable>;
export type NewsTableInsertMode = InferInsertModel<typeof newsTable>;
export type UsersTableSelectMode = InferSelectModel<typeof usersTable>;
export type UsersTableInsertMode = InferInsertModel<typeof usersTable>;