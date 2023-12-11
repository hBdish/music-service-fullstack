export type BuildMode = 'production' | 'development';
export interface BuildPaths {
  dist: string,
  entry: string;
  public: string,
  static: string,
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
