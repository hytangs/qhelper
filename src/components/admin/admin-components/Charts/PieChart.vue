<template>
  <canvas ref="root" />
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import {
  Chart,
  PointElement,
  DoughnutController,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ArcElement,
  Title
} from "chart.js";

export default {
  name: "LineChart",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const root = ref(null);

    let chart;

    Chart.register(
      PointElement,
      DoughnutController,
      LinearScale,
      CategoryScale,
      Tooltip,
      Legend,
      ArcElement,
      Title
    );

    onMounted((text) => {
      chart = new Chart(root.value, {
        type: "doughnut",
        data: props.data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
              position: "bottom"
            },
            tooltips:{
              enabled: true,
            },
            title: {
                display: true,
                text: text
            }
          },
        },
      });
    });

    const chartData = computed(() => props.data);

    watch(chartData, (data) => {
      if (chart) {
        chart.data = data;
        chart.update();
      }
    });

    return {
      root,
    };
  },
};
</script>

<style scoped>
.chart-legend li span{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
}
</style>
