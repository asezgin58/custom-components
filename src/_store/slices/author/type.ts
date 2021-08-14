export type IAuthor = {
    name?: string;
    surname?: string;
    age?: number;
    job?: string;
    email?: string;
};

export const initialAuthorData: IAuthor = {
    name: 'Aykut',
    surname: 'Sezgin',
    age: new Date().getFullYear() - 1994,
    job: 'Front-End Developer',
    email: 'aykut-sezgin@hotmail.com',
};
