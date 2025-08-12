<script>
// @ts-nocheck

  import Icon from "@iconify/svelte";
  export let data;
  let Ricks = data.Ricks;

  let rickCount = 0;
  let gameStarted = false;

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
    currentChoices = shuffled.slice(0, rickCount);
    targetRick = currentChoices[Math.floor(Math.random() * rickCount)];
    selectedRick = null;
    showFeedback = false;
  }

    function youLoose() {
        gameOver = true;
    }

  function handleChoice(choice) {
    if (selectedRick) return;

    selectedRick = choice;
    showFeedback = true;

    if (choice.name === targetRick.name) {
      score++;
    } else {
      lives--;
      if (lives <= 0) {
        setTimeout(handleChoice, 1500);
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

  function startGame(count) {
    rickCount = count;
    gameStarted = true;
    restartGame();
  }
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-[#1b263b] text-white p-10">
  {#if !gameStarted}
    <div class="text-center space-y-6">
      <h1 class="text-3xl font-bold mb-4">Choisissez la difficulté</h1>
      <div class="flex gap-6 justify-center">
        <button on:click={() => startGame(2)} class="btn">2</button>
        <button on:click={() => startGame(5)} class="btn">5</button>
        <button on:click={() => startGame(10)} class="btn">10</button>
      </div>
    </div>
  {:else}
    <div class="absolute top-30 left-8 text-white text-lg space-y-1 text-right flex flex-col items-center">
        <p>{"❤️ ".repeat(lives)}{"🤍 ".repeat(5 - lives)}</p>
        <p>Score : {score}</p>
    </div>
    {#if gameOver}
      <div class="text-center mt-10">
        <h2 class="text-5xl font-bold mb-4">Partie terminée</h2>
        <p class="text-3xl mb-6">Score final : {score}</p>
        <button
          class="bg-[#1d2d44] text-[#f0ebd8] px-6 py-3 rounded-2xl text-[25px] cursor-pointer hover:bg-[#3e5c76]"
          on:click={() => { gameStarted = false; }}
        >
          Revenir au menu
        </button>
      </div>
    {:else}
      <h1 class="text-4xl font-bold mb-10 text-center text-[#778da9]">
        Qui est : <span class="text-[#f0ebd8]">{targetRick?.name}</span> ?
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {#each currentChoices as rick}
          <div class="relative">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
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
  {/if}
</div>

<style>
  .grayscale {
    filter: grayscale(1);
  }

  .btn {
    background-color: #1d2d44;
    color: #f0ebd8;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #3e5c76;
  }
</style>
