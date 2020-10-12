export const timeConverter = (value) => {
  if (value >= 3600) {
    return (
      Math.trunc(value / 3600) +
      ' h ' +
      Math.trunc((value % 3600) / 60) +
      ' min'
    );
  } else if (value > 60) {
    return Math.trunc(value / 60) + ' min';
  } else {
    return value + ' sec';
  }
};
