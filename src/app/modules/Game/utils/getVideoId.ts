export const getVideoId = (url: string): string | null => {
  const match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};
