class hour {
    private hour: number;
    private minute: number;
    private second: number;

    get hours() {
        return this.hour;
    }
    get minutes() {
        return this.minute;
    }
    get seconds() {
        return this.second;
    }

    public time(){
        return `${this.hours}:${this.minutes}:${this.seconds}`;
    }
}