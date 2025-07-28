<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import Pres from '$lib/components/pres.svelte';

    let tl = gsap.timeline();

    onMount(() => {
        const splitTitle = new SplitText(".title", { type: "chars" });
        if (typeof window !== 'undefined') {
            tl.from(splitTitle.chars, {
            duration: 0.1,
            opacity: 0,
            stagger: 0.3,
            delay: 0.3,
            ease: "none"
        });
        }
    });  
</script>

<main class="overflow-hidden">
    <div class="absolute w-full h-screen bg-cover bg-fixed opacity-80 z-0" style="background-image: url('/bg_3ls.png'); background-position: bottom 40% center;"></div>
    <div class="w-full h-screen flex justify-center items-center -mt-[80px]">
        <h1 class="title">3LS</h1>
    </div>
    <Pres></Pres>
</main>

<style>
    h1 {
        color: #e0e1dd;
        font-family: Xanmono;
        font-size: 180px;
    }
</style>