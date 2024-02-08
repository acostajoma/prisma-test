import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
// 1.
const response = await prisma.post.findMany({
    where: { published: true },
  })

return { feed: response };
}) satisfies PageServerLoad;