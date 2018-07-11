import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error: Error) {
    console.error("An error has been encountered: ", error);
  }
}
