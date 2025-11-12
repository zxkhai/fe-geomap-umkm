import Image from 'next/image';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';
import dashboardMap from "@/assets/dashboardMap.png";
import { HiArrowCircleUp } from 'react-icons/hi';
import Protected from '@/components/auth/Protected';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const UMKM_STATS = {
  total: 280,
  monthly_increase: 5,
  sumenep: 230,
  pamekasan: 50,
};

const KECAMATAN_DATA = [
  { name: 'Galis', count: 5 },
  { name: 'Kadur', count: 10 },
  { name: 'Larangan', count: 50 },
  { name: 'Pademawu', count: 50 },
  { name: 'Pakong', count: 50 },
  { name: 'Sampang', count: 10 },
  { name: 'Pamekasan', count: 20 },
  { name: 'Ambunten', count: 15 },
  { name: 'Bluto', count: 25 },
  { name: 'Batang-Batang', count: 30 },
];

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
    <Protected>
    <div className="max-w-full mx-auto text-black">
      {/* Header */}
      <header className="mb-5">
        <h1 className="text-xl font-semibold mb-2">Dashboard</h1>
        <p className="text-gray-500">
          Selamat datang kembali! Berikut perkembangan geomap hari ini.
        </p>
      </header>

      {/* Main Content - Using Flexbox */}
      <div className="flex gap-4 mb-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Alert Card */}
          <div className="bg-[var(--yellow-umkm)] text-white rounded-xl p-6">
            <h3 className="text-xl font-semibold">Penambahan UMKM baru kota Sumenep</h3>
            <p className="mt-2 text-sm">5 Menit yang lalu</p>
          </div>

          {/* Stats Cards Row */}
          <div className="flex gap-4">
            {/* UMKM Terdaftar */}
            <div className="flex-1 p-6 bg-white shadow-md rounded-xl items-center">
              <h4 className="text-xl font-semibold">UMKM Terdaftar</h4>
              <p className="mt-2 text-4xl font-bold">{UMKM_STATS.total}</p>
              <div className="flex items-center gap-3 mt-20">
                <HiArrowCircleUp className="text-[var(--yellow-umkm)]" />
                <p className="text-sm text-gray-500">+{UMKM_STATS.monthly_increase} bulan ini</p>
              </div>
            </div>

            {/* UMKM Per Kabupaten */}
            <div className="flex-1 p-6 bg-white shadow-md rounded-xl">
              <h4 className="text-xl font-semibold">UMKM Perkabupaten</h4>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Pamekasan</span>
                  <span className="text-3xl font-bold">{UMKM_STATS.pamekasan}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Sumenep</span>
                  <span className="text-3xl font-bold">{UMKM_STATS.sumenep}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-14">
                <HiArrowCircleUp className="text-[var(--yellow-umkm)]" />
                <p className="text-sm text-gray-500">+{UMKM_STATS.monthly_increase} bulan ini</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - UMKM Per Kecamatan (Table) */}
        <div className="w-96 bg-white rounded-xl p-6 shadow-md ">
          <h4 className="text-xl font-semibold mb-4">UMKM Per Kecamatan</h4>
          <div className="h-64 overflow-y-auto">
            <table className="w-full">
              <tbody>
                {KECAMATAN_DATA.map((kecamatan, index) => (
                  <tr key={index} className="border-b border-gray-200 last:border-b-0">
                    <td className="py-3 text-sm">{kecamatan.name}</td>
                    <td className="py-3 text-sm text-right font-semibold">{kecamatan.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Map & Chart Section - Using Flexbox */}
      <div className="flex gap-4">
        {/* Map */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-xl">
          <h4 className="mb-4 text-xl font-semibold">Peta UMKM</h4>
          <div className="relative w-full h-[300px]">
            <Image
              src={dashboardMap}
              alt="Map UMKM"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 p-6 bg-white shadow-md rounded-xl">
          <h4 className="mb-4 text-xl font-semibold">Pertumbuhan UMKM</h4>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={300}
          />
        </div>
      </div>
    </div>
    </Protected>
  );
};

export default DashboardPage;
