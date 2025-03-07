select * from "Users";


-- Test upsert
INSERT INTO "Users" ("email","username","passwordHash","name","createdAt","updatedAt")
VALUES ('Lauriane_Wiegand10@hotmail.com','Arlie.Conroy' , 'pass_hash', 'Terri Johnson', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) ON CONFLICT (email,username)
DO UPDATE SET name = excluded.name WHERE "Users".email = 'Lauriane_Wiegand10@hotmail.com' and "Users".username = 'Arlie.Conroy'
RETURNING "id","email","username","passwordHash","name","deletedAt","createdAt","updatedAt";
