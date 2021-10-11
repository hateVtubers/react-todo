const reducer = ({ tasks }, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return {
        tasks: [...tasks, payload],
      };
    case "REMOVE_TASK":
      const rm = tasks.filter((r) => payload.id !== r.id);
      return {
        tasks: [...rm],
      };
    case "DONE_TASK":
      const up = tasks.map((r) =>
        payload.id === r.id ? { ...r, done: !r.done } : r
      );
      return {
        tasks: [...up],
      };
    default:
      return tasks;
  }
};

export default reducer;
