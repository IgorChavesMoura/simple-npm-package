// import FluentSQLBuilder from "../fluentsql-jest-tdd-yt";
import FluentSQLBuilder from '@igorchavesmoura/fluentsql';

import database from './database/data.json';

const result = FluentSQLBuilder.for(database)
                                .where({ registered:/^(2020|2019)/ })
                                .select(['category'])
                                .limit(3)
                                .count('category')
                                .build();

console.log(result);


                            

