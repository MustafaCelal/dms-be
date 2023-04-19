import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      //   host: process.env.DB_HOST,
      //   username: process.env.DB_USERNAME,
      //   password: process.env.DB_PASSWORD,
      //   database: process.env.DB_NAME,
      url: configService.get('DB_URL'),
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: true,
        },
      },
      entities: [__dirname + '/../**/*.entity.{ts,js}'],
      //synchronize: true, // Entityleri veritabanındaki tablolarla eşitleme
      //logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService],
};
