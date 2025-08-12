<script>
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

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="{className} w-full h-75 flex justify-between items-center mt-20">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore event_directive_deprecated -->
  <div on:click={gotopage} class={` ${site != 'none' ? 'cursor-pointer' : ''} left-element h-75 w-[50%] shadow-2xl`} style="
    clip-path: polygon(0% 0%, 100% 0, 88% 51%, 75% 100%, 0% 100%);
    background-image: url({background});
    background-size: cover;
    background-position: center;
  "></div>
  <div class="right-element bg-[#778da914] h-75 w-[50%] flex justify-center items-center shadow-2xl" style="clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 12% 50%); font-family: Xanmono;">
    <p class="ml-[15vw] mr-[4vw] text-[#e0e1dd] text-center" style="font-size: clamp(8px,1vw,{size}px);">{@html description}</p>
  </div>
</div>
