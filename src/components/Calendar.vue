<template>
  <div class="calendar">
    <h2 class="title" v-text="today.format('MMMM YYYY')"></h2>

    <div class="days">
        <div v-for="i in 7" :key="i" v-text="day(i-1).format('ddd')" class="weekDay"></div>
        <template v-for="w in 6">
            <div v-for="d in 7" :key="w*7+d">
                <div class="monthDay" v-text="day(d-1, w-1).format('D')"></div>
                <div class="event"
                    v-for="event in dayEvents(day(d-1, w-1))"
                    :key="event.id">
                    <span v-text="event.title"></span>
                    <span v-text="event.date.format('HH:mm')"></span>
                </div>
            </div>
        </template>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'Calendar',
    props: {
        today: {default: () => moment(Date.now())},
        events: {default: () => [] },
    },
    methods: {
        moment(args) {
            return moment(args);
        },
        day(days, weeks = 0) {
            return moment(this.startDate).add(days, 'days').add(weeks, 'weeks');
        },
        dayEvents(day) {
            return this.events.filter( (event) => event.date.dayOfYear() === day.dayOfYear() );
        },
    },
    computed: {
        currentMonth() {
            return this.today.month();
        },
        endDate() {
            return moment(this.today).endOf('month').endOf('isoWeek').startOf('day');
        },
        nDays() {
            let time = moment.duration(moment(this.endDate).diff(this.startDate));
            return Math.round(time.as('days')) + 1;
        },
        startDate() {
            return moment(this.today).startOf('month').startOf('isoWeek').startOf('day');
        },
    },
    mounted() {
    }
}
</script>