export class Mobile {
  private name: string;
  private model: string;
  private tradeMark: string;
  private sdSize: string;
  private color: string;
  private is5G: boolean;
  private cameraNumber: number;
  private price: number;

  constructor(
    name: string,
    model: string,
    tradeMark: string,
    sdSize: string,
    color: string,
    is5G: boolean,
    cameraNumber: number,
    price: number
  ) {
    this.name = name;
    this.model = model;
    this.tradeMark = tradeMark;
    this.sdSize = sdSize;
    this.color = color;
    this.is5G = is5G;
    this.cameraNumber = cameraNumber;
    this.price = price;
  }

  public printCharacter(): void {
    console.log(`El nombre del movil es: ${this.name}`);
    console.log(`El modeloe es: ${this.model}`);
    console.log(`La marca es: ${this.tradeMark}`);
    console.log(`Su tarjeta sd: ${this.sdSize}`);
    console.log(`El color es: ${this.color}`);
    console.log(`Es 5g: ${this.is5G}`);
    console.log(`Tiene Camara: ${this.cameraNumber}`);
    console.log(`El precio es: ${this.price}`);
  }
  public getName(): string {
    return this.name;
  }

  public getModel(): string {
    return this.model;
  }

  public getTradeMark(): string {
    return this.tradeMark;
  }

  public getSdSize(): string {
    return this.sdSize;
  }

  public getColor(): string {
    return this.color;
  }

  public getIs5G(): boolean {
    return this.is5G;
  }

  public getCameraNumber(): number {
    return this.cameraNumber;
  }

  public getPrice(): number {
    return this.price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setModel(model: string): void {
    this.model = model;
  }

  public setTradeMark(tradeMark: string): void {
    this.tradeMark = tradeMark;
  }

  public setSdSize(sdSize: string): void {
    this.sdSize = sdSize;
  }

  public setColor(color: string): void {
    this.color = color;
  }

  public setIs5G(is5G: boolean): void {
    this.is5G = is5G;
  }

  public setCameraNumber(cameraNumber: number): void {
    this.cameraNumber = cameraNumber;
  }

  public imprimirCharacter(): void {
    console.log(`The characteristics of the mobile ${this.name} are:`);
    console.log(`Name: ${this.name}`);
    console.log(`Model: ${this.model}`);
    console.log(`TradeMark: ${this.tradeMark}`);
    console.log(`SD Size (GB): ${this.sdSize}`);
    console.log(`Color: ${this.color}`);
    console.log(`Is 5g?: ${this.is5G}`);
    console.log(`Number Of Cameras: ${this.cameraNumber}`);
  }
}
