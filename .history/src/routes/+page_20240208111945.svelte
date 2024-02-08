<script lang="ts">
	import { PrismaClient } from '@prisma/client/edge';
	import { withAccelerate } from '@prisma/extension-accelerate';
	import { PUBLIC_DATABASE_URL } from '$env/static/public';

	const funct = async () => {
		const prisma = new PrismaClient({
			datasourceUrl: PUBLIC_DATABASE_URL
		}).$extends(withAccelerate());
		const result = await prisma.post.create({
			data: {
				title: 'TEST',
				published: true,
				content: 'Jose Martin Acosta'
			}
		});
		console.log(result);
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={funct}>CLICK HERE</button>
