import React from "react";

const events = [
  {
    day: 3,
    weekday: "Wed",
    title: "School Live Concert Choir",
    subtitle: "Charity Event 2022",
    ticketsSold: 540,
    totalTickets: 650,
  },
  {
    day: 28,
    weekday: "Fri",
    title: "The Story Of Danau Toba",
    subtitle: "(Musical Drama)",
    ticketsSold: 600,
    totalTickets: 650,
  },
];

const EventCard = ({
  day,
  weekday,
  title,
  subtitle,
  ticketsSold,
  totalTickets,
}) => {
  const progress = (ticketsSold / totalTickets) * 100;

  return (
    <div style={styles.eventCard}>
      <div style={styles.dateContainer}>
        <span style={styles.day}>{day}</span>
        <span style={styles.weekday}>{weekday}</span>
      </div>
      <div style={styles.eventDetails}>
        <h3 style={styles.eventTitle}>{title}</h3>
        <p style={styles.eventSubtitle}>{subtitle}</p>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progress, width: `${progress}%` }}></div>
        </div>
        <p style={styles.ticketCount}>
          {ticketsSold}/{totalTickets}
        </p>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div style={styles.eventsContainer}>
      <h2 style={styles.heading}>Upcoming Events</h2>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
      <div style={styles.viewMore}>
        <p style={styles.viewMoreText}>5 events more</p>
        <p style={styles.viewMoreLink}>View More →</p>
      </div>
      <button style={styles.newEventButton}>+ New Events</button>
    </div>
  );
};

const styles = {
  eventsContainer: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "365px",
  },
  eventCard: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  dateContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "15px",
  },
  day: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  weekday: {
    fontSize: "14px",
    color: "#777",
  },
  eventDetails: {
    flexGrow: 1,
  },
  eventTitle: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  eventSubtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  progressBar: {
    height: "8px",
    backgroundColor: "#eee",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progress: {
    height: "100%",
    backgroundColor: "#F7B924",
    borderRadius: "4px",
  },
  ticketCount: {
    fontSize: "12px",
    color: "#777",
  },
  newEventButton: {
    width: "100%",
    padding: "10px",
    border: "none",
    backgroundColor: "#39C37C",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    // marginLeft: "30px",
  },
  viewMore: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#777",
    margin: "10px 0",
  },
  viewMoreText: {
    margin: "0",
  },
  viewMoreLink: {
    cursor: "pointer",
  },
  heading: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "20px",
    fontWeight: "bold",
  },
};

export default UpcomingEvents;
