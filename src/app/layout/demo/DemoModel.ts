

interface Block {
  render(): string;
}

export class DemoModel implements Block {

  constructor( private value ){}

  render(): string {
    return this.value;
  }

}
