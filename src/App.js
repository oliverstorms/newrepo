import "./App.css";
import React from "react";
import Splitblock from "./components/splitblock.js";
import Header from "./components/header.js";
import Recipeblock from "./components/recipeblock.js";

import { useState, useEffect } from "react";


const query = `
{
  testCollection {
    items {
      image {
        url
      }
      title
    }
  }  
}`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/sqz3pe253ayq/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer E81F0GuUWmnRVFpcK9q2bj-IDHqu8z2sBK06bgo7zls",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.testCollection);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div>
      <Header />

      <div className="innerContainer">
        <Splitblock
          color="yellow"
          title="Kunne du tænke dig 8-retters gourmet til din nytårsaften?"
          description="Det nye år står for døren, og vi kan hjælpe dig med at nyde festen og gæsterne uden stress og jag i køkkenet. For andet år i træk samarbejder emmerys om en "
          imagesrc={page.items[0].image.url}
        />
        <h2>Opskrifter</h2> 
        <Recipeblock />

      </div>
    </div>
  );
}

export default App;
