import styles from "./page.module.css";
import { ICocktail } from "./types";

async function getData() {
  const res = await fetch("http://localhost:3300/cocktail/all");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data: ICocktail[] = await getData();
  return (
    <main className={styles.main}>
      <h1>MY AWSOME COCKTAIL APP</h1>
      {data.map((cocktail, i) => (
        <div key={i} className={styles.description}>
          {cocktail.name}
          <p>{cocktail.description}</p>
        </div>
      ))}
    </main>
  );
}
