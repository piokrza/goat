import { ChangeDetectionStrategy, Component, computed, DestroyRef, inject, input, linkedSignal, OnInit } from '@angular/core';

@Component({
  selector: 'echo-session-timer',
  template: `
    <section>
      <div class="timer">
        @if (secondsRemaining()) {
          <span class="label">Your session expires in:</span>
          <span class="value">
            {{ formattedRemaining() }}
          </span>
        } @else {
          <span class="label">Your session has expired!</span>
        }
      </div>
      <div class="h-2">
        <div class="h-full transition-all bg-blue-500 rounded-xl" [style.width.%]="(secondsRemaining() / total()) * 100"></div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionTimerComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);

  readonly total = input.required<number>();

  readonly secondsRemaining = linkedSignal(() => this.total());
  readonly formattedRemaining = computed(() => this.formattedTime(this.secondsRemaining()));

  ngOnInit(): void {
    this.secondsRemaining.set(this.total());
    this.handleTimer();
  }

  private handleTimer(): void {
    const timerId = setInterval(() => {
      this.secondsRemaining.update((v) => Math.max(v - 1, 0));
    }, 1000);

    this.#destroyRef.onDestroy(() => clearInterval(timerId));
  }

  private formattedTime(totalSeconds: number): string {
    return new Date(totalSeconds * 1000).toISOString().slice(14, 19);
  }
}
