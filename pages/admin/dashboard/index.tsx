import { useState } from 'react';
import dashboardMap from "@/assets/dashboardMap.png";
import Image from 'next/image';
import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

// Menghindari SSR untuk import e
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
// Dummy data chart
const chartData: { series: ApexAxisChartSeries; options: ApexOptions } = {
  series: [
    {
      name: 'UMKM Terdaftar',
      data: [120, 180, 150, 200, 220, 300],
    },
    {
      name: 'UMKM Aktif',
      data: [80, 120, 150, 180, 230, 280],
    },
    {
      name: 'UMKM Baru',
      data: [40, 60, 80, 100, 120, 140],
    },
  ],
  options: {
    chart: {
      type: 'line',
      height: 350,
      toolbar: { show: false },
    },
    title: {
      text: 'Pertumbuhan UMKM',
      align: 'center',
    },
    stroke: {
      width: [4, 4, 4],
      curve: 'smooth',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: [
      {
        title: { text: 'Jumlah UMKM' },
        min: 0,
      },
      {
        opposite: true,
        title: { text: 'Skala 2' },
        min: 0,
      },
    ],
    legend: { show: true },
  },
};

const DashboardPage = () => {
  return (
    <div className="px-6 py-8 mx-auto text-black max-w-7xl">
      {/* Upper Text */}
      <h1 className="mb-4 text-2xl font-extra bold ">Dashboard</h1>
      <p className='text-gray-500 mb-15 text-m'> Selamat datang kembali! Berikut perkeembangan geomap hari ini.</p>
      {/* Data UMKM */}
      <div className="grid grid-flow-col grid-rows-3 gap-4">
      {/* Penambahan UMKM Baru */}
      <div className="bg-[var(--yellow-umkm)] text-white rounded-xl p-6 mb-8 col-span-2">
        <h3 className="text-xl font-semibold">Penambahan UMKM baru kota Sumenep</h3>
        <p className="self-end mt-2 text-sm">5 Menit yang lalu</p>
      </div>
        {/* UMKM Terdaftar */}
        <div className="grid col-span-2 row-span-2 gap-6 sm:grid-cols-2">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h4 className="text-xl font-semibold">UMKM Terdaftar</h4>
          <p className="mt-2 text-4xl font-bold">280</p>
          <div className="flex items-center gap-3 md:mt-40">
            <FaRegArrowAltCircleUp className="text-[var(--yellow-umkm)]" />
            <p className="text-sm text-gray-500">+5 bulan ini</p>
          </div>
        </div>

        {/* UMKM Per Kabupaten */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h4 className="text-xl font-semibold">UMKM Per Kabupaten</h4>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between text-lg font-medium">
              <span>Sumenep</span>
              <span className="text-3xl font-bold">230</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Pamekasan</span>
              <span className="text-3xl font-bold">50</span>
            </li>
          </ul>
          <div className="flex items-center gap-3 md:mt-25">
            <FaRegArrowAltCircleUp className="text-[var(--yellow-umkm)]" />
            <p className="text-sm text-gray-500">+5 bulan ini</p>
          </div>
        </div>
        </div>

        {/* UMKM Per Kecamatan */}
        <div className="bg-white rounded-xl p-6 shadow-md h-[465px] overflow-y-auto border-b border-gray-300 row-span-3 col-span-2">
          <h4 className="text-xl font-semibold">UMKM Per Kecamatan</h4>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between text-lg font-medium">
              <span>Galis</span>
              <span>5</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Kadur</span>
              <span>10</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Larangan</span>
              <span>50</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Pademawu</span>
              <span>50</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Pakong</span>
              <span>50</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Sampang</span>
              <span>10</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Pamekasan</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Ambunten</span>
              <span>15</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Bluto</span>
              <span>25</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>Batang-Batang</span>
              <span>30</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>30</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
            <li className="flex justify-between text-lg font-medium">
              <span>XXXXX</span>
              <span>20</span>
            </li>
          </ul>
        </div>
      </div>

        <div className="px-6 py-8 mx-auto text-black max-w-7xl">
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
                {/* Map */}
                <div className="p-6 mb-8 bg-white shadow-md rounded-xl">
                <h4 className="mb-4 text-xl font-semibold">Peta UMKM</h4>
                <div className="mt-4 relative w-full h-[300px]">
                    <Image
                    src={dashboardMap}
                    alt="Map"
                    layout="fill"
                    objectFit="cover"
                    />
                </div>
                </div>

                {/* Chart */}
                <div className="p-6 mb-8 bg-white shadow-md rounded-xl">
                <h4 className="mb-4 text-xl font-semibold">Pertumbuhan UMKM</h4>
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="line"
                    height={350}
                />
                </div>
            </div>
        </div>
    </div>
  );
};

export default DashboardPage;
