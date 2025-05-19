import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL
function App() {
  const [pageDetails, setPageDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageDetails = async () => {
      try {
        console.log("Attempting to fetch from:", `${API_URL}/page-details`); 
        const response = await fetch(`${API_URL}/page-details`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        console.log("Response received:", response);
        const data = await response.json();
        if (Array.isArray(data)) {
          setPageDetails(data);
        } else {
          console.error("Data is not an array:", data);
          setPageDetails([]);
          setError(new Error("Data is not an array"));
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPageDetails();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!pageDetails) {
    return <p>No page data found</p>;
  }

  return (
    <>
      {pageDetails.map((details) => {
        return (
          <div key={details._id}>
            <h1>{details.title}</h1>
            <img height={200} src={details.image} alt={details.title} />
            <p>{details.description}</p>
            <em>Skills:</em>
            <ul>
              {details.keywords && details.keywords.length > 0
                ? details.keywords.map((keyword, kwIndex) => (
                    <li key={kwIndex}>{keyword}</li>
                  ))
                : null}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default App;
