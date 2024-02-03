CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`status` text NOT NULL,
	`startDate` text DEFAULT CURRENT_DATE NOT NULL,
	`endDate` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `movies`;