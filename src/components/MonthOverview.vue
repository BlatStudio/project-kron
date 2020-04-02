<template>
  <div class="calendar-month">
    <div class="calendar_days">
        <div v-for="i in 7" :key="i" v-text="day(i-1).format('dd')[0]" class="calendar_weekDay"></div>
        <div v-for="d in nDays" :key="`day_${d}`" class="calendar_monthDay" v-text="day(d-1).format('D')">
        </div>
    </div>

  </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'MonthOverview',
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