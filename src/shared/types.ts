export enum SelectedPage {
    Home = "home" ,
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContectUs = "contectus",
  }

  export interface BenefitType {
    icon: JSX.Element;
    title:string;
    description:string
  }