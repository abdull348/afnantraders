import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Afnan Traders — Life Science & Diagnostic Solutions in Pakistan';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f1729',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow top-right */}
        <div
          style={{
            position: 'absolute',
            right: '-80px',
            top: '-80px',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,168,232,0.18) 0%, transparent 65%)',
          }}
        />
        {/* Background glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            left: '-60px',
            bottom: '-60px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(51,64,160,0.2) 0%, transparent 65%)',
          }}
        />

        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '64px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00A8E8, #3340A0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <span style={{ color: 'white', fontSize: '22px', fontWeight: 800 }}>A</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.3px' }}>
            Afnan Traders
          </span>
        </div>

        {/* Eyebrow label */}
        <div
          style={{
            color: '#00A8E8',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Life Science Solutions · Pakistan
        </div>

        {/* Main headline */}
        <div
          style={{
            color: 'white',
            fontSize: '54px',
            fontWeight: 800,
            lineHeight: 1.15,
            maxWidth: '680px',
            marginBottom: '28px',
            letterSpacing: '-1px',
          }}
        >
          Scientific &amp; Diagnostic Solutions
        </div>

        {/* Subtext */}
        <div
          style={{
            color: 'rgba(255,255,255,0.50)',
            fontSize: '20px',
            maxWidth: '560px',
            lineHeight: 1.55,
          }}
        >
          Trusted provider of medical, diagnostic, and research instruments. Serving hospitals &amp; institutions nationwide.
        </div>

        {/* Partner badges */}
        <div style={{ display: 'flex', gap: '12px', position: 'absolute', bottom: '72px', left: '80px' }}>
          {['Macrogen', 'PhytoTech Labs', 'Thermo Fisher', 'Thistle Scientific'].map((name) => (
            <div
              key={name}
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                padding: '8px 14px',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '12px',
                fontWeight: 600,
              }}
            >
              {name}
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #00A8E8 0%, #3340A0 50%, #F2D16B 100%)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
