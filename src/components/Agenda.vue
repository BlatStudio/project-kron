<template>
  <div class="agenda panel">
    <h2 class="title agenda_title panel_title panel_content">Agenda</h2>

    <ul class="agenda_list agenda_list-full panel_content">
        <template v-for="i in 7">
            <li class="agenda_dayListing" v-if="dayEvents(day(i-1)).length" :key="i">
                <time v-text="day(i-1).format('D MMMM')" class="agenda_day"></time>
                <ul class="agenda_list agenda_list-day">
                    <li class="eventRow agenda_event"
                        v-for="event in dayEvents(day(i-1))"
                        :key="event.id">
                        <time class="eventRow_time" v-text="event.date.format('HH:mm')"></time>
                        <span class="eventRow_account">Account</span>
                        <span class="eventRow_title" v-text="event.title"></span>
                    </li>
                </ul>
            </li>
        </template>
    </ul>
  </div>
</template>

<script>

import moment from 'moment'

export default {
    name: 'Agenda',
    props: {
        today: {default: () => moment(Date.now())},
        start: {default: () => moment()},
        events: {default: () => [] },
    },
    methods: {
        moment(args) {
            return moment(args);
        },
        day(days, weeks = 0) {
            return moment(this.start).add(days, 'days').add(weeks, 'weeks');
        },
        dayEvents(day) {
            return this.events.filter( (event) => event.date.dayOfYear() === day.dayOfYear() );
        },
    },
    computed: {
        currentMonth() {
            return this.today.month();
        },
    },
    mounted() {
    }
}
</script>