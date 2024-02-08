import { PUBLIC_DATABASE_URL } from '$env/static/public'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient({
    datasourceUrl: PUBLIC_DATABASE_URL,
}).$extends(withAccelerate())
export default prisma