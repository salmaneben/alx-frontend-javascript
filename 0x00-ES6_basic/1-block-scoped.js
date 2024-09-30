export default function taskBlock(trueOrFalse) {
  const task = false;  // Using const as task won't change
  const task2 = true;  // Using const as task2 won't change

  if (trueOrFalse) {
    const task = true;  // This is scoped to the if block
    const task2 = false; // This is scoped to the if block
  }

  return [task, task2];  // The original task and task2 values are returned
}
