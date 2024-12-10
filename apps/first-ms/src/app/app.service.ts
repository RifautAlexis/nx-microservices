import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'I am a GET endpoint in the first-ms' };
  }
}
