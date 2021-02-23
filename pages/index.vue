<template>
  <div>

<AppHeader />
    <Cart />
    <MyCalendar />
    <Calendar />
    <SwimmingLessons
      v-for="ResponseInfo in scheduleResponsesInfo"
      :key="ResponseInfo.id"
      :lessonSection="ResponseInfo"
    />
  </div>
</template>

<script>
import { scheduleResponses } from "@/assets/schedule_response.js";

export default {
  data: () => {
    return {
      scheduleResponsesInfo: scheduleResponses,
      scheduleResponsesInfoTimes: scheduleResponses.times,
    };
  },

};
</script>
<style scoped>
.img {
  margin: 0 auto;
}
</style>
