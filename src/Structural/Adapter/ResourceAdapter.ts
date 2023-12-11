import { Resource } from "./Resource";

export class ResourceAdapter {
  private resource: Resource;

  constructor(resource: Resource) {
    this.resource = resource;
  }

  public method(): void {
    this.resource.resourceMethod();
  }
}
