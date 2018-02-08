import {createConnection} from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: '192.168.99.100',
            port: 3306,
            username: 'root',
            password: 'cnTNYnEb',
            database: 'tasks',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];