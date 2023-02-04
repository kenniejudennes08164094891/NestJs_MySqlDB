/* eslint-disable prettier/prettier */

export class User {
    constructor(
        public userId: number,
        public userName: string,
        public userEmail: string,
        public userHeight: string,
        public userWeight: string
    ){}
}

export interface UserInterface{
    userId: number,
    userName: string,
    userEmail: string,
    userHeight: string,
    userWeight: string
}
