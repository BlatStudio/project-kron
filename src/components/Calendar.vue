<template>
  <div class="calendar">
      <h2 v-text="today.format('MMMM YYYY')"></h2>
      <table>
          <thead>
              <tr>
                  <th v-for="i in 7" :key="i" v-text="day(i-1).format('ddd')"></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="w in 6" :key="w">
                  <td v-for="d in 7" :key="d" v-text="day(d-1, w-1).format('D')"></td>
              </tr>
          </tbody>
      </table>
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
        console.log(this.today.calendar());
        console.log(this.startDate.calendar());
    }
}
</script>