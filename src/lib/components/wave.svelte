<script>
    import { gsap } from "gsap";
    import { onMount } from 'svelte';
    import { SplitText } from 'gsap/SplitText';
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    /**
     * @type {SplitText}
     */
    let splitText;

    let {
        text = "default text",
        className = "classDefault"
    } = $props();

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof window !== 'undefined') {
            splitText = new SplitText(`.${className}`, { type: "chars" });
        }
        gsap.from(splitText.chars, {
            duration: 0.1,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: `.${className}`,
                start: 'top 80%',
                toggleActions: 'play none none none',
            }
        });
    });
</script>

<h1 class="{className} text-[140px] text-[#e0e1dd] font-[Xanmono]">{text}</h1>
