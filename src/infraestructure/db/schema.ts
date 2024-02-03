import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const taks = sqliteTable("movies", {
  id: text("id").primaryKey(),
  title: text("title"),
  description: text("description"),
  status: text("status"),
  startDate: text("startDate").default(sql`CURRENT_DATE`),
  endDate: text("endDate"),
});