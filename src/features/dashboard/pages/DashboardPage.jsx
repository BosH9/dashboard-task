const stats = [
  { label: "Total Users", value: "1,284" },
  { label: "Active Users", value: "1,052" },
  { label: "Pending Requests", value: "24" },
];

export default function DashboardPage() {
  return (
    <section>
      <header className="page-header">
        <h1>Overview</h1>
        <p>Here's what's happening in your application.</p>
      </header>

      <div className="stats-grid">
        {stats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <p>{stat.label}</p>
            <h2>{stat.value}</h2>
          </article>
        ))}
      </div>

      <section className="activity-section">
        <h2>Recent Activity</h2>
        <p>Your recent activity will appear here.</p>
      </section>
    </section>
  );
}
