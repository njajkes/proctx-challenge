export class Counter {
  private count: number = 0;
  public get Count() {
    return this.count++;
  }
}
