using mydb from '../db/schema';

service Book {
    entity Books as projection on mydb.Books;
}