'use client';
import Image from 'next/image';
import { Target, Eye, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const increment = end / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { clearInterval(timer); current = end; }
      setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [end, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { icon: Award, number: 18, suffix: '+', label: 'Years of Excellence', color: '#00A8E8' },
  { icon: Users, number: 500, suffix: '+', label: 'Institutions Served', color: '#3340A0' },
  { icon: TrendingUp, number: 1000, suffix: '+', label: 'Solutions Delivered', color: '#00A8E8' },
  { icon: Clock, number: 24, suffix: '/7', label: 'Technical Support', color: '#3340A0' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">

          {/* Left – image with overlapping cards */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#00A8E8]/12 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=1600&q=80"
                alt="Healthcare professionals at work"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3340A0]/30 via-transparent to-[#00A8E8]/15" />
            </div>

            {/* Overlapping stat card – bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white/92 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl px-5 py-4 min-w-[150px]"
            >
              <div className="text-3xl font-extrabold text-[#00A8E8] leading-none mb-1">20+</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Years in Pakistan</div>
            </motion.div>

            {/* Overlapping stat card – top right */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-5 -right-5 bg-white/92 backdrop-blur-xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] rounded-2xl px-5 py-4 min-w-[160px]"
            >
              <div className="text-3xl font-extrabold text-[#3340A0] leading-none mb-1">500+</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Satisfied Clients</div>
            </motion.div>
          </motion.div>

          {/* Right – text content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Label chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3340A0]/10 border border-[#3340A0]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3340A0]" />
              <span className="text-[11px] font-bold text-[#3340A0] uppercase tracking-widest">About Us</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#1a1a2e] leading-tight mb-5">
                Empowering Pakistan's{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8E8] to-[#3340A0]">
                  Life Science Community
                </span>
              </h2>
              <p className="text-[17px] text-gray-500 leading-relaxed">
                Afnan Traders is Pakistan's trusted partner for medical, diagnostic, analytical,
                agricultural, and veterinary life science instrumentation — serving research
                institutions, hospitals, and laboratories with precision and integrity.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group p-5 rounded-2xl bg-[#EAF8FF] border border-[#00A8E8]/15 hover:border-[#00A8E8]/35 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00A8E8]/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#00A8E8]/15 flex items-center justify-center mb-3.5">
                  <Target size={18} className="text-[#00A8E8]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">Our Mission</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Deliver reliable, innovative solutions for Pakistan's Life-Science Community
                  with integrity and excellence.
                </p>
              </div>

              <div className="group p-5 rounded-2xl bg-[#F0F1FF] border border-[#3340A0]/15 hover:border-[#3340A0]/35 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3340A0]/10 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#3340A0]/12 flex items-center justify-center mb-3.5">
                  <Eye size={18} className="text-[#3340A0]" />
                </div>
                <h3 className="text-base font-bold text-[#1a1a2e] mb-2">Our Vision</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Lead as Pakistan's premier provider of cutting-edge scientific
                  technologies and trusted partnerships.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative text-center bg-white border border-gray-100 p-7 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,168,232,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}40, transparent)` }}
              />
              <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: `${stat.color}12` }}>
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold mb-1.5" style={{ color: stat.color }}>
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
