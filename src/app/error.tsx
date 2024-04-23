"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log("error", error);
  return (
    <>
      <h2>Something went wrong: {error.message}</h2>
      {/* TODO <button onClick={() => reset()}>Try again</button> */}
    </>
  );
}
