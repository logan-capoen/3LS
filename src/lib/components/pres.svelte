<script>
  import { gsap } from "gsap";
  import { onMount } from 'svelte';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let {
    description = "fdzeligfupezhfpiuzehuifheziuhfiup zefh zepfhezpiuhfpzeiuhfpiuezhpfu ezpiuhfepzihfpiezhpfu ezfhpeizuhfpizehf pezpifhpizef",
    background = "/SpaceCake.png"
  } = $props();

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.left', {
      x: '-80vw',
      duration: 1,
      scrollTrigger: {
        trigger: '.left',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    gsap.from('.right', {
      x: '80vw',
      duration: 1,
      scrollTrigger: {
        trigger: '.right',
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });
</script>

<div class="w-full h-100 flex justify-between items-center">
  <div class="left h-70 w-[50%]" style="
    clip-path: polygon(0% 0%, 100% 0, 88% 51%, 75% 100%, 0% 100%);
    background-image: url({background});
    background-size: 100%;
    background-position: center;
  "></div>
  <div class="right bg-yellow-600 h-70 w-[50%]" style="clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 12% 50%);">
    <p class="ml-50">{description}</p>
  </div>
</div>
