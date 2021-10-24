<template>
  <canvas ref="root" />
</template>

<script>
import { ref, watch, computed, onMounted } from "vue";
import {
  Chart,
  BarElement,
  PointElement,
  BarController,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

export default {
  name: "BarChart",
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
      BarElement,
      PointElement,
      BarController,
      LinearScale,
      CategoryScale,
      Tooltip,
      Legend
    );

    onMounted(() => {
      chart = new Chart(root.value, {
        type: "bar",
        data: props.data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              display: true,
            },
            x: {
              display: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltips:{
              enabled: true,
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
