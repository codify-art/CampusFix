function StatCard({
  title,
  value,
  icon,
  description,
  type
}) {
  return (
    <div className={`stat-card ${type}`}>

      <div className="stat-top">

        <div className="stat-icon">
          {icon}
        </div>

        <span className="stat-label">
          {title}
        </span>

      </div>

      <div className="stat-value">
        {value}
      </div>

      <p>{description}</p>

    </div>
  );
}

export default StatCard;