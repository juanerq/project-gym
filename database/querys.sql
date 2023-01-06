CREATE TABLE users (
	id text primary key,
	name text not null,
	phone text,
	birthday text,
	email text,
	gender text not null check(gender IN ('M', 'F')),
	status integer default 1
);