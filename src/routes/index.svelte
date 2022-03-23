<script context="module">
  import { getArticles } from "$lib/service";

  export async function load() {
    const articles = await getArticles();
    // console.log(articles);

    return {
      props: {
        articles
      }
    };
  }
</script>

<script>
  export let articles;
</script>

<svelte:head>
  <title>
    Basketball Training and Teams | Cagers Basketball | Vancouver, WA
  </title>
</svelte:head>

<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
  {#each articles as article}
    <div id="card" class="bg-white rounded p-1 relative h-48">
      <h3 class="font-semibold">{article.title}</h3>
      <hr />
      <p class="text-stone-500 text-xs">{article.blurb}</p>
      <a
        sveltekit:prefetch
        class="py-1 px-2 bg-red-800 rounded text-white absolute bottom-1 right-1 hover:opacity-70"
        href="/{article.slug}"
      >
        VIEW
      </a>
    </div>
  {/each}
</div>
