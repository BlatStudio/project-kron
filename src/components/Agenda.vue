<template>
  <div class="agenda">
    <h2 class="title" v-text="today.format('MMMM YYYY')"></h2>

    <dl v-for="i in 7" :key="i">
        <dt class="agenda_date" v-if="dayEvents(day(i-1)).length">
            <time v-text="day(i-1).format('D MMMM')"></time>
        </dt>
                        
        <dd class="agenda_event"
            v-for="event in dayEvents(day(i-1))"
            :key="event.id">
            <time class="agenda_event_time" v-text="event.date.format('HH:mm')"></time>
            <span class="agenda_event_title" v-text="event.title"></span>
        </dd>
    </dl>
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