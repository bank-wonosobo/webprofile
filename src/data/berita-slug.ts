export const getBeritaBySlug = async (slug: string) => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/admin/news/${slug}/slug`;
    console.log("Fetching from URL:", apiUrl);

    const response = await fetch(apiUrl);

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (!response.ok) {
      // Try to get error details from response
      let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // If response is not JSON, use status text
      }
      throw new Error(`Failed to fetch data: ${errorMessage}`);
    }

    const data = await response.json();
    console.log("Fetched news data:", data);
    return data;
  } catch (error) {
    console.error("Error in getBeritaBySlug:", error);
    throw error;
  }
};

export default getBeritaBySlug;
