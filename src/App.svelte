<script>
  import { DateTime } from "luxon";

  let now = DateTime.now().setZone("Asia/Taipei");
  const final = DateTime.fromISO("2022-12-12T20:05:00+08:00").setZone(
    "Asia/Taipei"
  );

  setInterval(() => (now = DateTime.now().setZone("Asia/Taipei")), 1000);

  $: difference = final
    .diff(now, ["years", "months", "days", "hours", "minutes", "seconds"])
    .toObject();
</script>

<main>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:{difference.days};" />
          </span>
          days
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:{difference.hours};" />
          </span>
          hours
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:{difference.minutes};" />
          </span>
          min
        </div>
        <div
          class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content"
        >
          <span class="countdown font-mono text-5xl">
            <span style="--value:{parseInt(difference.seconds)};" />
          </span>
          sec
        </div>
      </div>
    </div>
  </div>
</main>

<style>
</style>
