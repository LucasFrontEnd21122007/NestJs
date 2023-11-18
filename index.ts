import { Controller, Get } from '@nestjs/common';

@Controller('meu-modulo')
export class MeuModuloController {
  @Get()
  getHello(): string {
    return 'Olá, mundo!';
  }
}
