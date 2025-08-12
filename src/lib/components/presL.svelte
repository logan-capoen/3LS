<script>
// @ts-nocheck
  import { goto } from "$app/navigation";
  import { gsap } from "gsap";
  import { onMount } from 'svelte';
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  let {
    description = "fdzeligfupezhfpiuzehuifheziuhfiup zefh zepfhezpiuhfpzeiuhfpiuezhpfu ezpiuhfepzihfpiezhpfu ezfhpeizuhfpizehf pezpifhpizef",
    background = "/SpaceCake.png",
    className = "PresR",
    site="none",
    size = 14
  } = $props();

  function gotopage() {
    if (site == "ratkov") {
      window.open('https://ratkov.netlify.app/', '_blank');
    } else if ( site != "none") {
      goto(site);
    }
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Utilisez des classes uniques pour chaque instance
    gsap.from(`.${className} .left-element`, {
        x: '-80vw',
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: `.${className} .left-element`,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });

    gsap.from(`.${className} .right-element`, {
        x: '80vw',
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: `.${className} .right-element`,
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });
  });
</script>


<div class="{className} w-full h-70 flex justify-between items-center mt-20">
  <div class="left-element bg-[#778da914] h-70 w-[50%] flex justify-center items-center shadow-2xl" style="clip-path: polygon(0% 0%, 75% 0%, 89% 57%, 100% 100%, 0% 100%); font-family: Xanmono;">
      <p class="ml-[4vw] mr-[15vw] text-[#e0e1dd] text-center" style="font-size: clamp(8px,1vw,{size}px);">{@html description}</p>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore event_directive_deprecated -->
  <div on:click={gotopage} class={` ${site != 'none' ? 'cursor-pointer' : ''} right-element h-70 w-[50%] shadow-2xl`} style="
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 25% 100%, 14% 56%);
      background-image: url({background});
      background-size: cover;
      background-position: center;
  "></div>
</div>
