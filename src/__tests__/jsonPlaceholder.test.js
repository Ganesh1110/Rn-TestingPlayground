// Import the functions to be tested
import { getComments, getPosts, getUsers } from "../services/jsonPlaceholder";

// Use Jest's mocking system to mock the global fetch function
// This replaces the real fetch with a mock we can control in our tests
global.fetch = jest.fn();

// Before all tests run, mock console.error to prevent actual error logs
// This keeps our test output clean
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

// After all tests complete, restore the original console.error
afterAll(() => {
  console.error.mockRestore();
});

// Test suite for getUsers API service
describe("getUsers API Service", () => {
  beforeEach(() => {
    fetch.mockReset(); // Clear mock between each test
  });
  // Before each test, clear any previous mock calls/results
  // This ensures tests don't affect each other
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return user data on successful fetch", async () => {
    // Arrange (Setup): Create fake data we expect to receive
    const mockUserData = [{ id: 1, name: "John Doe" }];

    // Mock fetch to resolve with a successful response
    // ok: true simulates HTTP 200-299 status code
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData, // The response.json() method
    });

    // Act: Call the actual function we're testing
    const result = await getUsers();

    // Assert: Verify the results
    expect(result).toEqual(mockUserData); // Data matches
    expect(fetch).toHaveBeenCalledTimes(1); // Fetch called once
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users" // Correct endpoint
    );
  });

  it("should throw an error if response is not ok", async () => {
    // Arrange: Simulate a server error (500)
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500, // HTTP status code
    });

    // Act & Assert: Verify the function throws the expected error
    await expect(getUsers()).rejects.toThrow("API error: 500");
  });

  it("should throw an error on network failure", async () => {
    // Arrange: Simulate a network failure (e.g., no internet)
    fetch.mockRejectedValueOnce(new Error("Network failure"));

    // Act & Assert: Verify the error is propagated
    await expect(getUsers()).rejects.toThrow("Network failure");
  });
});

// Test suite for getPosts API service
describe("getPosts API Service", () => {
  beforeEach(() => {
    fetch.mockReset(); // Clear mock between each test
  });
  // Reset fetch mock before each test
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return user data on successful fetch", async () => {
    // Arrange: Fake post data
    const mockUserData = [{ userId: 1, id: 1, title: "Test Title" }];

    // Mock successful response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData,
    });

    // Act
    const result = await getPosts();

    // Assert
    expect(result).toEqual(mockUserData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts" // Different endpoint
    );
  });

  it("should throw an error if response is not ok", async () => {
    // Arrange: Simulate server error
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    // Act & Assert
    await expect(getPosts()).rejects.toThrow("API error: 500");
  });

  it("should throw an error on network failure", async () => {
    // Arrange: Simulate network error
    fetch.mockRejectedValueOnce(new Error("Network failure"));

    // Act & Assert
    await expect(getPosts()).rejects.toThrow("Network failure");
  });
});

// Test suite for getComments API service
describe("getComments API Service", () => {
  beforeEach(() => {
    fetch.mockReset(); // Clear mock between each test
  });
  // Reset fetch mock before each test
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should return user data on successful fetch", async () => {
    // Arrange: Fake post data
    const mockUserData = [{ postId: 1, id: 1, name: "Test Title" }];

    // Mock successful response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUserData,
    });

    // Act
    const result = await getComments();

    // Assert
    expect(result).toEqual(mockUserData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/comments" // Different endpoint
    );
  });

  it("should throw an error if response is not ok", async () => {
    // Arrange: Simulate server error
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    // Act & Assert
    await expect(getComments()).rejects.toThrow("API error: 500");
  });

  it("should throw an error on network failure", async () => {
    // Arrange: Simulate network error
    fetch.mockRejectedValueOnce(new Error("Network failure"));

    // Act & Assert
    await expect(getComments()).rejects.toThrow("Network failure");
  });
});
