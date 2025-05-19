import { useState, useEffect } from "react";
function App() {
  const [pageDetails, setPageDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageDetails = async () => {
      try {
        const response = await fetch("http://localhost:1569/page-details");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
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
