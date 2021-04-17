import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function start() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('Test backend')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('Nest.js')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(port, () => {
    console.log(`Server start on port: ${port}`)
  })
}
start()
