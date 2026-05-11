"use client";

import { ReloadOutlined } from "@ant-design/icons";
import { Alert, Empty, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  image_url: string;
  published_at: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  message: string;
  data: NewsItem[];
  page: number;
  limit: number;
  total: number;
  total_page: number;
}

// Fungsi untuk fetch berita dengan pagination
const getBeritaWithPagination = async (
  page: number = 1,
  limit: number = 8,
): Promise<ApiResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/news?page=${page}&limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const LoadingSkeleton = () => (
  <div className="flex flex-col items-center justify-center md:px-4 min-h-screen">
    <div className="grid max-w-screen-xl w-full mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="max-w-[350px] h-[300px] rounded-xl animate-pulse"
        >
          <div className="aspect-video bg-gray-300 rounded-t-xl"></div>
          <div className="p-5 space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
      <Spin size="large" />
    </div>
  </div>
);

const ErrorMessage = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <div className="flex flex-col items-center py-8">
    <Alert
      message="Error"
      description={message}
      type="error"
      showIcon
      className="mb-4"
    />
    <button
      onClick={onRetry}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      <ReloadOutlined />
      Coba Lagi
    </button>
  </div>
);

const EmptyState = () => (
  <div className="col-span-full py-12">
    <Empty
      description="Belum ada berita tersedia"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  </div>
);

const NewsGrid = ({ news }: { news: NewsItem[] }) => {
  if (news.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={{
            title: item.title,
            slug: item.slug,
            content: item.content,
            author: item.author,
            status: item.status,
            imageUrl: item.image_url,
            CreatedAt: formatDate(item.created_at),
          }}
        />
      ))}
    </div>
  );
};

const NewsList: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  const pageSize = 8; // Jumlah berita per halaman

  const fetchNews = async (page: number = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getBeritaWithPagination(page, pageSize);
      setNews(response.data || []);
      setTotal(response.total);
      setCurrentPage(response.page);
    } catch (err) {
      setError("Gagal memuat berita");
      console.error("Error fetching news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(1);
  }, []);

  const handlePageChange = (page: number) => {
    fetchNews(page);
  };

  const handleRetry = () => {
    fetchNews(currentPage);
  };

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;

  return (
    <div className="flex flex-col items-center justify-center md:px-4">
      {/* Grid Berita */}
      <div className="mb-8 w-full  mt-2 flex items-center justify-center">
        <NewsGrid news={news} />
      </div>

      {/* Pagination */}
      {total > pageSize && (
        <Pagination
          current={currentPage}
          total={total}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
          // showQuickJumper
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} dari ${total} berita`
          }
          className="mt-4"
        />
      )}
    </div>
  );
};

export default NewsList;
