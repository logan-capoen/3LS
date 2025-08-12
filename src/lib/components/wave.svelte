<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    export let text = "default text";
    export let className = "classDefault";
    export let size = 140;
    export let msize = 40;
    export let speed = 0.1;

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof window !== 'undefined') {
            let splitText = new SplitText(`.${className}`, { type: "chars" });
            gsap.from(splitText.chars, {
                duration: 0.1,
                opacity: 0,
                y: 50,
                stagger: speed,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: `.${className}`,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        }
    });
</script>

<h1 class="{className} text-center" style="font-size: clamp({msize}px,6vw,{size}px); color: #e0e1dd; font-family: Xanmono;">{@html text}</h1>
