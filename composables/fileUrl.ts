export const useFileUrl = (
  collection: string,
  record: string,
  file: string
) => {
  const config = useRuntimeConfig();
  const url = `${config.public.pocketUrl}api/files/${collection}/${record}/${file}`;
  return url;
};
