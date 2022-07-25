create table us
(
    id              bigserial primary key,
    userName        varchar(30) unique,
    type            char,
    university_id   int,
    social_websites varchar(100)[],
    karma           int,
    birthday        date,
    friends_id      bigint[],
    gender          char,
    clubs           int[],
    clubs_status    char[]
);

create table metadata
(
    id           bigserial primary key,
    type         char,
    pic          varchar(200),
    phone        varchar(15),
    email        varchar(64),
    visit        bigint,
    lat_lon      point,
    address      varchar(150),
    create_date  timestamptz,
    update_date  timestamptz,
    link         varchar(200),
    mac_addr     macaddr,
    last_visited timestamptz
);

create table universities
(
    id             serial primary key,
    type           char,
    name           varchar(64),
    moto           text,
    students_count int
);

create table clubs
(
    id     serial primary key,
    type   char,
    name   varchar,
    users  bigint[],
    role   BIT VARYING(100)[],
    rating real[],
    teams  int[]
);

create table team
(
    id    serial primary key,
    type  char,
    name  char,
    users bigint[]
);

create table task
(
    number          bigserial primary key,
    type            char,
    created_by_id   bigint,
    created_by_type char,
    title           varchar(128),
    description     text,
    submission_time timestamptz,
    status          char,
    search_text     tsvector
);


create table announcement
(
    number          bigserial primary key,
    type            char,
    created_by_id   bigint,
    created_by_type char,
    title           varchar(128),
    description     text,
    event_time      timestamptz,
    search_text     tsvector
);