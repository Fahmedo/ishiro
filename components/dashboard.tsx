'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function Dashboard() {
  const monthlyData = [
    { month: 'Jan', expenses: 4200 },
    { month: 'Feb', expenses: 3800 },
    { month: 'Mar', expenses: 5100 },
    { month: 'Apr', expenses: 4600 },
    { month: 'May', expenses: 3900 },
    { month: 'Jun', expenses: 4400 },
  ]

  const categoryData = [
    { name: 'Dining', value: 1200 },
    { name: 'Transport', value: 900 },
    { name: 'Software', value: 1500 },
    { name: 'Other', value: 1000 },
  ]

  const colors = ['#4FB63D', '#0F1F40', '#E8EBE7', '#6B7280']

  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Your Financial Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Beautiful visualizations that show you exactly where your money goes.
          </p>
        </div>

        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg shadow-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Expenses Chart */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-6">Monthly Expenses</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--color-background)',
                      border: '1px solid var(--color-border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="expenses" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Category Breakdown */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-6">Category Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: $${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Total This Month</p>
              <p className="text-2xl font-bold text-primary">$4,400</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Average Daily</p>
              <p className="text-2xl font-bold text-primary">$146</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Budget Status</p>
              <p className="text-2xl font-bold text-secondary">On Track</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
