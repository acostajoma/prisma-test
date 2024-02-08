<script lang="ts">
	import type { PageData } from './$types';
	import prisma from '$lib/prisma';

	export let data: PageData;

	let posts:
		| {
				id: number;
				title: string;
				content: string | null;
				published: boolean;
				authorId: number | null;
		  }[]
		| undefined;
	const funct = async () => {
		const response = await prisma.post.findMany({
			where: { published: true }
		});
		posts = response;
	};
</script>

<div>
	<h1>My Blog</h1>
	<main>
		<div>
			{#each data.feed as post (post.id)}
				{JSON.stringify(post)}
			{/each}
		</div>
	</main>
</div>

<button on:click={funct}>CLICK HERE</button>

{JSON.stringify(posts)}
