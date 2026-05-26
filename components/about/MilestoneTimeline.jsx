'use client';
import { motion } from 'framer-motion';

const milestones = [
  { year: '2006', event: "Founded in Rawalpindi with a vision to serve Pakistan's scientific community.", color: '#00A8E8' },
  { year: '2010', event: 'Established distribution partnership with Thermo Fisher Scientific.', color: '#3340A0' },
  { year: '2014', event: 'Expanded into agricultural research and veterinary diagnostics sectors.', color: '#00A8E8' },
  { year: '2018', event: 'Partnered with Macrogen for genomics and molecular biology solutions.', color: '#3340A0' },
  { year: '2021', event: 'Added PhytoTech Labs and Thistle Scientific to our distribution network.', color: '#00A8E8' },
  { year: '2026', event: 'Serving 500+ institutions across Pakistan with a dedicated support team.', color: '#3340A0' },
];

export default function MilestoneTimeline() {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div className="absolute left-[52px] sm:left-[68px] top-3 bottom-3 w-px bg-gradient-to-b from-[#00A8E8]/30 via-[#3340A0]/20 to-transparent" />

      <div className="space-y-1">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-30px' }}
            className="group relative flex items-start gap-6 sm:gap-8 p-5 rounded-xl hover:bg-[#F8FCFF] transition-colors duration-200"
          >
            {/* Year badge */}
            <div className="flex flex-col items-center shrink-0 w-[40px] sm:w-[56px]">
              <div
                className="relative z-10 w-3 h-3 rounded-full border-2 border-white shadow-sm group-hover:scale-125 transition-transform duration-200"
                style={{ background: m.color, boxShadow: `0 0 0 3px ${m.color}20` }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 -mt-1.5 pb-4">
              <div
                className="text-[28px] font-extrabold leading-none mb-2 tracking-tight"
                style={{ color: m.color }}
              >
                {m.year}
              </div>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">{m.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
