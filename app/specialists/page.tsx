"use client";

import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function SpecialistsPage() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Оптимизаторы</h1>
        <p className="text-muted mt-2 max-w-2xl">
          Люди, которые профессионально занимаются оптимизацией CS2 и помогают с настройкой.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="glass rounded-2xl p-12 text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-accent-soft text-accent flex items-center justify-center mx-auto mb-4">
          <Wrench size={28} />
        </div>
        <h2 className="text-xl font-semibold mb-2">Раздел в разработке</h2>
        <p className="text-muted max-w-md mx-auto">
          Здесь скоро появятся контакты специалистов по оптимизации CS2. Информация появится позже.
        </p>
      </motion.div>
    </div>
  );
}