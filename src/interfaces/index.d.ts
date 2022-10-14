import { IncomingHttpHeaders, IncomingMessage, ServerResponse } from "http";

export interface IRequest extends IncomingMessage { }
export interface IResponse extends ServerResponse { }
export interface IHeaders extends IncomingHttpHeaders { }

export interface IApplication {
    request: IRequest
    response: IResponse
}