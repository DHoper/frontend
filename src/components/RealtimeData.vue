<template>
  <div class="realtime">
    <h2>即時監控</h2>
    <div>
      <p>溫度：{{ temperature }} ℃</p>
      <p>濕度：{{ humidity }} %</p>
    </div>
  </div>
  <div class="chart">
    <Line v-if="loaded" :data="data" />
  </div>
  
</template>


<script>
import { getRealtimeData } from '../api';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default {
  data() {
    return {
      temperature: 0,
      humidity: 0,
      tempArray: [],
      humidArray: [],
      timer: 0,
      loaded: false,
      data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        datasets: [
          {
            label: '溫度', backgroundColor: 'red',
            data: this.tempArray
          },
          {
            label: '濕度', backgroundColor: 'skyblue',
            data: this.humidArray
          }]
      },
      options: { responsive: false, maintainAspectRatio: false }
    }
  },
  // computed: {
  //   data() {
  //     return this.mData
  //   }
  // },
  mounted() {
    setInterval(async () => {
      let realData = await getRealtimeData();
      realData = realData.HTValue[0];
      this.temperature = realData.temp;
      this.humidity = realData.humid;
      console.log(this.tempArray);
      this.loaded = false;
      this.tempArray.push({x: this.timer, y: this.temperature});
      this.humidArray.push({x: this.timer, y: this.humidity});
      this.data.datasets[0].data = this.tempArray;
      this.data.datasets[1].data = this.humidArray;
      this.loaded = true;
      this.timer++;
    }, 1000);
  }, name: 'app',
  components: { Line },
}

</script> 

<style lang="scss">
.realtime {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  margin: 5% auto;
  width: 30rem;
  box-shadow: 10px 8px 2px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      font-size: 20px;
      font-weight: bold;
      color: #666;
    }

    &:first-child {
      margin-bottom: 10px;
    }

    &:last-child {
      margin-top: 10px;
    }
  }
}

.chart {
  width: 60vw;
  height: 70vh;
  margin: auto;
}
</style>