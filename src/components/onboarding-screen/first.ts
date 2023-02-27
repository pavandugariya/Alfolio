export { }
class parent {
    name: string;
    setName(name: string): void {
        this.name = name;
    }

}
export class first extends parent {
    // name = "pavan dugariya"
    constructor() {
        super();
        console.log('constructore');

    }
    getName() {
        return this.name

    }
}
// const obj1 = new first();

// console.log(obj1.getName());
