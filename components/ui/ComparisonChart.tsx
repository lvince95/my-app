'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Comparison',
    },
  },
};

const labels = [
  'Angular',
  '.NET',
  'Python',
  'Docker',
  'Cloud',
  'Testing',
  'Communication',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Jason',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 5 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Emily',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 5 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'John',
      data: labels.map(() => faker.datatype.number({ min: 1, max: 5 })),
      borderColor: '#3DC250',
      backgroundColor: '#09F688',
    },
  ],
};

export function ComparisonChart() {
  return <Bar options={options} data={data} />;
}
