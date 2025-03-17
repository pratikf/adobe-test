export const getRomanNumeral = async (query) => {
  // Start time
  const startTime = Date.now();
  try {
    // Call API
    // Port is 8080 by default -- can be extracted to use an environment variable
    const response = await fetch(
      `http://localhost:8080/romannumeral?query=${query}`
    );

    // Throw if response is not ok (http 200)
    if (!response.ok) {
      throw new Error(await response.text());
    }

    // Get response in JSON / Object
    const data = await response.json();

    const endTime = Date.now();
    // Log time taken
    console.info(
      `API call to /romannumeral?query=${query} took ${endTime - startTime}ms`
    );

    return data;
  } catch (error) {
    const endTime = Date.now();
    // Log error and time taken
    console.error(
      `API call to /romannumeral?query=${query} failed after ${
        endTime - startTime
      }ms with error: ${error}`
    );

    // Throw error again for caller
    throw new Error(`Failed to fetch Roman numeral: ${error.message}`);
  }
};
