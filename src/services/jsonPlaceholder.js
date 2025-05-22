const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error (in real apps, you'd handle this differently)
    console.error("getUsers error:", error.message);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error (in real apps, you'd handle this differently)
    console.error("getPosts error:", error.message);
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await fetch(`${BASE_URL}/comments`);

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Log the error (in real apps, you'd handle this differently)
    console.error("getComments error:", error.message);
    throw error;
  }
};
