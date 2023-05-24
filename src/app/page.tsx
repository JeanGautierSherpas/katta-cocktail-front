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
      <h1 className={styles.title}>MY AWSOME COCKTAIL APP</h1>
      <div className={styles.cocktail}>
        {data.map((cocktail, i) => (
          <div key={i} className={styles.description}>
            <span>{cocktail.name}</span>
            <p>{cocktail.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
