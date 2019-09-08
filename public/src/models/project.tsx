export interface ProjectData {
  readonly id: string;
  readonly name: string;
  readonly technologies: string;
  readonly description: string;
  readonly tags: ReadonlyArray<string>;
  readonly images: ReadonlyArray<string>;
  readonly period: string;
  readonly url?: string;
  readonly repositoryUrl?: ReadonlyArray<string>;
}
