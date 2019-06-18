import { isArray } from "util";

export class ResponseData {
  public status_code: number;
  public total?: number;
  public status_message: string;
  public data: any;
  public errors?: any;

  constructor(code: number, message: string, data?: any, errors?: any) {
    this.status_code = code;
    this.status_message = message;

    if (data) {
      this.data = data;

      if (isArray(data)) {
        // tslint:disable-next-line:semicolon
        this.total = data.length;
      }
    }

    if (errors) {
      this.errors = errors;
    }

  }
}
