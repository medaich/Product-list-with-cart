export async function getProducts() {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/1d8cc2d1-d740-4320-b127-37f58e47a3a4",
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data; // Return the data if everything is successful
  } catch (err) {
    console.error("There was a problem fetching the products:", err);
    throw err; // Re-throw the error to be handled by the caller
  }
}
