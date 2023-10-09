declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      RAJAONGKIR_BASE_URL: string;
      RAJAONGKIR_API_KEY: string;
      // add more environment variables and their types here
    }
  }
}
