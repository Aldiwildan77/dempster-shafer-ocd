export const diffTime = (start: Date, end: Date) => {
  if (!start || !end) {
    return "0s";
  }

  if (start?.getTime() > end?.getTime()) {
    return "0s";
  }

  if (start?.getTime() === end?.getTime()) {
    return "1s";
  }

  const diff = end.getTime() - start.getTime();
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  if (hours > 0) {
    if (minutes > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${hours}h`;
  }

  if (minutes > 0) {
    if (seconds > 0) {
      return `${minutes}m ${seconds}s`;
    }

    return `${minutes}m`;
  }

  return `${seconds}s`;
};
