/**
 * Light mode (default): SVG tapered cone — pass `color` only.
 * Dark mode eyebrow:    pass `dark` + `label`, optionally `center`.
 *
 * Usage:
 *   <TaperedLine color="#00A8E8" />
 *   <TaperedLine dark label="Our Services" />
 *   <TaperedLine dark label="Our Services" center />
 */
export default function TaperedLine({ color = '#00A8E8', dark = false, label, center = false }) {
  if (dark) {
    return (
      <div className={`inline-flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        {center && (
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400/60 flex-shrink-0" />
        )}

        {label && (
          <p className="text-[11px] sm:text-xs text-blue-400 uppercase tracking-[0.32em] font-semibold">
            {label}
          </p>
        )}

        <span
          className={`h-px w-8 flex-shrink-0 ${
            center
              ? 'bg-gradient-to-l from-transparent to-purple-400/60'
              : 'bg-gradient-to-r from-purple-400/60 to-transparent'
          }`}
        />
      </div>
    );
  }

  return (
    <svg
      width="48"
      height="4"
      viewBox="0 0 48 4"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M0 2 L42 0.4 Q48 2 42 3.6 Z" fill={color} />
    </svg>
  );
}
