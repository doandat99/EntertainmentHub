export const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const id = selectedGenres.map((item) => item.id);
  return id.reduce((acc, arr) => acc + "," + arr);
};
