<script lang="ts">
	import { PrismaClient } from '@prisma/client/edge';
	import { withAccelerate } from '@prisma/extension-accelerate';

	const funct = async () => {
		const prisma = new PrismaClient().$extends(withAccelerate());
		await prisma.user.create({
			data: {
				email: 'jose@macosta.dev',
				name: 'Jose Martin Acosta'
			}
		});
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
