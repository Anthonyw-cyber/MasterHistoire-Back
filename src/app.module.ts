import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { HandicapModule } from './handicap/handicap.module';
import { MuseeModule } from './musee/musee.module';
import { DispositifController } from './dispositif/dispositif.controller';
import { DispositifService } from './dispositif/dispositif.service';
import { DispositifModule } from './dispositif/dispositif.module';





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
    MuseeModule,
    DispositifModule,






  ],

  controllers: [DispositifController],

  providers: [DispositifService],




})
export class AppModule {}
