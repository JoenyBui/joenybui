export class Blog {
    constructor(
        public id: number,
        public title: string,
        public body: string,
        public status = 'Draft',
    ){}
}