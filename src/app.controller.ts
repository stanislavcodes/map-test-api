import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('healthcheck')
  async getStatus(): Promise<String> {
    return 'OK';
  }
}
