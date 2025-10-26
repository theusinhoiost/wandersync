CREATE TABLE `news` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`content` text NOT NULL,
	`cover_image_url` text NOT NULL,
	`published` integer NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `news_slug_unique` ON `news` (`slug`);