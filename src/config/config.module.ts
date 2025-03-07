import { Module } from '@nestjs/common';
import { ConfigModule as ConfigModuleNest } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModuleNest.forRoot({
      isGlobal: false,
      validationSchema: Joi.object({
        PORT: Joi.number().required().default(3000),
        DB_HOST: Joi.string().required().default('localhost'),
        DB_PORT: Joi.number().required().default(5432),
        DB_USER: Joi.string().required().default('postgres'),
        DB_PASS: Joi.string().required().default('postgres'),
        DB_NAME: Joi.string().required().default('postgres'),
      }),
    }),
  ],
})
export class ConfigModule {}
