<template>
  <div class="calendar">
    <h2 v-text="today.format('MMMM YYYY')"></h2>

    <div class="days">
        <div v-for="i in 7" :key="i" v-text="day(i-1).format('ddd')" class="weekDay"></div>
        <template v-for="w in 6">
            <div v-for="d in 7" :key="w*7+d" v-text="day(d-1, w-1).format('D')" class="monthDay"></div>
        </template>
    </div>

  </div>
</template>

<script>

import moment from 'moment'

export default {
    name: 'Calendar',
    props: {
        today: {default: () => moment(Date.now()) },
    },
    methods: {
        moment(args) {
            return moment(args);
        },
        day(days, weeks = 0) {
            return moment(this.startDate).add(days, 'days').add(weeks, 'weeks');
        }
    },
    computed: {
        currentMonth() {
            return this.today.month();
        },
        startDate() {
            return moment(this.today).startOf('month').startOf('isoWeek');
        },
    },
    mounted() {
    }
}
</script>