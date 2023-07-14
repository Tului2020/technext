import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

interface Props {
  className?: string;
  labels: string[];
  data: number[];
}

const SuperImposedChart = (props: Props) => {
  const { className, labels, data } = props;

  const series: ApexOptions['series'] = [
    {
      name: 'Bar',
      type: 'column',
      data,
    }, {
      name: 'Line',
      type: 'line',
      data,
    }
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'TechNext'
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels,
    yaxis: [
      {
        title: {
          text: 'Entries',
        },

      }
    ],
    xaxis: {
      title: {
        text: 'Phase'
      }
    }
  };

  return (
    <div className={className}>
      <Chart
        options={options}
        series={series}
        type='bar'
        width='800'
      />
    </div>
  );
};

export default SuperImposedChart;
