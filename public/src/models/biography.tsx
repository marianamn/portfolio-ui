export interface Biography {
  readonly image: string;
  readonly whoAmI: string;
  readonly whatAreMyProfessionalPassions: string;
  readonly professionalInterests: ReadonlyArray<string>;
  readonly achievements: ReadonlyArray<string>;
}
