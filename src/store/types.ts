export interface IProduct {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string,
    isFavourite: boolean,
    isInCart: boolean,
};

export interface IBookInfo {
    error: string,
    title: string,
    subtitle: string,
    authors: string,
    publisher: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    year: string,
    rating: string,
    desc: string,
    price: string,
    image: string,
    url: string,
    pdf: {},
    qty: number,
};

export type UserDataType = {
    displayName: string,
    email: string,
    password: string,
    newPassword?: string,
};

export type AuthErrorType = {
    displayName?: string,
    email: string,
    password: string,
    confirmPassword?: string,
    newPassword?: string,
};

export type baseActionType<T> = {
    type: T;
};

export type baseActionTypeWithPayload<T, P> = {
    type: T;
    payload: P;
};

