<script context="module">
  // export async function load({ params }) {
  //   const photoHandle = params.handle;
  //   // console.log(photoHandle);

  //   return {
  //     props: {
  //       photoHandle
  //     }
  //   };
  // }
</script>

<script>
  import { page } from "$app/stores";
  export const photoHandle = $page.params.handle;
</script>

<a
  sveltekit:prefetch
  class="py-2 px-4 bg-red-800 rounded text-white hover:opacity-70"
  href="/"
>
  BACK
</a>
<div class="bg-white mt-5 p-3 rounded">
  <img
    src="https://media.graphcms.com/resize=fit:clip,width:1256/output=format:webp/{photoHandle}"
    alt="basketball"
  />
</div>
