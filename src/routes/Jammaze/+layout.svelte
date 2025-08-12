<script>
    import { goto } from "$app/navigation";
    import Icon from "@iconify/svelte";

    function goBack() {
        history.back();
    }
</script>

<div class="z-50">
    <!-- svelte-ignore a11y_consider_explicit_label -->
    <button on:click={goBack} class="fixed top-20 right-4 cursor-pointer z-50">
        <Icon icon="tabler:arrow-back-up" width="60" height="60"  style="color: #e0e1dd" />
    </button>
</div>
<slot/>
