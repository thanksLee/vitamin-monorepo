type FileModule = Record<string, string>;
type FileParams = Record<string, FileModule>;

/** 중국어 번역 파일 가져오기 */
export const getKrLang = () => {
  const langFiles = import.meta.glob('../i18n/locales/kr/*.ts', { import: 'default', eager: true }) as FileParams;
  const result = handleFileList(langFiles);
  return result;
};

/** 영어

/** 중국어 번역 파일 가져오기 */
export const getZhLang = () => {
  const langFiles = import.meta.glob('../i18n/locales/zh/*.ts', { import: 'default', eager: true }) as FileParams;
  const result = handleFileList(langFiles);
  return result;
};

/** 영어 번역 파일 가져오기 */
export const getEnLang = () => {
  const langFiles = import.meta.glob('../i18n/locales/en/*.ts', { import: 'default', eager: true }) as FileParams;
  const result = handleFileList(langFiles);
  return result;
};

/**
 * 파일을 해당 형식으로 처리
 * @param files - 파일 집합
 */
export const handleFileList = (files: FileParams) => {
  const result: Record<string, unknown> = {};

  for (const key in files) {
    const data = files[key];
    const fileArr = key?.split('/');
    const fileName = fileArr?.[fileArr?.length - 1] || '';
    if (!fileName) continue;
    const name = fileName?.split('.ts')?.[0];
    if (name) result[name] = data;
  }

  return result;
};
