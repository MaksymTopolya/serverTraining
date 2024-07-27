import 'dotenv/config';

import app from './server.js';
import { initMongoConnection } from './db/initMondoConnection.js';

async function bootstrap() {
  try {
    await initMongoConnection();

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

bootstrap();