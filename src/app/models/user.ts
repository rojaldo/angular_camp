export class User {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public country: string,
        public hiking?: string,
        public running?: string,
        public swimming?: string
    ) { }
 } 