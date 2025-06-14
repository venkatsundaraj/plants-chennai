import {
  pgTableCreator,
  serial,
  text,
  timestamp,
  boolean,
  varchar,
} from "drizzle-orm/pg-core";
import { desc, sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `plants-chennai-${name}`);

export const taskTable = createTable("task", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").notNull().default(false),
  priority: varchar("priority", { enum: ["low", "medium", "high"] })
    .notNull()
    .default("medium"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
