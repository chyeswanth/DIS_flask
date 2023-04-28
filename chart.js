const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['General Physician', 'Covid-19 consultation', 'Cardiology'
    , 'Dermatology', 'Gastroenterology', 'Neurology','Ophthalmology', 'Orthopedics', 'Pediatrics','Psychiatry','Radiology','Reproductive Health'],
    datasets: [{
      label: 'Appointments for Consultation with our doctors',
      data: [22500, 48000, 32500, 21000, 29500, 27500,20500,23000,33500,26000,31000,20500],
      borderWidth: 1,
      backgroundColor: [

        'rgba(191, 0, 25, 0.6)', 'rgba(219, 114, 0, 0.6)', 'rgba(239, 183, 0, 0.6)', 'rgba(0, 143, 106, 0.6)',
          'rgba(0, 100, 176, 0.6)', 'rgba(146, 3, 204, 0.6)', 'rgba(85, 98, 112, 0.6)', 'rgba(191, 0, 25, 0.6)',
          'rgba(219, 114, 0, 0.6)', 'rgba(239, 183, 0, 0.6)', 'rgba(0, 143, 106, 0.6)', 'rgba(0, 100, 176, 0.6)']
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});