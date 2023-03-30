class Task {
  constructor(name, status) {
    this.name = name;
    this.status = status;
    this.id = Date.now();
  }
}
export default Task;