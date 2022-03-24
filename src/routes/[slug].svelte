<script context="module">
  import { getArticleBySlug } from "$lib/service";

  export async function load({ params }) {
    const article = await getArticleBySlug(params.slug);
    // console.log(article);

    return {
      props: {
        article
      }
    };
  }
</script>

<script>
  export let article;
</script>

<svelte:head>
  <title>
    Cagers Basketball | {article.title}
  </title>
</svelte:head>

<a
  sveltekit:prefetch
  class="py-2 px-4 bg-red-800 rounded text-white hover:opacity-70"
  href="/"
>
  BACK
</a>

<div class="bg-white mt-5 p-3 rounded">
  <div class="invisible">
    <h1>Hello</h1>
  </div>
  <h2 class="font-bold text-lg">{article.title}</h2>
  <hr class="mb-5" />
  <div class="text-stone-600">
    {@html article.body.html}
  </div>
  <div class="grid sm:grid-cols-2 md:grid-cols-5 gap-1">
    {#each article.photos as photo}
      <a href="/photos/{photo.handle}" target="_blank">
        <img
          src="https://media.graphcms.com/resize=fit:clip,width:350/output=format:webp/{photo.handle}"
          alt="basketball"
        />
      </a>
    {/each}
  </div>
</div>
