<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
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
