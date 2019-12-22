import { injectable } from "inversify";

@injectable()
export class HttpService {
  public GET<R>(url: string): Promise<R> {
    return this.requestJSON("GET", url);
  }

  public POST<R>(url: string, body: object): Promise<R> {
    return this.requestJSON("POST", url, body);
  }

  private async requestJSON<R>(
    method: string,
    url: string,
    body?: object
  ): Promise<R> {
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: method !== "GET" && JSON.stringify(body)
    } as RequestInit;

    return this.sendRequest<R>(url, options);
  }

  private async sendRequest<R>(url: string, options: RequestInit): Promise<R> {
    const response = await fetch(url, options);

    if (!response.ok) {
      return Promise.reject(new Error(response.status.toString()));
    }
    return response.json();
  }
}
