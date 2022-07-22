const useGenes = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";
  const id = selectedGenres.map((item) => item.id);
  return id.reduce((total, curr) => total + "," + curr);
};
export default useGenes;
