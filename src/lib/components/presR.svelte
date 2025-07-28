<script>
  import { gsap } from "gsap";
  import { onMount } from 'svelte';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let {
    description = "fdzeligfupezhfpiuzehuifheziuhfiup zefh zepfhezpiuhfpzeiuhfpiuezhpfu ezpiuhfepzihfpiezhpfu ezfhpeizuhfpizehf pezpifhpizef",
    background = "/SpaceCake.png",
    className = "PresR"
  } = $props();

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Utilisez des classes uniques pour chaque instance
    gsap.from(`.${className} .left-element`, {
      x: '-80vw',
      duration: 1,
      scrollTrigger: {
        trigger: `.${className} .left-element`,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    gsap.from(`.${className} .right-element`, {
      x: '80vw',
      duration: 1,
      scrollTrigger: {
        trigger: `.${className} .right-element`,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });
</script>

<div class="{className}">
  <div class="w-full h-70 flex justify-between items-center mt-50">
    <div class="left-element h-70 w-[50%]" style="
      clip-path: polygon(0% 0%, 100% 0, 88% 51%, 75% 100%, 0% 100%);
      background-image: url({background});
      background-size: cover;
      background-position: center;
    "></div>
    <div class="right-element bg-[#778da914] h-70 w-[50%] flex justify-center items-center" style="clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 12% 50%); font-family: Xanmono;">
      <p class="ml-50 mr-10 text-[#e0e1dd] text-[14px]">{description}</p>
    </div>
  </div>
</div>
