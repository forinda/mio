import { IApplication, IRequest, IResponse } from "./interfaces";

export class Application implements IApplication {
  request: IRequest = {} as IRequest;
  response: IResponse = {} as IResponse;
  app: any;

  createApplication() {
    const app = (req: IRequest, res: IResponse, next?: any) => {
      this.app.handle(req, res, next);
    };
    app.req = Object.create(this.request, {
      app: { configurable: true, enumerable: true, writable: true, value: app },
    });

    app.res = Object.create(this.response, {
      app: { configurable: true, enumerable: true, writable: true, value: app },
    });
    return app;
  }

  handle = (req: IRequest, res: IResponse, next?: any) => {
    console.log("handle");
    };

    use(fn: any) {
        this.app.use(fn);
    }
    get(path: string, fn: any) {
        this.app.get(path, fn);
    }
    post(path: string, fn: any) {
        this.app.post(path, fn);
    }
    put(path: string, fn: any) {
        this.app.put(path, fn);
    }
    delete(path: string, fn: any) {
        this.app.delete(path, fn);
    }
}
