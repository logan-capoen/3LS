<script>
// @ts-nocheck

  import Icon from "@iconify/svelte";
  export let data;
  let Ricks = data.Ricks;

  /**
     * @type {any[]}
     */
  let currentChoices = [];
  /**
     * @type {{ name: any; } | null}
     */
  let targetRick = null;
  let lives = 5;
  let score = 0;
  let gameOver = false;

  /**
     * @type {null}
     */
  let selectedRick = null;
  let showFeedback = false;

  function pickRicks() {
    const shuffled = [...Ricks].sort(() => Math.random() - 0.5);
    currentChoices = shuffled.slice(0, 5);
    targetRick = currentChoices[Math.floor(Math.random() * 5)];
    selectedRick = null;
    showFeedback = false;
  }

  /**
     * @param {{ name: any; } | null} choice
     */
  function handleChoice(choice) {
    if (selectedRick) return; // éviter double clic

    // @ts-ignore
    selectedRick = choice;
    showFeedback = true;

    // @ts-ignore
    if (choice.name === targetRick.name) {
      score++;
    } else {
      lives--;
      if (lives <= 0) {
        gameOver = true;
        return;
      }
    }

    setTimeout(() => {
      if (!gameOver) pickRicks();
    }, 1500);
  }

  function restartGame() {
    lives = 5;
    score = 0;
    gameOver = false;
    pickRicks();
  }

  pickRicks();
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-[#1b263b] text-white p-10">
  <div class="absolute top-10 left-8 text-lg flex flex-col items-center">
    <p>{"❤️ ".repeat(lives)}{"🤍 ".repeat(5 - lives)}</p>
    <p>Score : {score}</p>
  </div>

  {#if gameOver}
    <div class="text-center mt-10">
      <h2 class="text-5xl font-bold mb-4">Partie terminée</h2>
      <p class="text-3xl mb-6">Score final : {score}</p>
      <button
        class="bg-[#1d2d44] text-[#f0ebd8] px-6 py-3 rounded-2xl text-[25px] cursor-pointer hover:bg-[#3e5c76]"
        on:click={restartGame}
      >
        Recommencer
      </button>
    </div>
  {:else}
    <h1 class="text-4xl font-bold mb-10 text-center">
      Qui est : <span class="text-[#f0a500]">{targetRick?.name}</span> ?
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {#each currentChoices as rick}
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <div class="relative">
          <!-- svelte-ignore a11y_click_events_have_key_events -->
          <img
            src={rick.image}
            alt={rick.name}
            class="w-[200px] h-[200px] object-cover rounded-2xl cursor-pointer transition-transform duration-200 
              {showFeedback ? 'grayscale opacity-60' : 'hover:scale-105'}"
            on:click={() => handleChoice(rick)}
          />

          {#if showFeedback}
            {#if rick.name === targetRick.name}
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon icon="mingcute:check-fill" width="80" height="80" style="color: #00ff5e" />
              </div>
            {:else}
              <div class="absolute inset-0 flex items-center justify-center">
                <Icon icon="maki:cross" width="60" height="60" style="color: red" />
              </div>
            {/if}
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .grayscale {
    filter: grayscale(1);
  }
</style>
