'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { AnimatedCounter } from './animated-counter'
import { fadeInUp, float } from '@/lib/animations'

const monthlyData = [
  { month: 'Jan', value: 2400 },
  { month: 'Feb', value: 1398 },
  { month: 'Mar', value: 2800 },
  { month: 'Apr', value: 3908 },
  { month: 'May', value: 3800 },
]

const categoryData = [
  { name: 'Software', value: 35 },
  { name: 'Travel', value: 25 },
  { name: 'Meals', value: 20 },
  { name: 'Other', value: 20 },
]

const colors = ['#4FB63D', '#0F1F40', '#E8EBE7', '#6B7280']

export default function MiniDashboard() {
  return (
    <motion.div
      className="relative"
      variants={fadeInUp}
    >
      {/* Outer Card Container with Shadow */}
      <motion.div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-gray-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between"
          >
            <div>
              <h3 className="text-sm font-semibold text-primary">Total Monthly Spend</h3>
              <motion.div
                className="text-3xl font-bold text-primary mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                $<AnimatedCounter to={12806} duration={2.5} />
              </motion.div>
            </div>
            <motion.div
              className="text-right"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-green-600 font-semibold">↓ 12% vs last month</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="p-6 space-y-6">
          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-sm font-semibold text-primary mb-4">Spending Trend</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                  cursor={{ fill: 'rgba(79, 182, 61, 0.1)' }}
                />
                <Bar
                  dataKey="value"
                  fill="#4FB63D"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h4 className="text-sm font-semibold text-primary mb-4">Category Breakdown</h4>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={140} height={140}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                    animationDuration={1500}
                    animationEasing="ease-out"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 flex-1">
                {categoryData.map((cat, idx) => (
                  <motion.div
                    key={cat.name}
                    className="flex items-center justify-between text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: colors[idx] }}
                      ></div>
                      <span className="text-muted-foreground">{cat.name}</span>
                    </div>
                    <span className="font-semibold text-primary">{cat.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-muted-foreground">Last updated: Today</span>
          <span className="text-secondary font-semibold">Updated automatically</span>
        </motion.div>
      </motion.div>

      {/* Floating Badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Real-time synced
      </motion.div>
    </motion.div>
  )
}
