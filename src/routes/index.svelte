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

{#each articles as article}
  <h1 class="text-3xl font-bold underline">{article.title}</h1>
{/each}
