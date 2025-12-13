import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import { FaStore, FaMapMarkerAlt, FaChartLine, FaClock } from 'react-icons/fa';
import Protected from '@/components/auth/Protected';
import { culinaryService } from '@/lib/culinary/culinary.service';
import { Culinary } from '@/lib/culinary/culinary.type';

// Register ChartJS components
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MapRBI = dynamic(() => import('@/components/maps/MapRBI'), { ssr: false });

interface Stats {
  total: number;
  pamekasan: number;
  sumenep: number;
  byAddress: { [key: string]: number };
  recentlyAdded: Culinary[];
  byClassification: { [key: string]: number };
}

const DashboardPage = () => {
  const [culinaryData, setCulinaryData] = useState<Culinary[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    total: 0,
    pamekasan: 0,
    sumenep: 0,
    byAddress: {},
    recentlyAdded: [],
    byClassification: {}
  });

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const result = await culinaryService.getAll();
      if (result.success && result.data) {
        const data = result.data;
        setCulinaryData(data);

        // Calculate statistics
        const pamekasanCount = data.filter(c => c.regency === 'Pamekasan').length;
        const sumenepCount = data.filter(c => c.regency === 'Sumenep').length;

        // Count by address/kecamatan (simplified - you can enhance this)
        const addressCount: { [key: string]: number } = {};
        data.forEach(c => {
          const area = c.address.split(',')[0].trim();
          addressCount[area] = (addressCount[area] || 0) + 1;
        });

        // Get top 10 areas
        const topAreas = Object.entries(addressCount)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 10)
          .reduce((obj, [key, val]) => ({ ...obj, [key]: val }), {});

        // Count by classification
        const classificationCount: { [key: string]: number } = {};
        data.forEach(c => {
          if (c.classification) {
            classificationCount[c.classification] = (classificationCount[c.classification] || 0) + 1;
          }
        });

        // Get recently added (last 5)
        const recent = [...data]
          .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
          .slice(0, 5);

        setStats({
          total: data.length,
          pamekasan: pamekasanCount,
          sumenep: sumenepCount,
          byAddress: topAreas,
          recentlyAdded: recent,
          byClassification: classificationCount
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chart data for Doughnut (Regency Distribution)
  const doughnutData = {
    labels: ['Pamekasan', 'Sumenep'],
    datasets: [
      {
        label: 'UMKM per Kabupaten',
        data: [stats.pamekasan, stats.sumenep],
        backgroundColor: ['#22c55e', '#2fdb04'],
        borderColor: ['#16a34a', '#22c55e'],
        borderWidth: 2,
      },
    ],
  };

  // Chart data for Bar (Top Locations)
  const barData = {
    labels: Object.keys(stats.byAddress),
    datasets: [
      {
        label: 'Jumlah UMKM',
        data: Object.values(stats.byAddress),
        backgroundColor: '#ffa319',
        borderColor: '#ff8800',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  if (loading) {
    return (
      <Protected>
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl">Loading Dashboard...</div>
        </div>
      </Protected>
    );
  }

  return (
    <Protected>
      <Head>
        <title>Dashboard - Admin GeoKuliner</title>
      </Head>
      <div className="max-w-full mx-auto text-black">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Selamat datang kembali! Berikut perkembangan GeoKuliner hari ini.
          </p>
        </header>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Total UMKM */}
          <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total UMKM</p>
                <h3 className="text-4xl font-bold mt-2">{stats.total}</h3>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaStore className="text-3xl" />
              </div>
            </div>
          </div>

          {/* Pamekasan */}
          <div className="bg-linear-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pamekasan</p>
                <h3 className="text-4xl font-bold mt-2">{stats.pamekasan}</h3>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
            </div>
          </div>

          {/* Sumenep */}
          <div className="bg-linear-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Sumenep</p>
                <h3 className="text-4xl font-bold mt-2">{stats.sumenep}</h3>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Kategori</p>
                <h3 className="text-4xl font-bold mt-2">{Object.keys(stats.byClassification).length}</h3>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaChartLine className="text-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Activity */}
          <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <FaClock className="text-orange-500 text-xl" />
              <h4 className="text-xl font-semibold">Aktivitas Terbaru</h4>
            </div>
            <div className="space-y-3">
              {stats.recentlyAdded.map((culinary, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{culinary.name}</p>
                    <p className="text-xs text-gray-500">{culinary.regency}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {culinary.createdAt ? new Date(culinary.createdAt).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      }) : 'Baru ditambahkan'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Distribution Chart */}
          <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Distribusi per Kabupaten</h4>
            <div className="h-64">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
          </div>

          {/* Top Locations Table */}
          <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Top 10 Lokasi</h4>
            <div className="h-64 overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-white border-b-2 border-gray-200">
                  <tr>
                    <th className="text-left py-2 text-sm font-semibold text-gray-600">Lokasi</th>
                    <th className="text-right py-2 text-sm font-semibold text-gray-600">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(stats.byAddress).map(([location, count], index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 text-sm">{location}</td>
                      <td className="py-3 text-sm text-right font-semibold text-orange-600">{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Map & Chart Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="mb-4 text-xl font-semibold">Peta Sebaran UMKM</h4>
            <div className="relative w-full h-100 rounded-lg overflow-hidden">
              <MapRBI culinaryData={culinaryData} filter="Semua" />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h4 className="mb-4 text-xl font-semibold">UMKM per Area</h4>
            <div className="h-100">
              <Bar data={barData} options={barOptions} />
            </div>
          </div>
        </div>
      </div>
    </Protected>
  );
};

export default DashboardPage;
