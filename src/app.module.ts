import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HandicapModule } from './handicap/handicap.module';





@Module({

  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const test: any = {
          type: 'mariadb',
          host: configService.get('MYSQL_HOST'),
          port: +configService.get('MYSQL_PORT_INTERN'),
          username: configService.get('MYSQL_USER'),
          password: configService.get('MYSQL_PASSWORD'),
          database: configService.get('MYSQL_DATABASE'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,

        };
        console.log(JSON.stringify(test, null, 2));
        return test;
      },
      inject: [ConfigService],
    }),
    HandicapModule,






  ],




})
export class AppModule {}
