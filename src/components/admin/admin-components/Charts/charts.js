export const chartColors = {
    default: {
      meal: '#00D1B2',
      retail: '#209CEE',
      housing: '#FF3860'
    }
  }
  
  const randomChartData = n => {
    const data = []
  
    for (let i = 0; i < n; i++) {
      data.push(Math.round(Math.random() * 200))
    }
  
    return data
  }
  
  const datasetObject = (labels, color, fill, bg, data) => {
    return {
      label: labels,
      fill: fill,
      backgroundColor: bg,
      borderColor: color,
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: color,
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: color,
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: data,
      tension: 0.5,
      cubicInterpolationMode: 'default'
    }
  }
  
  export const sampleLineChartData = (points = 7) => {
    const labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Meal','#00D1B2', false, "white", randomChartData(points)),
        datasetObject('Retail','#209CEE', false, "white", randomChartData(points)),
        datasetObject('Housing','#FF3860', false, "white", randomChartData(points))
      ]
    }
  }

  export const sampleBarChartData = () => {
    const labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Occupancy','#209CEE', true, 'rgba(54, 162, 235, 0.2)',
        [0.82,0.65,0.67,0.72,0.93,0.88,0.94]),
      ]
    }
  }
  