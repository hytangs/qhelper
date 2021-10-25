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

  export const sampleBarChartData2 = () => {
    const labels = ['Single','Queen','King','Apartment']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Occupancy','rgb(187, 224, 99)', true, 'rgba(187, 224, 99, 0.2)',
        [0.92,0.88,0.78,0.64]),
      ]
    }
  }

  export const sampleBarChartData3 = () => {
    const labels = ['Single','Queen','King','Apartment']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Revenue Per Room','rgb(247, 179, 89)', true, 'rgba(247, 179, 89, 0.2)',
        [240,360,480,920]),
      ]
    }
  }

  export const samplePieChartData = () => {
    const labels = ['Call','Email','OTA','Social Media','Website','Others']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Bookings', "white", true, [
            'rgb(255, 99, 132)',
            'rgb(247, 179, 89)',
            'rgb(187, 224, 99)',
            'rgb(89, 150, 247)',
            'rgb(198, 155, 250)',
            'rgb(226, 220, 232)'
          ],
        [28,24,11,7,32,2]),
      ]
    }
  }

  export const samplePieChartData2 = () => {
    const labels = ['Call','Email','OTA','Social Media','Website','Others']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Bookings', "white", true, [
            'rgb(255, 99, 132)',
            'rgb(247, 179, 89)',
            'rgb(187, 224, 99)',
            'rgb(89, 150, 247)',
            'rgb(198, 155, 250)',
            'rgb(226, 220, 232)'
          ],
        [18,32,1,14,48,2]),
      ]
    }
  }

  export const samplePieChartData3 = () => {
    const labels = ['Entrance', 'Exit', 'Staff Lounge', 'Staff Pantry']
    // for (let i = 1; i <= points; i++) {
    //   labels.push(`0${i}`)
    // }
  
    return {
      labels,
      datasets: [
        datasetObject('Bookings', "white", true, [
            'rgb(255, 99, 132)',
            'rgb(247, 179, 89)',
            'rgb(187, 224, 99)',
            'rgb(89, 150, 247)',
        ],
        [12,7,2,9]),
      ]
    }
  }
  