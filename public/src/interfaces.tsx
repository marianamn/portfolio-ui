export interface ProjectContainerStyles {
  readonly width: string;
  readonly height: string;
  readonly color: string;
  readonly background: string;
  readonly marginTop: string;
}

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

export interface Biography {
  readonly image: string;
  readonly whoAmI: string;
  readonly whatAreMyProfessionalPassions: string;
  readonly professionalInterests: ReadonlyArray<string>;
  readonly achievements: ReadonlyArray<string>;
}
