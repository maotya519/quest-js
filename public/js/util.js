export function Monster( name, physical, attack) {
    this.name = name;
    this.physical = physical
    this.attack = Math.floor(Math.random() * 100 );
}
export function Brave( name, physical, mp ) {
    this.name = name;
    this.physical = physical;
    this.mp = mp;
}
