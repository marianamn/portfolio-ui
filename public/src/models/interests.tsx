export interface Interests {
  readonly quote: Quote;
  readonly hobbies: ReadonlyArray<Hobby>;
}

export interface Quote {
  readonly text: string;
  readonly author: string;
}

export interface Hobby {
  readonly name: string;
  readonly image: string;
}
