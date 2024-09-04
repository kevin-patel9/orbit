export const getData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
      });
  
      return response.json();
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };