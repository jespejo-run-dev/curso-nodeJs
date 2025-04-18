import winston, {format} from 'winston';

const {combine, timestamp, json} = format;

const logger = winston.createLogger({
    level: 'info',
    format: combine(
      timestamp(),
      json(),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or higher to `error.log`
      //   (i.e., error, fatal, but not other levels)
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  
  //
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
  }

  // adapter pattern
export const buildLogger = (service:string) => {
    return {
        log: function (message: string) {
            logger.log('info', { message, service });
        }, 
        error: function (message: string) {
            logger.error('error', { 
                message, 
                service,
            }); 
        }
    }
}