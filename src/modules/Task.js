export default class Task {
    constructor(title, description, date, time) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
    }

    isExpired() {
        let taskDate = new Date(this.date);
        let taskTime = new Date(this.time);
        let now = new Date();
        return taskDate < now || taskTime < now;
    }
}