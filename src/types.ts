import { StaticImageData } from "next/image";

export interface DoctorProps {
  _id: string;
  name: string;
  image: string | StaticImageData;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: {
    line1: string;
    line2: string;
  };
}
