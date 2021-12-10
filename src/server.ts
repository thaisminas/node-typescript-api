//Tem ficar a importação do module-alias primeiro
import './util/module-alias';
import { ForecastController } from './controller/forecast';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3050) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  //Passando o controller para o overnight
  private setupControllers(): void {
    const forcastController = new ForecastController();
    this.addControllers([forcastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
