<script>
  import "../app.css";
</script>

<header class="flex justify-center items-center h-16 bg-white">
  <img class="w-14" src="/cagers-logo-sm.png" alt="cagers logo" />
  <span class="sm:text-xl md:text-3xl">CAGERS BASKETBALL</span>
  <img class="w-14" src="/cagers-logo-sm.png" alt="cagers logo" />
</header>

<section
  class="flex justify-center items-center h-24 bg-red-800 text-white sm:text-xl md:text-2xl"
>
  The BEST never REST!
</section>

<main class="mx-auto max-w-7xl mt-5">
  <slot />
</main>

<footer class="text-center text-lg p-5 text-black font-bold">
  &copy;CAGERS BASKETBALL
</footer>
