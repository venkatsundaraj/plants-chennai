import {
  pgTable,
  serial,
  text,
  integer,
  primaryKey,
  boolean,
  varchar,
  date,
  timestamp,
  pgTableCreator,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `chennai-plants_${name}`);
