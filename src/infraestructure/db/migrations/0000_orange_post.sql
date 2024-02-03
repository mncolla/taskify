CREATE TABLE `movies` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text,
	`description` text,
	`status` text,
	`startDate` text DEFAULT CURRENT_DATE,
	`endDate` text
);
