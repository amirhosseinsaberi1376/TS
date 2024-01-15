namespace App {
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMehod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMehod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
